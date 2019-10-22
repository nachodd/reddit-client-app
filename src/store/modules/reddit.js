const state = {
  posts: [],
}
const getters = {
  posts: state => state.posts,
  postById: state => id => _.find(state.posts, { id }),
}
const mutations = {
  SET_POSTS: (state, posts) => {
    state.posts = posts
  },
  SET_POST_READ: (state, id) => {
    const post = _.find(state.posts, { id })
    if (post) {
      post.read = true
    }
  },
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
