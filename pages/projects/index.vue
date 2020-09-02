<template>
  <div class="">WIP</div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';

export default Vue.extend({
  mixins: [pageMixin],
  head() {
    return {
      title: 'Projects made by',
    };
  },
});
</script>
