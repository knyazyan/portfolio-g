<template>
  <div class="FirstPage">
    <div class="FirstPage-content">
      <h1  class="text-name">front end developer </h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita illo laboriosam officiis quae voluptatibus.</p>
      <p class="text1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, illo?</p>
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
    background:   url("../../assets/images/StartUpStock_1.jpg") no-repeat center;
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
      left: 20%;
      animation-name: text;
      animation-duration: 3s ;
      animation-timing-function: linear;
      animation-delay:13s;
      animation-fill-mode: forwards;
      @keyframes text {
        100%{
          top:60%;

        }
      }
    }
    .text1{
      color: #ffffff;
      text-transform: uppercase;
      position: absolute;
      top:100%;
      left: 30%;
      animation-name: text1;
      animation-duration: 3s ;
      animation-timing-function: linear;
      animation-delay:13s;
      animation-fill-mode: forwards;
      @keyframes text1 {
        100%{
          top:65%;

        }
      }
    }

  }

</style>
