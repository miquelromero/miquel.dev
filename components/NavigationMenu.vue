<template>
  <ul class="w-full flex flex-col space-y-2">
    <li
      v-for="({ color, route, title }, itemIndex) in sections"
      :key="itemIndex"
    >
      <RouterLink
        class="transition-shadow duration-300 ease-in-out font-display shadow-inline flex h-10 items-center text-gray-200 hover:shadow-inner"
        :class="`hover:bg-${color}-200 hover:text-${color}-800`"
        :active-class="`bg-${color}-200 text-${color}-800 shadow-sm hover:shadow-none`"
        exact
        :to="{ name: route }"
      >
        <div class="mx-4 text-right lowercase flex-grow text-lg">
          {{ title }}
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import sections from '@/assets/sections';

export default Vue.extend({
  data() {
    return {
      sections,
    };
  },
});
</script>
