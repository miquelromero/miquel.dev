<template>
  <div class="relative">
    <div class="w-16 absolute h-full top-0 flex justify-center">
      <div class="w-1 h-full bg-primary-900 transition-colors duration-1000" />
    </div>
    <ul class="m-0 p-0">
      <ExperienceListItem
        v-for="(experience, index) in experiences"
        :key="index"
        :experience="experience"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Experience } from '@/assets/profile/experiences';
import ExperienceListItem from '@/components/ExperienceListItem.vue';

export default Vue.extend({
  name: 'ExperienceList',
  components: {
    ExperienceListItem,
  },
  props: {
    experiences: {
      type: Array as () => Experience[],
      default: null,
    },
  },
});
</script>
