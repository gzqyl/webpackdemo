<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
 
    </script>
    
    <template>
        <p class="alignAdd">
            <button @click="$emit('add')">Add Item</button>
        </p>
    </template>

    <style>
        .alignAdd{
            display:flex;
            flex-direction:row;
            justify-content: center;
        }
    </style>
    
    
    