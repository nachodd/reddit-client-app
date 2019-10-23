<template>
  <div v-if="post">
    <div class="text-h6 q-ma-md title">{{ post.title }}</div>
    <div class="row justify-center">
      <img :src="post.thumbnail" />
    </div>
    <div class="row text-body1 q-ma-md q-col-gutter-md">
      <div class="col-12 ellipsis">
        <q-icon name="account_circle" size="lg" />
        AUTHOR: {{ post.author }}
      </div>
      <div class="col-12 ellipsis">
        <q-icon name="access_time" size="lg" />
        DATE: {{ post.createdAtFormatted }}
      </div>
      <div class="col-12 ellipsis">
        <q-icon name="comment" size="lg" />
        COMMENTS: {{ post.commentsNumber }}
      </div>
      <div class="col-12 ellipsis">
        <q-icon name="comment" size="lg" />
        URL:
        <a :href="post.url" target="_blank">{{ post.url }}</a>
      </div>
      <div class="col-12 ellipsis">
        <q-icon name="comment" size="lg" />
        ORIGINAL POST:
        <a :href="post.permalink" target="_blank">{{ post.permalink }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "PostDetail",
  data() {
    return {
      post: null,
    }
  },
  computed: {
    ...mapGetters({
      postById: "reddit/postById",
    }),
  },
  mounted() {
    this.post = this.postById(this.$route.params.id)
    if (!this.post) {
      this.$router.replace({ name: "index" })
      return
    }
    this.$store.dispatch("reddit/readPost", this.post.id)
  },
}
</script>

<style lang="sass" scoped>
.title
  border-bottom: 1px solid #555
</style>
