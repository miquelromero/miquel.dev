<template>
  <div class="">
    <DrawingsEducation
      class="w-full h-full sm:w-1/2 md:w-1/3 text-primary-500 mb-8 mx-auto transition-colors duration-600"
    />
    WIP
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';
import DrawingsEducation from '@/assets/images/drawings/education.svg?inline';

export default Vue.extend({
  components: {
    DrawingsEducation,
  },
  mixins: [pageMixin],
  head() {
    return {
      title: 'Education of',
    };
  },
});
</script>
