<template>
  <li class="mb-8">
    <div class="flex mb-2 items-center">
      <Component
        :is="experience.company.website ? 'a' : 'div'"
        :href="experience.company.website"
        :target="experience.company.website ? '_blank' : undefined"
        class="z-10"
      >
        <img
          class="bg-white transition-colors duration-1000 border-primary-900 border-4 rounded-full h-16 w-16"
          :src="experience.company.logo"
        />
      </Component>
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
            >{{ experience.company.name }}</Component
          >
        </div>
      </div>
    </div>
    <div class="ml-16">
      <div
        class="rounded-lg transition-colors duration-1000 bg-primary-200 p-4"
      >
        <div class="font-mono">{{ experience.description }}</div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import { Experience } from '@/assets/profile/experiences';

export default Vue.extend({
  name: 'ExperienceListItem',
  props: {
    experience: {
      type: Object as () => Experience,
      default: null,
    },
  },
});
</script>
