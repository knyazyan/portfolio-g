<template>
  <div :class="['header', {'z-index' : header_z, 'opacity': header_opacity == '1'}, {'header-hide': header_hide}]">
    <div class="left-head">
      <div class="user-photo cursor-pointer">
        <div class="circle-effect"></div>
        <img
          :style="{'opacity': user_photo_opacity}"
          src="../assets/images/user.png"
        >
      </div>
    </div>
    <div class="right-head">
      <div class="language cursor-pointer">
        <span @click="setLang('en')">ru/eng</span>
      </div>
      <div class="portfolio-btn cursor-pointer">
        <span>Portfolio</span>
      </div>
<!--      <div @click="menu_show = !menu_show" class="menu cursor-pointer">-->
<!--        <div class="menu-icon">-->
<!--          <span :class="['menu-line menu-line1', {'menu-show': menu_show}]"></span>-->
<!--          <span :class="['menu-line menu-line2', {'menu-show': menu_show}]"></span>-->
<!--          <span :class="['menu-line menu-line3', {'menu-show': menu_show}]"></span>-->
<!--        </div>-->
<!--        &lt;!&ndash;      <span>{{$t('message')}}</span>&ndash;&gt;-->
<!--      </div>-->
      <div class="contact-me-btn cursor-pointer">
        <span>Say Hello</span>
      </div>
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
        menu_show: false,
        header_hide: true,
        header_opacity: 1,
      }
    },
    mounted(){
      setTimeout( () => {
        this.header_hide = false
      },11400)
      setTimeout( () => {
        this.user_photo_opacity = 1;
        this.header_z = true;
        this.header_hide = false
      },12700)
      let windowScrollTop = [window.scrollY];
      document.addEventListener( 'scroll', (e) => {
        windowScrollTop.push(window.scrollY)
        if (windowScrollTop[windowScrollTop.length - 2] - windowScrollTop[windowScrollTop.length - 1] > 0) {
          //scroll top
          this.header_hide = false
        } else {
          //scroll bottom
          this.header_hide = true
          this.header_opacity = ''
        }
        if (window.scrollY == 0) {
          this.header_opacity = 1
        }
      })
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
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    padding: 10px 80px;
    background: #ffffff;
    /*border-bottom: 1px solid #ddd8;*/
    transition: .4s all;
    transform: translateY(0);
    opacity: 0.7;
    animation: headerShow;
    animation-delay: 11s;
    animation-duration: 0.9s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    &.z-index{
      z-index: 1;
    }
    &.header-hide{
      transform: translateY(-100%);
      opacity: 0;
    }
    &.opacity{
      opacity: 1;
    }
    .user-photo{
      position: relative;
      height: 60px;
      .circle-effect{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 106%;
        height: 106%;
        border: 2px solid #8C43FF;
        border-radius: 50%;
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateX(-50%) translateY(-50%) scale(0);
        animation-name: photoCircleShow;
        animation-delay: 13s;
        animation-duration: 1.2s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(.77,-0.55,.17,1.5);
        z-index: -1;
      }
      img{
        opacity: 0;
        width: 60px;
      }
    }
    .right-head {
      width: 20%;
      align-items: center;
      justify-content: space-between;
      display: flex;
      flex-flow: row wrap;

      .contact-me-btn span{
        border: 2px solid #8C43FF;
        font-weight: 400;
        font-size: 18px;
        padding: 7px 15px;
        background-color: transparent;
        border-radius: 290486px;
        color: #8C43FF;
        transition: .2s all;
        &:hover {
          background-color: #8C43FF;
          border-color: #8C43FF;
          color: #fff;
        }
      }
      .portfolio-btn span {
        font-size: 17px;
        font-weight: 300;
        color: #293347;
        transition: .2s all;
        &:hover {
          color: #8C43FF;
        }
      }
    }
    .language {

      span{
        font-size: 17px;
        font-weight: 300;
        color: #293347;
        transition: .2s all;
        &:hover {
          color: #8C43FF;
        }
      }
    }
    .menu{
      justify-self: end;

      .menu-icon{
        position: relative;
        width: 18px;
        height: 12px;

        .menu-line{
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #000000;
          display: inline-block;
          transition: .2s;
          transform-origin: 50% 50%;
        }
        .menu-line1{
          top: 0;
          &.menu-show{
            transform: rotate(-45deg) translateX(-3px) translateY(4px);
          }
        }
        .menu-line2{
          top: 5px;
          &.menu-show{
            width: 0;
          }
        }
        .menu-line3{
          top: 10px;
          &.menu-show{
            transform: rotate(45deg) translateX(-3px) translateY(-4px);
          }
        }
      }
    }
    @keyframes photoCircleShow {
      100%{
        opacity: 1;
        transform: translateX(-50%) translateY(-50%) scale(1);
      }
    }
  }
</style>
