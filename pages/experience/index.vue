<template>
  <div class="space-y-8">
    <div v-for="(experience, index) in experiences" :key="index" class="">
      {{ experience.title }}
      {{ experience.description }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import experiences from '@/assets/profile/experiences';

export default Vue.extend({
  data() {
    return {
      experiences,
    };
  },
  head() {
    return {
      title: 'Experience of',
    };
  },
});
</script>
