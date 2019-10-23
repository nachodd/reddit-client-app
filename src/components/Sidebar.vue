<template>
  <!-- bordered content-class="bg-grey-2" -->
  <q-drawer
    v-model="sidebarOpened"
    bordered
    content-class="bg-white"
    :width="450"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list text-unselectable">
        <q-item :clickable="false">
          <q-item-section class="text-center">
            <q-item-label>
              <h5 class="q-my-sm">
                Reddit Top 50
              </h5>
            </q-item-label>
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
          <div v-if="postCount === 0" class="text-body1">
            Nothing to show
            <span class="emoji">🤷‍♂️</span>
          </div>
          <div v-else>
            <q-item-label class="sidebar-section__header">
              <div class="sidebar-section__title">ALL POSTS</div>
              <div class="sidebar-section__subtitle">
                Total: {{ unreadPosts.length }}
              </div>
            </q-item-label>
            <div v-if="unreadPosts.length === 0" class="text-center">
              There's nothing here!
              <span class="emoji">🎉</span>
            </div>
            <RedditListItem v-else v-for="post in unreadPosts" :key="post.id" />

            <br />

            <q-expansion-item
              class="sidebar-section__header sidebar-section__header--collapsible"
            >
              <template v-slot:header>
                <q-item-section>
                  <div class="sidebar-section__title">READ</div>
                  <div class="sidebar-section__subtitle">
                    Total: {{ readPosts.length }}
                  </div>
                </q-item-section>
              </template>

              <div class="bg-white">
                <div v-if="readPosts.length === 0" class="text-center">
                  There's nothing here!
                  <span class="emoji">🎉</span>
                </div>
                <RedditListItem
                  v-else
                  v-for="post in readPosts"
                  :key="post.id"
                />
              </div>
            </q-expansion-item>
          </div>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { mapGetters, mapState } from "vuex"
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
      unreadPosts: "reddit/unreadPosts",
      readPosts: "reddit/readPosts",
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
</style>
