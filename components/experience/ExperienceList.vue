<template>
  <div>
    <div class="text-center">
      <div class="text-sm">Filter by technology</div>
      <div class="mt-2">
        <ExperienceTag
          v-for="tag in tags"
          :key="tag.tag"
          class="mx-1 mb-2"
          big
          :tag="tag"
          :fixed-tag="fixedTag"
          :highlighted-tag="highlightedTag"
          @highlight="onHighlightTag"
          @fix="onFixTag"
        />
      </div>
    </div>
    <ul class="mt-4">
      <li>
        <ExperienceListItem
          v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience"
          :fixed-tag="fixedTag"
          :highlighted-tag="highlightedTag"
          :show-bar="index !== experiences.length - 1"
          @highlight-tag="onHighlightTag"
          @fix-tag="onFixTag"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Experience } from '@/assets/profile/experiences';
import ExperienceListItem from '@/components/experience/ExperienceListItem.vue';
import ExperienceTag from '@/components/experience/ExperienceTag.vue';
import { Tag, tags } from '~/assets/profile/tags';

interface Data {
  highlightedTag: string | null;
  fixedTag: string | null;
}

export default Vue.extend({
  name: 'ExperienceList',
  components: {
    ExperienceListItem,
    ExperienceTag,
  },
  props: {
    experiences: {
      type: Array as () => Experience[],
      default: null,
    },
  },
  data(): Data {
    return {
      highlightedTag: null,
      fixedTag: null,
    };
  },
  computed: {
    tags(): Tag[] {
      const experiencesTags = this.experiences.flatMap(
        (experience: Experience) => experience.tags
      );

      return Object.values(tags).filter((tag) => experiencesTags.includes(tag));
    },
  },
  methods: {
    onHighlightTag(tag: Tag | null) {
      this.highlightedTag = tag ? tag.tag : null;
    },
    onFixTag(tag: Tag | null) {
      this.fixedTag = tag ? tag.tag : null;
    },
  },
});
</script>
