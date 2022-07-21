<template>
  <div id="app">
    <div class="nav">
      <h6><router-link to="/">ABOUT</router-link></h6>
      <h6><router-link to="/projects">PROJECTS</router-link></h6>
      <!--<p>Achievements</p>-->
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
    --orange: #ff9647;
    --lemon: #fff354;
    --magenta: #ff3b8b;
    --cyan: #21e7ff;
    --purple: #7f47ff;
    --black: #050203;
  }

  header, h2, h3, h4, h5, h6 {
    font-family: Montserrat, sans-serif;
  }

  p {
    font-family: Esteban, serif;
  }

  body {
    color: var(--black);
    overflow-x: hidden;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  .pointer {
    cursor: pointer;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.3);
    border: none;
    text-align: left;
    padding: 1rem;
  }

  .btn-primary {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    color: var(--black);
    background-color: var(--lemon);
    box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.3);
    border: none;
    padding: 0.5rem 1.5rem;
  }

  .btn-primary:hover {
    background-color: var(--orange);
    color: var(--black);
  }

	.justify {
		text-align: justify;
	}

  @media only screen and (max-width: 576px) {
    h1, header {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
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
      font-size: 2.5rem;
    }
  }
  @media only screen and (min-width: 992px) {
    h1, header {
      font-size: 2.8rem;
    }

    .page {
      padding: 0 10%;
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
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: right;
    align-items: flex-end;

    a {
      color: var(--black);
    }

    a:hover {
      text-decoration: underline;
    }

    .router-link-exact-active {
      font-weight: bold;
    }
  }
}

.logo {
  height: 65px;
}

@media only screen and (max-width: 576px) {
  .nav {
    & h6 {
      padding-right: 1rem;
    }
  }
}

@media only screen and (min-width: 576px) {
  .nav {
    & h6 {
      margin: 0 1rem;
    }
  }
}

@media only screen and (min-width: 768px) { }

@media only screen and (min-width: 992px) {
  .nav {
    padding: 0 10%;

    & h6 {
      margin-left: 2rem;
      margin-right: 0;
    }
  }
}

@media only screen and (min-width: 1200px) { }
</style>
