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

  }
  .text-name{
    text-transform: uppercase;
    font-family:cursive;
    font-size: 80px;
    position: absolute;
    top:250px;
    left: 380px;

  }

  .text{
    text-transform: uppercase;
    position: absolute;
    top:450px;
    left: 1450px;
  }


</style>
