
<template>
  <button @click="show = !show">Tampil</button>
<button @click="list.push(list.length + 1)">Tambah</button>
<button @click="list.pop()">Kurang</button>
<button @click="list.reverse()">Tukar</button>
  <ul v-if="show && list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <h4 v-else-if="list.length">Tidak menampilkan data list</h4>
  <p v-else>Koosng</p>
  
</template>
<script setup>
import {ref} from 'vue'
const show = ref (true);
const list = ref ([
  1,2,3,4,5,6,7,8
])
</script>