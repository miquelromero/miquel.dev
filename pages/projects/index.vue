<template>
  <div class="">
    <DrawingsProjects
      class="w-full h-full sm:w-1/2 md:w-1/3 text-primary-500 mb-8 mx-auto transition-colors duration-600"
    />
    WIP
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';
import DrawingsProjects from '@/assets/images/drawings/projects.svg?inline';

export default Vue.extend({
  components: {
    DrawingsProjects,
  },
  mixins: [pageMixin],
  head() {
    return {
      title: 'Projects made by',
    };
  },
});
</script>
