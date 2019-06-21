<template>
  <div :class="['home', {'show-home' : home_opacity}]">
    <FirstPage />
    <Experience />
  </div>
</template>

<script>
  import FirstPage from "@/views/home/FirstPage";
  import AboutMe from "@/views/home/AboutMe";
  import Experience from "@/views/home/Experience";

  export default {
    name: "home",
    components: {
      FirstPage,
      AboutMe,
      Experience
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
