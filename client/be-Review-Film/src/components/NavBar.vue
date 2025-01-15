<template>
   <header>
    <nav class="flex justify-between  bg-cyan-500 py-2 px-4">
      <div class="flex justify-start text-gray-600 text-2xl font-bold font-sans ">
        <h1>Logo</h1>
      </div>
      <ul class="flex items-center gap-4">
        <li v-for="item in menu" :key="item.id">
         <router-link
          :to="item.url"
          class="flex justify-center px-4 py-1 border-2 bg-teal-600 text-white font-bold rounded-lg cursor-pointer font-mono hover:bg-fuchsia-600"
           v-if="item.name !== 'Login' && 'Register'">
           {{item.name}}
          </router-link>
        </li>
      </ul>
      <div class="flex items-center gap-2">
      <router-link
        :to="loginItem.url"
        class="px-4 py-1 border-2 bg-fuchsia-500 text-white font-bold rounded-lg cursor-pointer font-mono hover:bg-purple-600">
        {{loginItem.name }}
      </router-link>

      <router-link
        :to="registerItem.url"
        class="px-4 py-1 border-2 bg-blue-500 text-white font-bold rounded-lg cursor-pointer font-mono hover:bg-orange-600">
        {{ registerItem.name }}
      </router-link>
    </div>
    </nav>
   </header>
    </template> 
<script setup>
import {ref} from 'vue'
const  menu = ref ([
  {id:1, name:'Home', url:'/'},
  {id:2, name:'Genre', url:'/genre'},
  {id:3, name:'Movie', url:'/movie'},
]);
const registerItem = ref({ id: 4, name: 'Register', url: '/register' })
 const loginItem = ref ({ id: 5, name: 'Login', url: '/login' })


  </script>
