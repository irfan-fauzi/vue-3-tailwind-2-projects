
<template>
  <div class="flex flex-wrap w-full">
    <div 
      v-if="slide === 1"
      class="absolute w-full bg-red-400" style="height: 350px"></div>
    <div 
      v-if="slide === 2"
      class="absolute w-full bg-yellow-400" style="height: 350px"></div>
    <div 
      v-if="slide === 3"
      class="absolute w-full bg-green-400" style="height: 350px"></div>
    

  </div>
</template>

<script>
export default {
  data(){
    return {
      slide: 1,
      interval: null
    }
  },

  mounted(){
   this.interval = setInterval(() => {
      console.log('i am change when mounted')
      this.slide++
      if(this.slide > 3){
        this.slide = 1
      }
    }, 3000)
  },
  unmounted(){
    console.log('unmounted')
  },
  beforeUnmount(){
    console.log('before Unmounted')
    clearInterval(this.interval)
  },
  
}
</script>

<style>

</style>