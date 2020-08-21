export const state = () => ({
  pageMeta: null,
});

export const mutations = {
  SET_PAGE_META(state, pageMeta) {
    state.pageMeta = pageMeta;
  },
};
