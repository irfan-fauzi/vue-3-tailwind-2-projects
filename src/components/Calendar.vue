<template>
  <div class="m-auto max-w-screen-sm border-2">
    <h2 class="text-center font-bold text-2xl my-7">Vue Calendar</h2>
    <div class="flex justify-between">
      <h3 class="text-2xl m-2 font-bold text-black-600 ">{{ bulan }}</h3>
      <h3 class="text-2xl m-2 font-bold text-black-600 ">{{ tahun }}</h3>
    </div>
    <section class="grid grid-cols-7 bg-indigo-400 justify-center">
      <p class="font-bold text-center p-3 cursor-pointer text-white" v-for="namaHari in hari" v-bind:key="namaHari">{{ namaHari }}</p>
    </section>
    <section class="bg-indigo-100 grid grid-cols-7">

      <p class="min-w-min p-5 text-center border-2 border-green-50 cursor-pointer hover:bg-indigo-200" v-for="num in startDay()" v-bind:key="num"></p>

      <p class="min-w-min p-5 text-center border-2 border-green-50 cursor-pointer hover:bg-indigo-200" v-for="num in daysInMonth(tahun, nomorBulan)" v-bind:key="num">{{ num }}</p>
    </section>
    <!-- <h5>{{ daysInMonth(tahun, nomorBulan) }}</h5> -->
    <h5>{{ startDay() }}</h5>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      hari: ['Sen','Sel','Rab', 'Kam', 'Jum', 'Sab', 'Min'],
      nomorBulan: new Date().getMonth() + 1,
      bulan: new Date().toLocaleString("default", {month: "long"}),
      tahun: new Date().getFullYear(),
      jumlahHari: null 
    }
  },
  methods: {
    daysInMonth(year, bulan){
      return this.jumlahHari = new Date(year, bulan, 0).getDate();
    },
    startDay(){
      return new Date(2021, 6 - 1, 0).getDay()
    }
  },
  
}
</script>
