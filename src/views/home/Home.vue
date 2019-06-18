<template>
  <div :class="['home', {'show-home' : home_opacity}]">
    <FirstPage />
  </div>
</template>

<script>
  import FirstPage from "@/views/home/FirstPage";

  export default {
    name: "home",
    components: {
      FirstPage
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
