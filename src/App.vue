
<template>
  <div>
    <AppHeader />
    <!-- <TodoList /> -->
    <Calendar />
  </div>
</template>


<script>
  import AppHeader from './components/AppHeader.vue'
  //import TodoList from './components/TodoList.vue'
  import Calendar from './components/Calendar.vue'
  export default {
    components: { AppHeader, /*TodoList*/ Calendar },
  }
</script>