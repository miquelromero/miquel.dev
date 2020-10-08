<template>
  <span
    :title="title"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
      borderColor,
    }"
    :class="{
      'px-3 py-1 text-sm': big,
      'px-2 py-px text-xs': !big,
    }"
    class="inline-block bg-gray-200 rounded-full text-gray-700 font-mono border-2"
  >
    <span class="mr-px">#</span>{{ tag }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppTag',
  props: {
    tag: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    bgColor: {
      type: String,
      default: undefined,
    },
    borderColor: {
      type: String,
      default: 'transparent',
    },
    textColor: {
      type: String,
      default: undefined,
    },
    big: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
