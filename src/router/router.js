import VueRouter from 'vue-router'
import AllContactsPage from '../pages/AllContactsPage.vue'
import AboutContactPage from '../pages/AboutContactPage.vue'

export default new VueRouter({
  routes: [
    {
      path: "/",
      id: '0',
      name: "all-contacts",
      component: AllContactsPage
    },
    {
      path: "/contact/:contactIndex",
      id: '1',
      name: "about-contact",
      component: AboutContactPage
    }
  ]
})