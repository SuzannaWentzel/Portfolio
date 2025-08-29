<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">
        <img src="../public/images/logo_v2.png" />
      </router-link>
      <div class="nav-links">
        <h6><router-link to="/home">ABOUT</router-link></h6>
        <h6><router-link to="/projects">PROJECTS</router-link></h6>
      </div>
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

  * {
    box-sizing: border-box;
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
    width: 100%;
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

  .center-horizontal {
    display: flex;
    justify-content: center;
  }

  .banner {
    min-height: 100vh;
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
  width: 100%;
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
    justify-content: space-between;
    align-items: center;

    a {
      color: var(--black);
    }

    a:hover {
      text-decoration: underline;
    }

    .router-link-active {
      font-weight: bold;
    }

    h6 {
      margin: 0;
    }

    img {
      width: 2rem;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}

.logo {
  height: 65px;
}

@media only screen and (max-width: 576px) { 
  .nav {
    padding: 0 1rem;

    .nav-links {
      gap: 1rem;
    }
  }
}

@media only screen and (min-width: 576px) {
  .nav {
    padding: 0 1rem;

    .nav-links {
      gap: 1rem;
    }
  }
}

@media only screen and (min-width: 768px) { }

@media only screen and (min-width: 992px) {
  .nav {
    padding: 0 10%;

    .nav-links {
      gap: 2rem;
    }
  }
}

@media only screen and (min-width: 1200px) { }
</style>
