<template>
<header>
<Navbar/>
</header>
<main>
    <router-view />
</main>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { defineAsyncComponent } from 'vue';


const Navbar = defineAsyncComponent(() => import('@/components/NavBar.vue'));








</script>