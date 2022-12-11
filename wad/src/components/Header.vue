<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Sign up</router-link>
  </nav> -->
  <div id="Header">
    <div class="HomeRefs"><router-link to="/">Home</router-link>|</div>
    <div class="AddRefs">
      <router-link to="/addpost">Add post</router-link>
    </div>
    |
    <div class="AddRefs">
      <router-link to="/contacts">Contacts</router-link>
    </div>
    <div class="UserBlock">
      <div class="UserLogo" @click="toggleUserInfo = !toggleUserInfo"></div>
      <Transition>
        <div id="InfoUser" v-if="toggleUserInfo" key="InfoUser">
          <div class="InnerInfo" id="InnerInfoName">Jong Dou</div>
          <div class="InnerInfo" id="InnerInfoMail">Jong Dou.ut</div>
          <div class="InnerInfo" id="InnerInfoLogout">
            <router-link to="/login" @click="logout">Log out</router-link>
            <!-- <a href="Login.html">Logout</a> -->
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
}

#Header {
  max-width: 900px;
  min-width: 400px;
  height: 80px;
  border-radius: 30px;
  background-color: #aaadab;
  color: #000000;
  margin: 10px;
  font-size: 20pt;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

.HomeRefs {
  margin-top: 25px;
  margin-left: 30px;
  width: 70px;
  height: 30px;
  display: inline-block;
  float: left;
  margin-right: 10px;
  transition: 0.2s;
}

.AddRefs {
  margin-top: 25px;
  /* width: 100px; */
  height: 30px;
  display: inline-block;
  transition: 0.2s;
}

#InfoUser {
  display: block;
  opacity: 1;
  position: relative;
  font-size: 20px;
  /* float: right; */
  /* top: 100px */
  /* margin-top: 20px; */
  /* margin-left: 78%; */
  width: 200px;
  height: 150px;
  background-color: #bfbfbf;
  border-radius: 10px;
  transition: 0.3s;
}

.InnerInfo {
  padding: 10px;
  z-index: 0;
}

.HomeRefs:hover {
  background-color: #80c4d9;
  border-radius: 10px;
}

.AddRefs:hover {
  background-color: #80c4d9;
  border-radius: 10px;
}

.UserLogo {
  margin-top: 10px;
  margin-right: 20px;
  margin-left: auto;
  display: flex;
  width: 60px;
  height: 60px;
  background-image: url('@/assets/Logo.jpg');
  border-radius: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.UserBlock {
  display: flex;
  flex-direction: column;
  float: right;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-leave-to,
.v-enter-from {
  opacity: 0;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #004580;
} */
</style>

<script>
export default {
  name: 'Header',
  data() {
    return {
      toggleUserInfo: false,
    };
  },
  methods: {
    logout() {
      this.toggleUserInfo = false;
      fetch('http://localhost:3000/auth/logout', {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          //console.log('jwt removed:' + auth.authenticated());
          this.$router.push('/login');
          //location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log('error logout');
        });
    },
  },
};
</script>
