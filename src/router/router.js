import VueRouter from 'vue-router'
import AllContactsPage from '../pages/AllContactsPage.vue'
import AboutContactPage from '../pages/AboutContactPage.vue'

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: AllContactsPage
    },
    {
      path: "/contact/",
      name: "about-contact",
      component: AboutContactPage
    }
  ]
})