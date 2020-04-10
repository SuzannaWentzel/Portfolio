<template>
  <div class="home">
    <div class="banner"><HomeBanner /></div>
    <div class="disclaimer"><p>This is a work in progress, please don't mind the mess. Do you want to checkout the
      <a href="https://norway.suzannawentzel.nl">blog</a> about my stay in Norway?</p>
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



<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 576px) {
  .banner {
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
  }

  .disclaimer {
    margin-top: 1.5rem;
  }
}
@media only screen and (min-width: 576px) {
  .banner {
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
  }

  .disclaimer {
    margin-top: 1.5rem;
  }
}
@media only screen and (min-width: 768px) {



}
@media only screen and (min-width: 992px) {
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
  }
}
@media only screen and (min-width: 1200px) {

}

.disclaimer {
  color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0.75rem;

  & a {
    color: rgba(0, 0, 0 ,0.8);
  }
}







</style>
