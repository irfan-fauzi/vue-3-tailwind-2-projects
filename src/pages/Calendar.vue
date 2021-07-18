



<template>
  <div class="m-auto max-w-screen-sm border-2">
    <h2 class="text-center font-bold text-2xl my-7">Vue Calendar</h2>
    <div class="flex justify-between">
      <h3 class="text-2xl m-2 font-bold text-black-600 ">{{ currentMonthName }}</h3>
      <h3 class="text-2xl m-2 font-bold text-black-600 ">{{ tahun }}</h3>
    </div>
    <!-- nama nama hari -->
    <section class="grid grid-cols-7 bg-indigo-400 justify-center">
      <p class="font-bold text-center p-3 cursor-pointer text-white"
      v-for="namaHari in hari"
      v-bind:key="namaHari">{{ namaHari }}</p>
    </section>
    <!-- / nama hari -->

    <section class="bg-indigo-100 grid grid-cols-7">
      <!-- tampilan tanggal yang kosong -->
      <p class="min-w-min p-5 text-center border-2 border-green-50 cursor-pointer hover:bg-indigo-200" 
      v-for="num in startDay()" 
      v-bind:key="num"></p>
      <!-- tampilan tanggal yang kosong -->

      <!-- tampilan tanggal -->
      <p class="min-w-min p-5 text-center border-2 border-green-50 cursor-pointer hover:bg-indigo-200"
       v-for="num in daysInMonth()"
       v-bind:key="num"
       :class="currentDateClass(num)"
       >
       {{ num }}
       </p>
      <!-- / tampilan tanggal -->
    </section>


    <!-- section button -->
    <section class="flex justify-between my-5">
      <button class="bg-blue-400 py-1 px-6 text-white hover:bg-blue-700 transition-all" @click="prev()">Prev</button>
      <button class="bg-blue-400 py-1 px-6 text-white hover:bg-blue-700 transition-all" @click="next()">Next</button>
    </section>  
    <!-- end section button -->
   
  </div>  
</template>

<script>
export default {

  data(){
    return{
      currentDate: new Date().getUTCDate() ,
      hari: ['Sen','Sel','Rab', 'Kam', 'Jum', 'Sab', 'Min'],
      nomorBulan: new Date().getMonth(),
      tahun: new Date().getFullYear(),
      jumlahHari: null,
    }
  },
  methods: {
    daysInMonth(){
      return this.jumlahHari = new Date(this.tahun, this.nomorBulan + 1, 0).getDate();
    },
    startDay(){
      return new Date(this.tahun, this.nomorBulan , 0).getDay()
    },
    next(){
      if(this.nomorBulan === 11){
        this.nomorBulan = 0;
        this.tahun++
      } else {
        this.nomorBulan++
      }
    },
    prev(){
      if(this.nomorBulan === 0){
        this.nomorBulan = 11;
        this.tahun--
      } else {
        this.nomorBulan--
      }
    },
    currentDateClass(num){
      const calendarFullDate = new Date(this.tahun, this.nomorBulan, num).toDateString()
      const currentFullDate = new Date().toDateString()
      return calendarFullDate === currentFullDate ? 'bg-blue-400' : ''
    }
  },
  computed: {
    currentMonthName(){
      return new Date(this.tahun ,this.nomorBulan).toLocaleString("default", { month: "long"})
    }
  }
}
</script>
