<template>
  <div :class="['header', {'z-index' : header_z}]">
    <div class="language">
      <span @click="setLang('en')">ru/eng</span>
    </div>
    <div class="user-photo cursor-pointer">
      <img
              :style="{'opacity': user_photo_opacity}"
              src="../assets/images/user.png"
      >
    </div>
    <div class="menu">
      <span>{{$t('message')}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        user_photo_opacity: 0,
        header_z: false,
      }
    },
    mounted(){
      setTimeout( () => {
        this.user_photo_opacity = 1;
        this.header_z = true;
      },12700)
    },
    methods: {
      setLang: function(lang){
        this.$store.dispatch('setLang', lang)
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    padding: 3px 40px;
    background: #ffffff;
    border-bottom: 1px solid #ddd8;
    transform: translateY(-100%);
    opacity: 0;
    animation: headerShow;
    animation-delay: 11s;
    animation-duration: 0.9s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    &.z-index{
      z-index: 1;
    }
    .user-photo{
      height: 60px;
      img{
        opacity: 0;
        width: 60px;
      }
    }
    .language {

    }
    .menu{
      justify-self: end;
    }
  }

  @keyframes headerShow {
    100%{
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
