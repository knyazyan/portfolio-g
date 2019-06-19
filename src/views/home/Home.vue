<template>
  <div :class="['home', {'show-home' : home_opacity}]">
    <FirstPage />
    <AboutMe />
  </div>
</template>

<script>
  import FirstPage from "@/views/home/FirstPage";
  import AboutMe from "@/views/home/AboutMe";

  export default {
    name: "home",
    components: {
      FirstPage,
      AboutMe
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
    &.show-home{
      opacity: 1;
    }
  }
</style>
