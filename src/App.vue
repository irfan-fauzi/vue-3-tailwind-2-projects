
<template>
  <div>
    <AppHeader />
    <!-- semua page ada di sini -->
      <router-view></router-view>
     <!-- / semua page ada di sini -->
  </div>
</template>


<script>
  import AppHeader from './pages/AppHeader.vue'
  export default {
    components: { AppHeader},
  }
</script>