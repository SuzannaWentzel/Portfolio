<template>
  <div class="home">
    <div class="page">
      <HomeBanner />
      <AboutBanner />
      <ProjectBanner />
      <!-- <div class="banner"><AspirationBanner /></div>
      <div class="banner"><TraitsBanner /></div>
      <div class="banner"><InterestsBanner /></div> -->
      <div class="disclaimer"><p>This is a work in progress, please don't mind the mess.</p></div>
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
import ProjectBanner from '../components/home/ProjectBanner.vue';

export default {
  name: 'Home',
  components: { HomeBanner, Footer, AboutBanner, ProjectBanner }
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

.disclaimer {
  width: 100%;
  color: var(--black);
  text-align: center;
  padding: 0 1rem;

  & a {
    color: var(--purple);
  }
}

@media only screen and (max-width: 576px) { }

@media only screen and (min-width: 576px) { }

@media only screen and (min-width: 768px) { }

@media only screen and (min-width: 992px) { 
  .disclaimer {
    padding: 0;
    text-align: right;
  }
}

@media only screen and (min-width: 1200px) { }

</style>
