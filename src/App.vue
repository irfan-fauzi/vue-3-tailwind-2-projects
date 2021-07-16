
<template>
  <div>
    <AppHeader />
    <TodoList />
  </div>
</template>


<script>
  import AppHeader from './components/AppHeader.vue'
  import TodoList from './components/TodoList.vue'
  export default {
    components: { AppHeader, TodoList },
  }
</script>