<template>
  <ul class="w-full">
    <li v-for="(item, itemIndex) in items" :key="itemIndex">
      <RouterLink :to="item.to">{{ item.text }}</RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      items: [
        {
          text: 'Home',
          to: {
            name: 'index',
          },
        },
        {
          text: 'Contact',
          to: {
            name: 'contact',
          },
        },
      ],
    }
  },
})
</script>
