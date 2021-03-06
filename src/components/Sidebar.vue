<template>
  <!-- bordered content-class="bg-grey-2" -->
  <q-drawer
    v-model="sidebarOpened"
    bordered
    content-class="bg-white"
    :width="450"
  >
    <q-scroll-area class="fit">
      <q-list class="menu-list text-unselectable">
        <q-item class="sidebar-section__header">
          <q-item-section class="text-center text-white">
            <q-item-label>
              <router-link :to="{ name: 'index' }" class="title">
                <h5 class="q-my-sm">
                  Reddit Top 50
                </h5>
              </router-link>
            </q-item-label>
          </q-item-section>
          <q-item-section side class="text-center text-white">
            <q-btn
              dense
              round
              flat
              icon="delete_forever"
              @click.prevent="dismissAllPost"
            >
              <q-tooltip>
                Dismiss All Posts
              </q-tooltip>
            </q-btn>
          </q-item-section>
        </q-item>
        <div v-if="isPageLoading" class="q-my-lg">
          <div class="text-subtitle1 row justify-center q-mb-sm">
            Loading Posts..
          </div>
          <div class="row justify-center">
            <q-spinner-gears size="50px" color="primary" />
          </div>
        </div>
        <template v-else>
          <div v-if="postsCount === 0" class="text-body1">
            Nothing to show
            <span class="emoji">🤷‍♂️</span>
          </div>
          <div v-else>
            <q-item-label class="sidebar-section__header">
              <div class="sidebar-section__title">ALL POSTS</div>
              <div class="sidebar-section__subtitle">
                Total: {{ allPosts.length }}
              </div>
            </q-item-label>
            <div v-if="allPosts.length === 0" class="text-center">
              There's nothing here!
              <span class="emoji">🎉</span>
            </div>
            <transition-group v-else name="fadeLeft" tag="div">
              <RedditListItem
                v-for="post in allPosts"
                :key="post.id"
                :post="post"
              />
            </transition-group>

            <br />

            <q-expansion-item
              class="sidebar-section__header sidebar-section__header--collapsible"
            >
              <template v-slot:header>
                <q-item-section>
                  <div class="sidebar-section__title">DISMISSED</div>
                  <div class="sidebar-section__subtitle">
                    Total: {{ dismissedPosts.length }}
                  </div>
                </q-item-section>
              </template>

              <div class="bg-white q-pt-xs">
                <div v-if="dismissedPosts.length === 0" class="text-center">
                  There's nothing here!
                  <span class="emoji">🎉</span>
                </div>
                <transition-group v-else name="fadeLeft" tag="div">
                  <RedditListItem
                    v-for="post in dismissedPosts"
                    :key="post.id"
                    :post="post"
                  />
                </transition-group>
              </div>
            </q-expansion-item>
          </div>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import RedditListItem from "comp/RedditListItem"

export default {
  name: "Sidebar",
  components: { RedditListItem },
  computed: {
    ...mapState("app", {
      sidebarOpenStore: state => state.sidebarOpen,
    }),
    ...mapGetters({
      postsCount: "reddit/postsCount",
      allPosts: "reddit/allPosts",
      dismissedPosts: "reddit/dismissedPosts",
      isPageLoading: "app/isPageLoading",
    }),
    sidebarOpened: {
      set(state) {
        this.$store.dispatch("app/setSideBar", state)
      },
      get() {
        return this.sidebarOpenStore
      },
    },
  },
  methods: {
    ...mapActions({
      dismissAllPost: "reddit/dismissAllPost",
    }),
  },
}
</script>

<style lang="sass" scoped>
.sidebar-section__header
  background: linear-gradient(to right, #5e35b1, #1565c0);
  padding: 8px 16px
.sidebar-section__header--collapsible
  padding: 0

.sidebar-section__title
  color: #ffffff
  font-size: 0.875rem
  letter-spacing: 0.01786em
  max-width: 100%
  line-height: 1.2em !important
  font-weight: bold

.sidebar-section__subtitle
  font-size: 0.75rem
  font-weight: 400
  line-height: 1.25rem
  letter-spacing: 0.03333em
  color: #ffffff
  font-style: italic

.title
  text-decoration: none
  color: white
</style>
