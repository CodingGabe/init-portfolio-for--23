<script>
  import Navigation from "./components/Navigation.vue"
  export default {
    components: { Navigation }
  }
</script>

<template>
  <!-- Navigation Bar -->
  <navigation />
  <!-- Container with Home Page -->
  <div class="container">
    <router-view></router-view>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
