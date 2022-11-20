<template>
  <Test></Test>
  <div class="container">
    <form @submit.prevent="validateForm">
      <div class="login-card">
        <h1>Welcome to PostIt</h1>
        <a href="">Create an account</a>
        <span
          >or<br />
          Please log in</span
        >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
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
        <div v-if="validatePassword" class="error">{{ validatePassword }}</div>
        <input type="submit" name="login" class="log-in-btn" value="Log in" />
        <a href="">Forget password</a>
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
  name: 'SignUpView',
  data() {
    return {
      password: '',
      validatePassword: '',
    };
  },
  methods: {
    validateForm() {
      console.log('signup is submitted');
      this.validatePassword =
        this.password.length < 8 || this.password > 15
          ? 'Password must be at least 8 chars and less then 15 chars'
          : '';
      console.log(this.validatePassword);
      let regex = /^[A-Z]+[a-z]+[0-9]+_+/;
      console.log(regex.test(this.password));
      console.log(this.password);
      this.validatePassword = regex.test(this.password)
        ? ''
        : 'Password must contain a combination of Uppercase characters (A-Z), Lowercase characters (a-z), Digits (0-9), and _';
    },
  },
};
</script>
