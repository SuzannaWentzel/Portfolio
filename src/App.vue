<template>
  <div id="app">
    <div class="nav">
      <span>
        <img src="../public/images/full_logo.png" class="logo" />
      </span>
      <!--<p>Achievements</p>-->
      <!--<p>Projects</p>-->
      <!--<p>Research</p>-->
      <!--<p>Contact</p>-->
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="content"/>
  </div>
</template>

<script>
import { BootstrapVue } from 'bootstrap-vue';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import * as VueScrollTo from 'vue-scrollto';

Vue.use(BootstrapVue);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

export default {
  name: "App"
}
</script>

<style lang="scss">
  :root {
    --primary: #85AA82;
    --orange: #F4A153;
    --red: #CC403A;
    --dark: #254844;
    --light: #F1E1B4;
  }

  p, h1, h2, h3, h4, h5, h6 {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0.1rem 0.5rem;
  }

  body {
    /*background-color: var(--light);*/
    color: black;
  }

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
      font-size: 2rem;
      font-weight: bold;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 992px) {

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
  top: 0;
  left: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .nav {
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
  }
}

.logo {
  height: 65px;
}

.content {
  top: 0;
  position: absolute;
}

.footer {
  position: relative;
  width: 100%;
  padding: 0.25rem 0;
  text-align: center;
  bottom: 0;
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
    margin-left: 20%;
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
