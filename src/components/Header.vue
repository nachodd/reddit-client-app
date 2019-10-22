<template>
  <q-header elevated class="headerBackground">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="toggleSidebar"
        icon="menu"
        aria-label="Menu"
      />

      <q-toolbar-title>
        Reddit Demo App
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapActions } from "vuex"

export default {
  methods: {
    ...mapActions({
      toggleSidebar: "app/toggleSidebar",
    }),
  },
}
</script>

<style lang="sass" scoped>
.headerBackground
  background: linear-gradient(to top right, #5e35b1, #1565c0)
</style>
