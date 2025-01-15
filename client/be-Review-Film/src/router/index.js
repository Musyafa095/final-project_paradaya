import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import GenreView from "@/views/GenreView.vue";
import MovieSection from "@/components/MovieSection.vue";


const routes = [
    {path: '/', component:HomeView},
    {path: '/genre', component: GenreView},
    {path: '/movie', component: MovieSection}
]
const router = createRouter( {
history: createWebHistory(),
routes,
});
export default router

