<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import TodoItem from './TodoItem.vue'
    import DelButton from './DelButton.vue'
    import AddButton from './AddButton.vue'
    import {ref} from 'vue'
    let count = 0
     

    let todos = []
    for(let i=0; i< 10; i++){
        todos.push({
            rank: `rank is ${i+1}`
        })
        count++
    }

    const todolist = ref(todos)

    function removeEl(ik){
        
        todolist.value.splice(ik,1)
    }

    function addEl(){
        count++
        todolist.value.push({
            rank: `rank is ${count}`
        })
    }

    </script>
    
    <template>
      <ul>
        <li v-for="(todo,k) in todolist" class="itemspace">
          <TodoItem :ctn="todo.rank" />
          <DelButton :ikey="k" class="delbtn" @del="removeEl" />
        </li>
      </ul>
      <AddButton @add="addEl" />
    </template>
    
    <style>
    .delbtn {
     margin-left:15rem;
    }
    .itemspace{
        margin-top:10px;
        list-style:none;
    }
    </style>
    