<template>
  <div class="container">
    <form>
      <div class="add-post-card">
        <label>Title</label>
        <input type="text" v-model="post.title" />
        <label>Post body</label>
        <textarea v-model="post.body"></textarea>
        <div class="btn-wrapper">
          <input
            type="submit"
            name="create-post"
            class="create-post-btn"
            value="Add post"
            @click.prevent="addPost"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPostView',
  data() {
    return {
      post: {
        title: '',
        body: '',
        date: '',
      },
    };
  },
  methods: {
    addPost() {
      let data = {
        title: this.post.title,
        body: this.post.body,
        date: new Date(Date.now()).toISOString(),
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push('/');
        })
        .catch((e) => {
          console.log(e);
          console.log('error');
        });
    },
  },
};
</script>

<style>
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
</style>
