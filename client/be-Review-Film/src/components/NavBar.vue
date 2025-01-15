<template>
   <header>
    <nav class="flex justify-between  bg-cyan-500 py-2 px-4">
      <div class="flex justify-start text-gray-500 text-2xl ">
        <h1>Logo</h1>
      </div>
      <ul class="flex justify-between items-center gap-4">
        <li v-for="item in menu" :key="item.id">
         <router-link
          :to="item.url"
          class="block text-white transition hover:text-blue-600 ease-linear text-2xl font-serif cursor-pointer ">
           {{item.name}}
          </router-link>
        </li>
      </ul>
      <button class="py-1 px-3 border-2 border-cyan-600 bg-teal-300 rounded-lg">
       Login
      </button>
    </nav>
   </header>
    </template> 
<script setup>
import {ref} from 'vue'
const  menu = ref ([
  {id:1, name:'Home', url:'/'},
  {id:2, name:'Genre', url:'/genre'},
  {id:3, name:'Movie', url:'/movie'},
])
  </script>
