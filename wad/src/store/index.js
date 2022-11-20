import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        createTime: '2022-10-30T14:21:08.799Z',
        author: 'Ivan',
        text: 'Hello world!',
        likes: 42,
      },
      {
        id: 2,
        createTime: '2022-10-30T14:21:31.059Z',
        author: 'Viacheslav',
        text: 'Hello my fellow Ukrainians.',
        likes: 31,
      },
      {
        id: 3,
        createTime: '2022-10-30T14:22:14.839Z',
        author: 'Eldar',
        text: 'Hello my fellow Azerbaijanians.',
        likes: 22,
      },
      {
        id: 4,
        createTime: '2022-10-30T14:22:51.364Z',
        author: 'John',
        text: 'I am very happy to study at University of Tartu!',
        likes: 12,
      },
      {
        id: 5,
        createTime: '2022-10-30T14:23:26.119Z',
        author: 'realPivo',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
        text: 'We coded it in Vue!!!',
        likes: 14,
      },
      {
        id: 6,
        createTime: '2022-10-30T14:24:20.498Z',
        author: 'realPivo',
        text: "That's too many posts here...",
        likes: 9,
      },
      {
        id: 7,
        createTime: '2022-10-30T14:24:20.498Z',
        author: 'realPivo',
        text: 'Actually, these posts are written by the same person. But shhhh...',
        likes: 6,
      },
      {
        id: 8,
        createTime: '2022-10-30T14:25:38.407Z',
        author: 'realPivo',
        text: 'Just keep scrolling...',
        likes: 77,
      },
      {
        id: 9,
        createTime: '2022-10-30T14:25:54.851Z',
        author: 'realPivo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida auctor erat, eget aliquet nulla ultricies in. Nullam at aliquet ligula, id blandit tortor. Etiam tincidunt at sem sit amet molestie. Fusce fermentum varius purus. Proin nec ullamcorper turpis, sed viverra lorem. Curabitur vel sollicitudin metus. Aenean in eleifend odio. Donec commodo tristique nulla eget tincidunt. Nulla consequat nisl lacus, eu sollicitudin massa finibus quis. Suspendisse auctor laoreet lacus in viverra.',
        likes: 5,
      },
      {
        id: 10,
        createTime: '2022-10-30T14:24:20.498Z',
        author: 'realPivo',
        text: 'Finally! We reached the bottom!',
        likes: 999,
      },
    ],
  },
  getters: {},
  mutations: {
    gotLiked(state, id) {
      state.posts.find((post) => post.id == id.id).likes += 1;
    },
    resetLikes: (state) => {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    gotLikedAct: (act) => {
      act.commit('gotLiked');
    },
    resetLikesAct: (act) => {
      act.commit('resetLikes');
    },
  },
  modules: {},
});
