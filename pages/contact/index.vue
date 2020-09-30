<template>
  <div class="">
    <h1 class="text-2xl sm:text-4xl mb-4">Contact me</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';

export default Vue.extend({
  mixins: [pageMixin],
  head() {
    return {
      title: 'Contact',
    };
  },
});
</script>
