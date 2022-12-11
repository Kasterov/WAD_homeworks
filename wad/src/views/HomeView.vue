<template>
  <div class="home">
    <div class="PostArea" v-for="post of posts" @click="directPost(post.id)">
      <div class="PostHead">
        <img class="PostAuthor" :src="require(`@/assets/Logo.jpg`)" />
        <div class="PostAuthorName">{{ post.title }}</div>
        <div class="PostDate">
          {{ new Date(post.date).toLocaleDateString('en-US') }}
        </div>
      </div>
      <div class="PostImg" v-if="post.img"><img :src="post.img" /></div>
      <div class="PostTextArea">{{ post.body }}</div>
      <img
        class="PostMark"
        :src="require(`@/assets/Like.png`)"
        @click="gotLiked(post.id)"
      />
      <span class="PostLikes">{{ post.likes }}</span>
    </div>
    <resetButton @click="deletePosts"></resetButton>
  </div>
</template>

<script>
import resetButton from '@/components/resetButton.vue';

export default {
  name: 'HomeView',
  components: { resetButton },
  // computed: {
  //   posts() {
  //     return this.$store.state.posts;
  //   },
  // },
  data() {
    return {
      // imgLike: '@assets\Like.png',
      // img: 'https://www.alt-codes.net/images/copyright.png',
      // text: 'asgagasgsagagaga',
      // likes: 42,
      posts: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/api/posts')
      .then((response) => response.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    gotLiked: function (id) {
      this.$store.commit('gotLiked', { id });
    },
    resetLikes: function () {
      this.$store.commit('resetLikes');
    },
    directPost: function (id) {
      this.$router.push('/post/' + id);
    },
    deletePosts: function () {
      fetch(`http://localhost:3000/api/posts/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.go();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.PostArea {
  margin-top: 30px;
  max-width: 600px;
  min-width: 400px;
  background-color: #d4d6d6;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
}
.PostAuthorName {
  display: flex;
  float: left;
  margin-top: 30px;
  margin-left: 20px;
  font-size: 20px;
}
.PostHead {
  padding: 2px;
  max-width: 600px;
  height: 80px;
}

.PostAuthor {
  margin-top: 10px;
  margin-left: 20px;
  width: 60px;
  height: 60px;
  background-image: './assets/Logo.jpg';
  border-radius: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  float: left;
}

.PostDate {
  display: flex;
  float: right;
  margin-top: 30px;
  margin-right: 30px;
  font-size: 20px;
}

.PostImg {
  max-width: 600px;
  min-width: 400px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
}

.PostImg img {
  min-width: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

.PostName {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 30px;
}

.PostMark {
  margin-left: 10px;
  width: 60px;
  height: 60px;
  /* background-repeat: no-repeat; */
  /* background-size: 100% 100%; */
  /* background-image: '@assets/Like.png'; */
}

.PostMark:hover {
  cursor: pointer;
}

.PostTextArea {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 30px;
}
</style>
