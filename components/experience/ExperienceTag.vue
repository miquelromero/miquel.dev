<template>
  <AppTag
    class="shadow duration-500 transition-all"
    :class="{
      'cursor-pointer hover:shadow-md': !readOnly,
    }"
    :title="tag.name"
    :tag="tag.tag"
    :big="big"
    :bg-color="isActive ? tag.primaryColor : undefined"
    :text-color="isActive ? tag.secondaryColor : undefined"
    :border-color="!readOnly && isFixed ? 'white' : 'transparent'"
    @mouseenter.native="!readOnly && onMouseenter()"
    @mouseleave.native="!readOnly && onMouseleave()"
    @click.native="!readOnly && onClick()"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import AppTag from '@/components/ui/AppTag.vue';
import { Tag } from '~/assets/profile/tags';

interface Data {
  highlightedTag: string | null;
  fixedTag: string | null;
}

export default Vue.extend({
  name: 'ExperienceList',
  components: {
    AppTag,
  },
  props: {
    tag: {
      type: Object as () => Tag,
      default: null,
    },
    highlightedTag: {
      type: String,
      default: null,
    },
    fixedTag: {
      type: String,
      default: null,
    },
    big: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isActive(): boolean {
      if (this.fixedTag === null && this.highlightedTag === null) {
        return true;
      }
      return this.isFixed || this.isHighlighted;
    },
    isHighlighted(): boolean {
      return this.tag.tag === this.highlightedTag;
    },
    isFixed(): boolean {
      return this.tag.tag === this.fixedTag;
    },
  },
  methods: {
    onClick() {
      if (this.isFixed) {
        this.$emit('highlight', null);
      }
      this.$emit('fix', this.isFixed ? null : this.tag);
    },
    onMouseenter() {
      this.$emit('highlight', this.tag);
    },
    onMouseleave() {
      this.$emit('highlight', null);
    },
  },
});
</script>
