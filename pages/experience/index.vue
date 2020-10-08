<template>
  <div class="flex-grow">
    <ExperienceList :experiences="experiences" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import experiences from '@/assets/profile/experiences';
import pageMixin from '@/mixins/page-mixin';
import ExperienceList from '@/components/experience/ExperienceList.vue';

export default Vue.extend({
  components: {
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
      title: 'Experience of',
    };
  },
});
</script>
