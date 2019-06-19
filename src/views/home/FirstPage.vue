<template>
  <div class="FirstPage">
    <div>
      <h1  class="text-name">front end developer </h1>
      <div class="text">
        <p>Имя:Гурген </p>
        <p>фамилия: егиазарян</p>
        <p>лет:26</p>
        <p>Профессия: Программист</p>
        <p>страна :Армения </p>
      </div>
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
    /*background-origin:border-box;*/
    position: relative;
    /*opacity: 1;*/

  }
  .text-name{
    text-transform: uppercase;
    font-family:sans-serif;
    color: white;
    font-size: 80px;
    position: absolute;
    left: -100%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    white-space: nowrap;
    animation-name: test;
    animation-duration:3s ;
    animation-timing-function: linear;
    animation-delay:13s ;
    animation-fill-mode: forwards;
  }

@keyframes test {
  100%{
    left: 47%;
  }
}

  .text{
    text-transform: uppercase;
    position: absolute;
    top:450px;
    left: 1460px;
    transform: rotate(-16deg);
  }


</style>
