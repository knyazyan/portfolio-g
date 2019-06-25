<template>
  <div :class="['home', {'show-home' : home_opacity}]">
    <FirstPage />
    <Technologies />
    <HomePortfolio />
    <Footer />
  </div>
</template>

<script>
  import FirstPage from "@/views/home/FirstPage";
  // import AboutMe from "@/views/home/AboutMe";
  import Technologies from "@/views/home/Technologies";
  import HomePortfolio from "@/views/home/HomePortfolio";
  import Footer from "@/views/home/Footer";

  export default {
    name: "home",
    components: {
      FirstPage,
      // AboutMe,
      Technologies,
      HomePortfolio,
      Footer
    },
    data() {
      return {
        home_opacity: false
      }
    },
    mounted() {
      setTimeout( () => {
        this.home_opacity = true
      },12700)
    }
  }
</script>

<style lang="scss" scoped>
  .home{
    opacity: 0;
    transition: .2s all;
    &.show-home{
      opacity: 1;
    }
  }
</style>
