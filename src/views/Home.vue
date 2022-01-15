<template>
  <div class="home">
    <div class="page">
      <div class="banner"><HomeBanner /></div>
      <div class="banner"><AboutBanner /></div>
      <!-- <div class="banner"><AspirationBanner /></div>
      <div class="banner"><TraitsBanner /></div>
      <div class="banner"><InterestsBanner /></div> -->
      <div class="disclaimer"><p>This is a work in progress, please don't mind the mess. Do you want to checkout the
        <a href="https://norway.suzannawentzel.nl">blog</a> about my stay in Norway?</p>
      </div>
    </div>
    
    
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '../components/home/HomeBanner';
import AboutBanner from '../components/home/AboutBanner.vue';

// import AspirationBanner from '../components/home/AspirationBanner';
// import TraitsBanner from '../components/home/TraitsBanner';
// import InterestsBanner from '../components/home/InterestsBanner';
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {HomeBanner, Footer, AboutBanner}
}
</script>


<style lang="scss" scoped>
.home {
  width: 100%;
  // background-image: url('../../public/images/path_v3.png');
  // background-size: cover;
  // background-repeat: no-repeat;
  /*background-position: center;*/
  /*text-shadow: 0 0 0.5rem #fff;*/
}

.banner {
  height: 100vh;
}

.disclaimer {
  width: 100%;
  color: var(--black);

  & a {
    color: var(--purple);
  }
}

@media only screen and (max-width: 576px) {
  .disclaimer {
    bottom: 0.5rem;
    padding: 0.5rem 0.75rem;

  }
}
@media only screen and (min-width: 576px) {
  .disclaimer {
    padding: 0 2rem;
  }
}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 992px) {
  .disclaimer {
    padding: 0 1rem;
  }
}

@media only screen and (min-width: 1200px) {
  .disclaimer {
    text-align: right;
  }
}

</style>
