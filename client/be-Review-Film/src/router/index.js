import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import GenreView from "@/views/GenreView.vue";
import MovieSection from "@/views/MovieView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";


const routes = [
    {path: '/', component:HomeView},
    {path: '/genre', component: GenreView},
    {path: '/movie', component: MovieSection},
    {path: '/login', name:'login', component:LoginView},
    {path: '/register', name:'register', component:RegisterView}
]
const router = createRouter( {
history: createWebHistory(),
routes,
});
export default router

