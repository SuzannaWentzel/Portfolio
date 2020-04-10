<template>
  <div id="app">
    <div class="nav">
      <span>
        <img src="../public/images/logo.png" class="logo" />
        uzanna Wentzel
      </span>
      <!--<p>Projects</p>-->
      <!--<p>Research</p>-->
      <!--<p>Achievements</p>-->
      <!--<p>Contact</p>-->
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import { BootstrapVue } from 'bootstrap-vue';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

export default {
  name: "App"
}
</script>

<style lang="scss">
  @media only screen and (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.75rem;
    }
  }

  @media only screen and (min-width: 576px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
</style>

<style lang="scss" scoped>

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0;
  left: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.logo {
  width: 50px;
}


@media only screen and (max-width: 576px) {

}
@media only screen and (min-width: 576px) {

}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {
  .nav {
    width: 60%;
    margin: auto;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      margin: 0;
    }
  }
}
@media only screen and (min-width: 1200px) {

}
</style>
