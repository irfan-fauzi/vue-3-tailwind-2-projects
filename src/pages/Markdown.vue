

<template>
  <section>
    <h2 class="text-center mt-10 text-4xl">Markdown Vue</h2>
    <div class="flex w-full my-10">
      <section class="wrap flex m-auto w-10/12 h-100 gap-2">
        <article  class="w-1/2 border-2 border-blue-300 p-2">
          <textarea  class="border-2 border-blue-300 w-full h-full p-3" :value="textArea" @input="update"></textarea>
        </article>
        <article
          v-html="convertToMd"
          class="w-1/2 border-2 border-blue-300 p-3">
        </article>
      </section>
      
    </div>
  </section>  
</template>

<script>

import marked from 'marked';
import debounce from '../utilities/mixins/debounce';
export default {

  mixins: [debounce],
  data(){
    return {
      textArea: "",
    }
  },
  
  methods: {
      update(e){
        const task = () => { this.textArea = e.target.value }
        this.debounce(task)
      },
     
  },

  computed: {
    convertToMd(){
      return marked(this.textArea)
    }
  }
}
</script>

<style>
.wrap{
  height: 600px;
}
</style>