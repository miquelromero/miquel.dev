import { Middleware } from '@nuxt/types';
import sections from '@/assets/sections';

const pageMeta: Middleware = ({ route, store }) => {
  store.commit(
    'SET_PAGE_META',
    sections.find((section) => section.route === route.name)
  );
};

export default pageMeta;
