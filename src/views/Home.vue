<template>
  <div class="home">
    <div class="banner"><HomeBanner /></div>
    <div class="banner"><AspirationBanner /></div>
    <div class="banner"><TraitsBanner /></div>
    <div class="banner"><InterestsBanner /></div>
    <div class="disclaimer"><p>This is a work in progress, please don't mind the mess. Do you want to checkout the
      <a href="https://norway.suzannawentzel.nl">blog</a> about my stay in Norway?</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '../components/home/HomeBanner';
import AspirationBanner from '../components/home/AspirationBanner';
import TraitsBanner from '../components/home/TraitsBanner';
import InterestsBanner from '../components/home/InterestsBanner';
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {InterestsBanner, TraitsBanner, AspirationBanner, HomeBanner, Footer}
}
</script>


<style lang="scss" scoped>
.home {
  width: 100%;
  background-image: url('../../public/images/path_v3.png');
  background-size: cover;
  background-repeat: no-repeat;
  /*background-position: center;*/
  /*text-shadow: 0 0 0.5rem #fff;*/
}

@media only screen and (max-width: 576px) {
  .disclaimer {
    bottom: 0.5rem;
    position: absolute;
  }
}
@media only screen and (min-width: 576px) {
  .disclaimer {
    bottom: 0.75rem;
    position: absolute;
  }
}

@media only screen and (min-width: 768px) {
  .disclaimer {
    right: 0;
    bottom: 0.75rem;
    position: absolute;
    text-align: right;
  }
}

@media only screen and (min-width: 992px) {
  .disclaimer {
    right: 0;
    bottom: 0.75rem;
    position: absolute;
    text-align: right;
  }
}

@media only screen and (min-width: 1200px) {}

.banner {
  height: 100vh;
}

.disclaimer {
  color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0.75rem;

  & a {
    color: rgba(0, 0, 0 ,0.8);
  }
}
</style>
