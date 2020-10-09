<template>
  <div class="text-center align-center flex-grow flex flex-col justify-center">
    <h1 class="text-3xl sm:text-5xl mb-4">
      Hi, it's <span class="font-bold">Miquel</span> 👋
    </h1>
    <p class="text-xl sm:text-3xl">
      I am a <span class="font-bold">Frontend Developer</span> located in Girona
      (<span class="font-bold">Barcelona</span>) specialized in
      <span class="font-bold">Vue.js</span>
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
