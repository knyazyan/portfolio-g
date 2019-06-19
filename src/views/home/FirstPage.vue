<template>
  <div class="FirstPage">
    <div class="FirstPage-content">
      <h1  class="text-name">front end developer </h1>
      <p class="text text1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita illo laboriosam officiis quae voluptatibus.</p>
      <p class="text text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, illo?</p>
      <p class="text text3">Lorem ipsum dolor sit amet, consectetur</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "FirstPage",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">

  .FirstPage{
    width:100%;
    min-height:100vh ;
    background: radial-gradient(#000a, #0002) , url("../../assets/images/StartUpStock_1.jpg") no-repeat center;
    background-size: cover;
    position: relative;
  }

  .FirstPage-content{
    width:inherit;
    min-height:inherit;

    .text-name{
      text-transform: uppercase;
      font-family:sans-serif;
      color: white;
      font-size: 80px;
      position: absolute;
      top: 50%;
      left: -10%;
      opacity: 0;
      transform: translateX(-50%) translateY(-50%);
      transform-origin: 50% 50%;
      white-space: nowrap;
      animation-name: test;
      animation-duration: 1.7s ;
      animation-timing-function: linear;
      animation-delay:13s;
      animation-fill-mode: forwards;

      @keyframes test {
        100%{
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          opacity: 1;
        }
      }
    }

    .text{
      color: #ffffff;
      text-transform: uppercase;
      position: absolute;
      top:100%;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    .text1{
      animation-name: text;
      animation-duration: 1.4s ;
      animation-timing-function: ease-in-out;
      animation-delay:14.4s;
      animation-fill-mode: forwards;
    }
    .text2{
      animation-name: text1;
      animation-duration: 1.4s ;
      animation-timing-function: ease-in-out;
      animation-delay:14.6s;
      animation-fill-mode: forwards;
    }
    .text3{
      animation-name: text2;
      animation-duration: 1.4s ;
      animation-timing-function: ease-in-out;
      animation-delay:14.8s;
      animation-fill-mode: forwards;
    }

    @keyframes text {
      100%{
        top:60%;

      }
    }
    @keyframes text1 {
      100%{
        top:65%;

      }
    }
    @keyframes text2 {
      100%{
        top:70%;

      }
    }
  }

</style>
