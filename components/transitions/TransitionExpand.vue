<script lang="ts">
// Adapted from https://github.com/maoberlehner/transition-to-height-auto-with-vue/tree/master/src/components
import Vue from 'vue';

export default Vue.extend({
  name: 'TransitionExpand',
  functional: true,
  props: {
    enterClass: {
      type: String,
      default: undefined,
    },
    leaveClass: {
      type: String,
      default: undefined,
    },
    appearClass: {
      type: String,
      default: undefined,
    },
    enterToClass: {
      type: String,
      default: undefined,
    },
    leaveToClass: {
      type: String,
      default: undefined,
    },
    appearToClass: {
      type: String,
      default: undefined,
    },
    enterActiveClass: {
      type: String,
      default: undefined,
    },
    leaveActiveClass: {
      type: String,
      default: undefined,
    },
    appearActiveClass: {
      type: String,
      default: undefined,
    },
  },
  render(createElement, context) {
    const data = {
      props: {
        ...context.props,
      },
      on: {
        afterEnter(element: HTMLElement) {
          element.style.height = 'auto';
        },
        enter(element: HTMLElement) {
          const { width } = getComputedStyle(element);
          element.style.width = width;
          element.style.position = 'absolute';
          element.style.visibility = 'hidden';
          element.style.height = 'auto';
          const { height } = getComputedStyle(element);
          element.style.width = '';
          element.style.position = '';
          element.style.visibility = '';
          element.style.height = '0';
          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height;
          requestAnimationFrame(() => {
            element.style.height = height;
          });
        },
        leave(element: HTMLElement) {
          const { height } = getComputedStyle(element);
          element.style.height = height;
          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height;
          requestAnimationFrame(() => {
            element.style.height = '0';
          });
        },
      },
    };
    return createElement('Transition', data, context.children);
  },
});
</script>
