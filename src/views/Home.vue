<template>
  <div class="home">
    <div class="banner"><HomeBanner /></div>
    <div class="disclaimer">This is a work in progress, please don't mind the mess. Do you want to checkout the 
      <a href="https://norway.suzannawentzel.nl">blog</a> about my stay in Norway?
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '../components/HomeBanner'


export default {
  name: 'Home',
  components: {HomeBanner}
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}

.banner {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
}

.disclaimer {
  right: 0;
  bottom: 0;
  position: absolute;
  text-align: right;
  padding: 0.5rem 0.75rem;
  color: rgba(0, 0, 0, 0.5);

  & a {
    color: rgba(0, 0, 0 ,0.8);
  }
}




</style>
