<template>
  <main class="text-center m-auto max-w-screen-sm">
    <h1 class="text-4xl">Form Vue</h1>
    <h5 class="m-5">jumlah data ada {{ hitungJumlahData }}</h5>
    <form class="m-5 flex-auto" v-on:submit.prevent="submitData">
      <input v-model.trim="newTodo" type="text" class="border-2 p-2">
      <button class="bg-blue-300 p-2">add</button>
    </form>
    <ul class="m-10" v-for="el, index in array" v-bind:key="el.id">
      <li class="border-2 border-green-300 p-3 flex justify-between">
        <p class="font-bold">{{ el.nama}}</p>
        <button @click="hapusData(index)" class="text-white bg-red-400 px-3 py-1">hapus</button>
      </li>
    </ul>
    <!-- computed han-->
    <div class="border-2 p-3">
      <h3 class="font-bold">computed property : </h3>
      <h5>{{ computedAcakBilangan }}</h5>
    </div>
    <!-- method -->
    <div class="border-2 m-2 p-3">
      <h3 class="font-bold">method property : </h3>
      <h5>{{ methodAcakBilangan() }}</h5>
    </div>
</main>
</template>

<script>
export default {
   data(){
    return{
      myHeading: "Heading",
      subTitle: "hahah ini subtitle",
      headingCadangan: "Vue cadangan",
      array : [{
        id: Math.random(),
        nama: "batman"
      }],
      isShowing: false,
      newTodo: '',
      count: 0
    }
  },
  methods: {
    submitData(){
      if(this.newTodo !== ""){

        this.array.push({
          id: Math.random(),
          nama: this.newTodo 
        })
         this.newTodo = ""
      }
    },
    hapusData(index){
      this.array.splice(index, 1)
    },
    methodAcakBilangan(){
      return Math.random();
    }
  },
  mounted(){
    setInterval(() => {
      if(this.isShowing){
        this.count++
      }
    }, 1000)
  },
  computed: {
    hitungJumlahData(){
      return this.array.length;
    },
    computedAcakBilangan(){
      return this.array.length + Math.random()
    }
  }  
}
</script>
