<template>
  <div
    class="transition-all duration-500"
    :class="{ 'opacity-50 pointer-events-none': isDisabled }"
  >
    <div class="flex" :class="{ 'lg:flex-row-reverse': isEven }">
      <div class="hidden lg:block flex-grow w-0"></div>

      <div class="flex-shrink-0 flex flex-col items-center">
        <Component
          :is="experience.company.website ? 'a' : 'div'"
          class="z-10"
          :href="experience.company.website"
          :target="experience.company.website ? '_blank' : undefined"
          :rel="experience.company.website ? 'noopener' : undefined"
        >
          <div
            class="bg-white h-12 rounded-full w-12 sm:h-16 sm:w-16 overflow-hidden"
          >
            <Transition
              appear
              appear-active-class="transition-all duration-500 ease-out-in"
              appear-class="opacity-0 transform scale-0"
              appear-to-class="opacity-100"
            >
              <img
                class="w-full h-full border-white border-4 rounded-full"
                width="100%"
                height="100%"
                :alt="experience.company.name"
                :aria-label="experience.company.name"
                :src="experience.company.logo"
              />
            </Transition>
          </div>
        </Component>
        <div
          v-if="showBar"
          class="flex-grow w-1 bg-white transition-colors duration-600"
        />
      </div>
      <Transition
        appear
        appear-active-class="transition-all duration-500 ease-out-in"
        :appear-class="`opacity-0 transform translate-x-32 ${
          isEven ? 'lg:-translate-x-32' : ''
        }`"
        appear-to-class="opacity-100"
      >
        <div
          class="flex flex-col flex-grow pb-4 md:pb-6 w-0"
          :class="{ 'lg:text-right': isEven }"
        >
          <div class="flex pb-2">
            <div class="flex-1 ml-4" :class="{ 'lg:ml-0 lg:mr-4': isEven }">
              <div class="font-bold text-lg">
                {{ experience.role }}
              </div>
              <div class="text-sm font-thin">
                at
                <Component
                  :is="experience.company.website ? 'a' : 'span'"
                  class="font-semibold"
                  :href="experience.company.website"
                  :target="experience.company.website ? '_blank' : undefined"
                  :rel="experience.company.website ? 'noopener' : undefined"
                  >{{ experience.company.name }}</Component
                >
              </div>
              <div class="pt-1 font-thin text-xs">
                <template v-if="isCurrentJob"
                  >since {{ formattedStartDate }}</template
                >
                <template v-else
                  >from {{ formattedStartDate }} to
                  {{ formattedEndDate }}</template
                >
              </div>
            </div>
          </div>
          <TransitionExpand
            enter-active-class="transition-all duration-500 ease-out"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-500 ease-out"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-show="!isDisabled"
              class="rounded-lg bg-white overflow-hidden"
            >
              <div class="px-6 py-4 text-sm">
                {{ experience.description }}
              </div>
              <div v-if="experience.tags.length > 0" class="px-6 pt-4 pb-2">
                <ExperienceTag
                  v-for="tag in experience.tags"
                  :key="tag.tag"
                  class="mr-2 mb-2"
                  :class="{ 'lg:mr-0 lg:ml-2': isEven }"
                  :tag="tag"
                  :fixed-tag="fixedTag"
                  :highlighted-tag="highlightedTag"
                  read-only
                  @highlight="$emit('highlight-tag', $event)"
                  @fix="$emit('fix-tag', $event)"
                />
              </div>
            </div>
          </TransitionExpand>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Experience, MonthAndYear } from '@/assets/profile/experiences';
import ExperienceTag from '@/components/experience/ExperienceTag.vue';
import { format } from 'date-fns';
import TransitionExpand from '@/components/transitions/TransitionExpand.vue';

export default Vue.extend({
  name: 'ExperienceListItem',
  components: {
    ExperienceTag,
    TransitionExpand,
  },
  props: {
    experience: {
      type: Object as () => Experience,
      default: undefined,
    },
    highlightedTag: {
      type: String,
      default: null,
    },
    fixedTag: {
      type: String,
      default: null,
    },
    showBar: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: undefined,
    },
  },
  computed: {
    formattedStartDate(): string {
      return this.formatDate(this.experience.from);
    },
    formattedEndDate(): string | undefined {
      return this.experience.to
        ? this.formatDate(this.experience.to)
        : undefined;
    },
    isCurrentJob() {
      return this.experience.to === null;
    },
    isDisabled() {
      return (
        this.fixedTag !== null &&
        !this.experience.tags.some((tag) => tag.tag === this.fixedTag)
      );
    },
    isEven(): boolean {
      return this.index % 2 === 0;
    },
  },
  methods: {
    formatDate(montAndYear: MonthAndYear): string {
      return format(
        new Date(montAndYear.year, montAndYear.month - 1, 1),
        'MMM yyyy',
      );
    },
  },
});
</script>
