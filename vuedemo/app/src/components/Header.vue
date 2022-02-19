<script setup>
   
   const headerTitle = "Test Header"

   defineProps({
       headermsg: String
   })
    
</script>

<template>
    <header>
        <div class="header-area" :title="headerTitle">
            The Simple Todo Demo Use Vue 3.0 {{headermsg}}
        </div>
    </header>
</template>

<style>
    .header-area {
      display:flex;
      justify-content: center;
      font-weight:bold;
    }
</style>


