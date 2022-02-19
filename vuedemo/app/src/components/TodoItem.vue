<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
   let props = defineProps({
     ctn: String
   })

   
    
</script>
    
<template>
  <h4 class="asinlineel">{{ctn}}</h4>
</template>

<style>
  .asinlineel{
    display:inline;
  }
</style>
