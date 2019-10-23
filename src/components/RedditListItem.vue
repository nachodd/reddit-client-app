<template>
  <q-item :to="{ name: 'post', params: { id: post.id } }" class="q-pa-xs">
    <q-card v-if="post" v-ripple clickable class="cursor-pointer card">
      <q-card-section class="q-pa-sm">
        <div class="row">
          <div class="col-sm-3 self-center" v-if="post.thumbnail">
            <img :src="post.thumbnail" class="thumb" />
          </div>
          <div
            class="q-pa-sm"
            :class="{
              'col-sm-9': post.hasThumnail,
              'col-sm-12': !post.hasThumnail,
            }"
          >
            <div class="text-h6 ellipsis-3-lines">{{ post.title }}</div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row text-subtitle2 justify-around">
          <div class="col-sm-4 col-xs-12 ellipsis text-center">
            <q-icon name="account_circle" size="sm" />
            {{ post.author }}
          </div>
          <div class="col-sm-4 col-xs-12 ellipsis text-center">
            <q-icon name="access_time" size="sm" />
            {{ post.timeAgo }}
          </div>
          <div class="col-sm-4 col-xs-12 ellipsis text-center">
            <q-icon name="comment" size="sm" />
            {{ post.commentsNumber }}
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="around">
        <q-btn
          v-if="!post.isDismissed"
          flat
          @click.prevent="dismissPost(post.id)"
          icon="delete"
        >
          DISMISS
        </q-btn>
        <q-btn v-else flat @click.prevent="recoverPost(post.id)" icon="undo">
          RECOVER
        </q-btn>

        <q-btn disable flat :text-color="textReadColor" :icon="iconRead">
          {{ textRead }}
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-item>
</template>

<script>
import { mapActions } from "vuex"
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    textRead() {
      return this.post.read ? "READ" : "UNREAD"
    },
    textReadColor() {
      return this.post.read ? "green-8" : "red"
    },
    iconRead() {
      return this.post.read ? "check" : ""
    },
  },
  methods: {
    ...mapActions({
      dismissPost: "reddit/dismissPost",
      recoverPost: "reddit/recoverPost",
    }),
  },
}
</script>

<style lang="sass" scoped>
.thumb
  border-radius: 10px
  width: 100%
  height: auto
.card
  background: linear-gradient(to right, #e5c8ff, #77bafd)
  width: 100%
</style>
