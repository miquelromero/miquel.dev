<template>
  <div class="">
    <DrawingsSkills
      class="w-full h-full sm:w-1/2 md:w-1/3 text-primary-500 mb-8 mx-auto transition-colors duration-600"
    />
    WIP
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';
import DrawingsSkills from '@/assets/images/drawings/skills.svg?inline';

export default Vue.extend({
  components: {
    DrawingsSkills,
  },
  mixins: [pageMixin],
  head() {
    return {
      title: 'Skills of',
    };
  },
});
</script>
