import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/pages/Home.vue";
import Login from "../views/pages/auth/Login.vue";
import Register from "../views/pages/auth/Register.vue";
import NotFound from "../views/pages/NotFound.vue";
import dataTable from "../components/plane/data-plane-table.vue"
import dataUserTable from "../components/user/data-user-table.vue"
import flightLine from "@/components/flight-line/data-flight-line-table.vue"
import Contact from "@/components/contact/data-table.vue"
import UserContact from "@/components/user-contact/data-table.vue"
import Flight from "@/components/flight/data-table.vue"
import Tikect from "@/components/tickect/data-table.vue"
import Pilot from "@/components/pilot/data-table.vue"
import Hostess from "@/components/hostess/data-table.vue"






Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
   
  },
  {
    path: "/plane",
    name: "dataTable",
    component: dataTable,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  ,
  {
    path: "/hostess",
    name: "Hostess",
    component: Hostess,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/pilot",
    name: "Pilot",
    component: Pilot,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  
  {
    path: "/flight-line",
    name: "flightLine ",
    component: flightLine ,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/flight",
    name: "Fligh ",
    component: Flight ,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/tikect",
    name: "Tikect ",
    component: Tikect ,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/user-contact",
    name: "User Contact ",
    component: UserContact,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/user",
    name: "user",
    component: dataUserTable ,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
 
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
 
 
    {
    path: "/login",
    name: "login",
    component: Login,
    
   
  },
 
   {
    path: "/register",
    name: "register",
    component: Register,
   
  },
  
   {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
   
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
function ifAuthenticated  (to, from, next)  {  
  if (localStorage.getItem("token")) { console.log("login done");
   next(); 
   return;
 }
  router.push({  name: 'login' });
}

export default router
