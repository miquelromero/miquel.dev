<template>
  <div class="text-center">
    <h1 class="text-3xl sm:text-5xl mb-4">
      Hi, it's <span class="font-semibold">Miquel</span> 👋
    </h1>
    <p class="text-xl sm:text-3xl">
      I am a <span class="font-semibold">Frontend Developer</span> located in
      Girona (<span class="font-semibold">Barcelona</span>) specialized in
      <span class="font-semibold">Vue.js</span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';

export default Vue.extend({
  mixins: [pageMixin],
  head() {
    return {
      title: 'About',
    };
  },
});
</script>
