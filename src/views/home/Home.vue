<template>
  <div :class="['home', {'show-home' : pageShow}]">
    <FirstPage />
    <Technologies />
    <HomePortfolio />
    <Footer />
  </div>
</template>

<script>
  import * as types from "@/stores/types";

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

      }
    },
    mounted() {
      setTimeout( () => {
        let data = true
        this.$store.dispatch(types.A_PAGE_SHOW, data)
      },12700)
    },
    computed: {
      pageShow() {
        return this.$store.getters['getPageShow']
      }
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
