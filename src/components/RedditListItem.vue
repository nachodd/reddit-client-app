<template>
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
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
