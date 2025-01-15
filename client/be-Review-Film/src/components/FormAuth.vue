<template>
    <form class="card-body">
      <div class="form-control" v-if="props.isRegister">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="email" placeholder="Masukan username" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label" v-if="props.isRegister">
            <span class="label-text">Konfirmasi Password</span>
          </label>
          <input type="password" placeholder="konfirmasi password" class="input input-bordered" required />
        </div>
        <div class="form-control mt-6">
     <button
     :to="props.isRegister? '/login' : '/register'"
     class="btn btn-primary"
     type="submit"
     >{{ props.isRegister? 'Register' : 'Login' }}</button>  
        </div>
      </form>

</template>
<script setup >
import { RouterLink } from 'vue-router';
const props =  defineProps({
  isRegister :{
    type: Boolean,
    default: false,
  }
})
</script>
