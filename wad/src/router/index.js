import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUpView from '../views/SignUpView.vue';
import LoginView from '../views/LoginView.vue';
import ContactsView from '../views/ContactsView.vue';
import AddPostView from '../views/AddPostView.vue';
import PostView from '../views/PostView.vue';
import auth from '../auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async (to, from, next) => {
      let debug = false;
      let authResult = await auth.authenticated();
      if (!authResult & !debug) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPostView,
    beforeEnter: async (to, from, next) => {
      let debug = false;
      let authResult = await auth.authenticated();
      if (!authResult & !debug) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView,
    beforeEnter: async (to, from, next) => {
      let debug = false;
      let authResult = await auth.authenticated();
      if (!authResult & !debug) {
        next('/login');
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
