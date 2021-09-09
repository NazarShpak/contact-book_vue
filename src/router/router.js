import VueRouter from 'vue-router'
import AllContactsPage from '../pages/AllContactsPage.vue'
import AboutContactPage from '../pages/AboutContactPage.vue'

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "all-contacts",
      component: AllContactsPage
    },
    {
      path: "/contact/:contactName",
      name: "about-contact",
      component: AboutContactPage
    }
  ]
})