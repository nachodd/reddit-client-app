import { getTopPosts } from "api/reddit"
import RedditPost from "models/redditPost"

const state = {
  posts: [],
}
const getters = {
  posts: state => state.posts,
  postById: state => id => _.find(state.posts, { id }),
}
const mutations = {
  SET_POSTS: (state, posts) => {
    state.posts = _.map(posts, post => new RedditPost(post))
  },
  SET_POST_READ: (state, id) => {
    const post = _.find(state.posts, { id })
    if (post) {
      post.read = true
    }
  },
}
const actions = {
  getPosts({ commit }, limit = 50) {
    commit("app/LOADING_INC", null, { root: true })
    return getTopPosts(limit)
      .then(data => {
        const posts = _(data)
          .get("data.data.children", [])
          .map(child => child.data)
        commit("SET_POSTS", posts)
      })
      .catch(e => console.error(e))
      .finally(() => {
        commit("app/LOADING_DEC", null, { root: true })
      })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
