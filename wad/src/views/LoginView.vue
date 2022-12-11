<template>
  <Test></Test>
  <div class="container">
    <form @submit.prevent="">
      <div class="login-card">
        <h1>Welcome to PostIt</h1>
        <router-link to="/signup">Create an account</router-link>
        <span
          >or<br />
          Please log in</span
        >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          v-model="this.email"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          v-model="this.password"
        />
        <input
          @click="login"
          type="submit"
          name="login"
          class="log-in-btn"
          value="Log in"
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
}

.login-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 300px;
  border-radius: 15px;
  padding: 20px;
}

.login-card > span {
  text-align: center;
}

h1 {
  margin: 0;
  margin-bottom: 10px;
}

h1 + a {
  color: #00b4f2;
}

span ~ input {
  margin-top: 5px;
  font-size: 12pt;
}

.log-in-btn {
  margin-top: 10px;
  width: 100px;
  height: 30px;
  background-color: #004580;
  color: white;
  font-weight: bold;
  border: none;
}

.log-in-btn:hover {
  background-color: #00b4f2;
}

.log-in-btn + a {
  margin-top: 10px;
  color: #00b4f2;
}
</style>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      validatePassword: '',
    };
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          //this.$router.push("/");
          location.assign('/');
        })
        .catch((e) => {
          console.log(e);
          console.log('error');
        });
    },
  },
};
</script>
