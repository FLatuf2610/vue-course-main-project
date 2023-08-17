import { createRouter, createWebHistory } from 'vue-router'
import CoachesList from '../views/CoachesList.vue'
import CoachDetails from '../views/CoachDetails.vue'
import ContactCoach from '../views/ContactCoach.vue'
import CoachRegistration from '../views/CoachRegistration.vue'
import RequestsRecieved from '../views/RequestsRecieved.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path:'/',
      redirect:'/coaches'
    },
    {
      path: '/register',
      component: CoachRegistration
    },
    {
      path: '/requests',
      component: RequestsRecieved
    },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children:[{path:'/coaches/:id/contact',component:ContactCoach}]
    },
  ]
})

export default router
