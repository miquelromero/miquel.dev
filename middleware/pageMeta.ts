import { Middleware } from '@nuxt/types';
import pages from '~/assets/pages';

const pageMeta: Middleware = ({ route, store }) => {
  store.commit(
    'SET_PAGE_META',
    pages.find((page) => page.routeName === route.name)
  );
};

export default pageMeta;
