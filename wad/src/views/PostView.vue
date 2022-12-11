<template>
  <div class="container">
    <form>
      <div class="add-post-card">
        <h2>{{ post.title }}</h2>
        <label>Post body</label>
        <textarea v-model="post.body"></textarea>
        <div class="btn-wrapper">
          <input
            type="submit"
            name="create-post"
            class="create-post-btn"
            value="Update post"
            @click.prevent="updatePost"
          />
        </div>
        <div class="btn-wrapper">
          <input
            type="submit"
            name="create-post"
            class="create-post-btn"
            value="Delete post"
            @click.prevent="deletePost"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostView',
  data() {
    return {
      post: {
        id: '',
        title: '',
        body: '',
        date: '',
      },
    };
  },
  methods: {
    updatePost() {
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push('/');
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push('/');
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    fetch(`http://localhost:3000/api/posts/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.post = data;
        console.log(this.post);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
}

.add-post-card {
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 300px;
  border-radius: 15px;
  padding: 20px;
}

.add-post-card label {
  grid-column: 1;
}

.add-post-card textarea,
input:first-child {
  grid-column: 2;
}

.add-post-card textarea {
  height: 100px;
}

.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/3;
}

.create-post-btn {
  margin-top: 10px;
  width: 100px;
  height: 30px;
  background-color: #004580;
  color: white;
  font-weight: bold;
  border: none;
  justify-content: center;
  align-items: center;
}

.create-post-btn:hover {
  background-color: #00b4f2;
}

h2 {
  text-align: center;
}
</style>
