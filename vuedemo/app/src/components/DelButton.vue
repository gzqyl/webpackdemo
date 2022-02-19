<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
   let props = defineProps({
       ikey: Number
   })
    </script>
    
    <template>
      <button @click="$emit('del',ikey)">Del the Item</button>
    </template>
    
    
    