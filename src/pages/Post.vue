<template>
  <div v-if="post">
    {{ post.title }}
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
    debugger
    this.post = this.postById(this.$route.params.id)
    debugger
  },
}
</script>

<style lang="scss" scoped></style>
