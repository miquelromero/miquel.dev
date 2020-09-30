<template>
  <div class="text-center">
    <h1 class="text-2xl sm:text-4xl mb-4">
      These are my <span class="font-semibold">professional experiences</span>
    </h1>
    <div class="space-y-8">
      <div v-for="(experience, index) in experiences" :key="index" class="">
        {{ experience.title }}
        {{ experience.description }}
        <br />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import experiences from '@/assets/profile/experiences';
import pageMixin from '@/mixins/page-mixin';

export default Vue.extend({
  mixins: [pageMixin],
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
