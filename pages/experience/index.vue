<template>
  <div class="">
    <h1 class="text-center text-2xl sm:text-4xl mb-4">
      These are my <span class="font-bold">professional experiences</span>
    </h1>
    <ExperienceList :experiences="experiences" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import experiences from '@/assets/profile/experiences';
import pageMixin from '@/mixins/page-mixin';
import ExperienceList from '@/components/ExperienceList.vue';

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
