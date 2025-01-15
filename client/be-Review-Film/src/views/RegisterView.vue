<template>
    <div class="hero shadow-xl min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold ">Register now!</h1>
          <p class="py-6">
            Daftar akun sekarang
          </p>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <FormAuth :isRegister="true"/>  
        </div>
      </div>
</div>
</template>
<script setup>
import FormAuth from '@/components/FormAuth.vue';
</script>