<template id="genre">
<h1 class="text-3xl text-info text-center my-10 font-mono">Halaman Genre</h1>
<section class="my-3 mx-8" v-show="inputAction">
    <h2 class="text-info text-lg">{{isEdit ? 'Edit' : 'Tambah'}} Genre</h2>
    <form @submit.prevent="ActionGenre">
<input 
type="text"
placeholder="Masukan genre"
class="input input-bordered w-full mt-2"  
v-model="name"/>

<div class="flex gap-5" >
    <button class="btn btn-success  mt-3">
      {{ isEdit ? 'Edit' : 'Tambah' }}
    </button>
    <button class="btn btn-error  mt-3" type="button"  @click="closeForm">Kembali</button>
</div>
    </form>
</section>
<section class="my-3 mx-8" >
        <div className="overflow-x-auto">
            <div class="flex justify-between mt-4">
            <h2 class="text-lg font-bold text-info my-5">Tampil Genre</h2>
            <button class="py-2 px-6 bg-blue-500 text-white rounded" @click="tambahForm"> <i class="fa fa-plus"></i> </button>
        </div>
  <table className="table table-zebra">
    <thead>
      <tr class="text-2xl font-serif text-gray-500">
        <th>No</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-base-200" v-for="(item, key) in genreData">
        <th>{{ key + 1 }}</th>
        <td>{{ item.name }}</td>
        <td class="flex gap-6">
            <input type="button" class="btn btn-primary btn-sm" value="Edit" @click="handleEdit(item)"/>
            <input type="button" class="btn btn-error btn-sm" value="Delete" @click="handleDelete(item.id)"/>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</section >
 </template>
<script setup >
import { apiClient } from '../config/axios';
import { onMounted, ref } from 'vue';

const name = ref ("");
const id = ref("");
const inputAction = ref (false);
const genreData = ref(null);
const isEdit = ref(false);

const handleDelete = async (id) => {
  try {
    const deleteData = await apiClient.post(`/genre/${id}?_method=DELETE`);
    console.log(deleteData);
    alert(deleteData.data.message);
  } catch (error) {
    console.error("error deleting genre", error);
    alert("Gagal menghapus data.");
  }
    clearInputForm()
    closeForm();
await fetchGenre();

};

const clearInputForm = async () => {
    name.value = "";
    isEdit.value = false;
}
const tambahForm = () => {
  name.value = "";
  inputAction.value = true;
  isEdit.value = false;
}
const handleEdit = (item) => {
showForm();

isEdit.value = true;
id.value = item.id
name.value = item.name; 
}
const showForm = () => {
    inputAction.value = true;
}
const closeForm = () => {
    inputAction.value = false;
}

const fetchGenre = async () => {
  const {data} =  await apiClient.get('/genre');
genreData.value = data.data;
};
const ActionGenre = async () => { 
if (isEdit.value === true){
  const updateGenre = await apiClient.post(`/genre/${id.value}?_method=PUT`, {
    name: name.value
    });
  alert(updateGenre.data.message);
} else {
  const newGenre = await apiClient.post ('/genre', {
        name: name.value
    });
alert(newGenre.data.message)
  }
    clearInputForm()
    closeForm();
await fetchGenre();
}
onMounted(() => {
    fetchGenre();
});
</script>