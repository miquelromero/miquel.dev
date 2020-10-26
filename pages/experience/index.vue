<template>
  <div class="flex-grow">
    <DrawingsExperience
      class="w-full h-full sm:w-1/2 md:w-1/3 text-primary-500 mb-8 mx-auto transition-colors duration-600"
    />
    <ExperienceList :experiences="experiences" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import experiences from '@/assets/profile/experiences';
import pageMixin from '@/mixins/page-mixin';
import ExperienceList from '@/components/experience/ExperienceList.vue';
import DrawingsExperience from '@/assets/images/drawings/experience.svg?inline';

export default Vue.extend({
  components: {
    DrawingsExperience,
    ExperienceList,
  },
  mixins: [pageMixin],
  data() {
    return {
      experiences,
    };
  },
  head() {
    return {
      title: 'Experiences',
      description: 'Here you can see my recent professional experiences',
    };
  },
});
</script>
