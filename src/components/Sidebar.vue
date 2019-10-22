<template>
  <!-- bordered content-class="bg-grey-2" -->
  <q-drawer v-model="sidebarOpened" bordered content-class="bg-white">
    <q-scroll-area class="fit">
      <q-list padding class="menu-list text-unselectable">
        <q-item :clickable="false">
          <q-item-section class="text-center">
            <q-item-label>
              <div class="q-mt-md">
                Reddit Top 50
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          clickable
          :to="{ name: 'inicio' }"
          active-class="menu-items--active"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Sidebar",
  computed: {
    ...mapState("app", {
      sidebarOpenStore: state => state.sidebarOpen,
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

<style lang="scss" scoped></style>
