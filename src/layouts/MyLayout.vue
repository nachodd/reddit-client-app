<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <Sidebar />
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "comp/Header"
import Sidebar from "comp/Sidebar"

export default {
  name: "MyLayout",
  components: {
    Header,
    Sidebar,
  },
}
</script>
