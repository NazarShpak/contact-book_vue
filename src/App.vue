<template>
  <div id="app">
    <all-contacts-page>
    </all-contacts-page>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
import AllContactsPage from './pages/AllContactsPage.vue'

export default {
  name: 'App',
  components: {
    AllContactsPage
  }
}
</script>

<style>
</style>
