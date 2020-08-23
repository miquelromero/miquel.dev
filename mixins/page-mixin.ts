import Vue from 'vue';
import pages from '@/assets/pages';

export default Vue.extend({
  scrollToTop: true,
  transition(to, from) {
    if (from === undefined) {
      return 'page-down';
    }
    const fromPageIndex =
      pages.find((page) => page.routeName === from.name)?.index || -1;
    const toPageIndex =
      pages.find((page) => page.routeName === to.name)?.index || -1;

    return toPageIndex > fromPageIndex ? 'page-up' : 'page-down';
  },
});
