<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">
        <img src="../public/images/full_logo.png" class="logo" />
      </router-link>
      <h5><router-link to="/projects">Projects</router-link></h5>
      <!--<p>Achievements</p>-->
      <!--<p>Projects</p>-->
      <!--<p>Research</p>-->
      <!--<p>Contact</p>-->
    </div>
    <div class="content">
      <router-view/>
    </div>
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

  p, header, h2, h3, h4, h5, h6 {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.3);
    padding: 0.1rem 0.5rem;
    border-radius: 3px;
  }

  body {
    /*background-color: var(--light);*/
    color: black;
  }

  .pointer {
    cursor: pointer;
  }

  @media only screen and (max-width: 576px) {
    h1, header {
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
    h1, header {
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
    h1, header {
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
  height: auto;

  .nav {
    z-index: 10;
    position: fixed;
    top: 0;
  }
}

.logo {
  height: 65px;
}

.content {
  top: 0;
  position: absolute;
  height: auto;
  width: 100%;
}

@media only screen and (max-width: 576px) {
  .nav {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    margin-left: 0.5rem;
    margin-top: 0.5rem;

    & h5 {
      margin-left: 2rem;
      padding: 0.5rem 0.75rem;
      margin-bottom: 0.2rem;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      & a {
        color: black;

        &:hover {
          color: var(--dark)
        }
      }
    }
  }
}

@media only screen and (min-width: 576px) {
  .nav {
    width: 100%;
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: left;
    align-items: flex-end;

    & h5 {
      margin-left: 2rem;
      padding: 0.5rem 0.75rem;
      margin-bottom: 0.2rem;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      & a {
        color: black;

        &:hover {
          color: var(--dark)
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) { }

@media only screen and (min-width: 992px) {
  .nav {
    width: 60%;
    margin-left: 20%;
    margin-top: 1rem;
    display: flex;
    justify-content: left;
    align-items: flex-end;

    & h5 {
      margin-left: 2rem;
      padding: 0.5rem 0.75rem;
      margin-bottom: 0.2rem;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      & a {
        color: black;

        &:hover {
          color: var(--dark)
        }
      }
    }
  }
}

@media only screen and (min-width: 1200px) { }
</style>
