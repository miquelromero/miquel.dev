<template>
  <div class="flex-grow flex flex-col justify-center text-center">
    <DrawingsAbout
      class="w-full sm:w-1/2 xl:w-1/3 h-auto mb-8 text-primary-500 transition-colors duration-600 mx-auto"
    />
    <h1
      class="text-3xl sm:text-5xl mb-4 text-primary-800 transition-colors duration-600"
    >
      Hi, it's <span class="font-bold">Miquel</span> 👋
    </h1>
    <p
      class="text-xl sm:text-3xl text-primary-800 transition-colors duration-600"
    >
      I am a <span class="font-bold">Frontend Developer</span> located in Girona
      (<span class="font-bold color-primary-500">Barcelona</span>) specialized
      in
      <span class="font-bold">Vue.js</span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';
import DrawingsAbout from '@/assets/images/drawings/about.svg?inline';

export default Vue.extend({
  components: {
    DrawingsAbout,
  },
  mixins: [pageMixin],
  head() {
    return {
      title: 'About me',
      description:
        'A frontend developer specialized in Vue.js. See my experience, projects and skills.',
    };
  },
});
</script>
