

<template>
  <div class="bg-blue-600 py-5">
    <div class="flex justify-center gap-5" >
      <router-link v-for="item in links" v-bind:key="item.name" v-bind:to="item.path">
        <h1 class="text-yellow-400 font-bold text-xl hover:text-yellow-400">{{ item.name }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      links: [{
        path: '/',
        name: 'Home'
      },
      {
        path: '/calendar',
        name: 'Calendar'
      }, 
      {
        path: '/todo',
        name: 'Todo App'
      },
      {
        path: '/markdown',
        name: 'MarkDown'
      }
      ]
    }
  }
}
</script>

<style>

</style>