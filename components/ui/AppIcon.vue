<template>
  <Component :is="icon" :width="width" :height="height" role="presentation" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppIcon',
  props: {
    icon: {
      type: Object,
      default: () => {},
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
  },
});
</script>
