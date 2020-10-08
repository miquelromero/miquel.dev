<template>
  <div
    class="transition-all duration-500"
    :class="{ 'opacity-50 pointer-events-none': isDisabled }"
  >
    <div class="flex">
      <div class="flex-shrink-0 flex flex-col items-center">
        <Component
          :is="experience.company.website ? 'a' : 'div'"
          class="z-10"
          :href="experience.company.website"
          :target="experience.company.website ? '_blank' : undefined"
          :rel="experience.company.website ? 'noopener' : undefined"
        >
          <img
            class="bg-white transition-colors duration-1000 border-primary-900 border-4 rounded-full h-12 w-12 sm:h-16 sm:w-16"
            :alt="experience.company.name"
            :aria-label="experience.company.name"
            :src="experience.company.logo"
          />
        </Component>
        <div
          class="flex-grow w-1 bg-primary-900 transition-colors duration-1000"
        />
      </div>
      <div class="flex flex-col flex-grow pb-6 md:pb-8">
        <div class="flex pb-2">
          <div class="flex-1 ml-4">
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
        <div
          class="rounded-lg transition-all duration-1000 bg-primary-100"
          :class="{ 'opacity-0 duration-500': isDisabled }"
        >
          <!--<CollapseTransition :duration="500">-->
          <div v-if="!isDisabled">
            <div class="px-6 py-4 text-sm">{{ experience.description }}</div>
            <div v-if="experience.tags.length > 0" class="px-6 pt-4 pb-2">
              <ExperienceTag
                v-for="tag in experience.tags"
                :key="tag.tag"
                :tag="tag"
                :fixed-tag="fixedTag"
                :highlighted-tag="highlightedTag"
                read-only
                @highlight="$emit('highlight-tag', $event)"
                @fix="$emit('fix-tag', $event)"
              />
            </div>
          </div>
          <!--</CollapseTransition>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Experience, MonthAndYear } from '@/assets/profile/experiences';
import ExperienceTag from '@/components/experience/ExperienceTag.vue';
import { format } from 'date-fns';
import { Tag } from '~/assets/profile/tags';

/**
const CollapseTransition = Vue.extend(
  require('@ivanv/vue-collapse-transition').CollapseTransition
);
*/

export default Vue.extend({
  name: 'ExperienceListItem',
  components: {
    ExperienceTag,
    // CollapseTransition,
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
  },
  methods: {
    formatDate(montAndYear: MonthAndYear): string {
      return format(
        new Date(montAndYear.year, montAndYear.month - 1, 1),
        'MMM yyyy'
      );
    },
  },
});
</script>
