import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const routes = [
{path: '/', name: 'home', component: Home},
{ path: '/contact', name: 'contact', component: Contact},
{path: '/about', name: 'about', component: About},
   
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
