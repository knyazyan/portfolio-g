<template>
  <div class="first-page">
    <div class="technology">
      <h1>
        <div :class="{'text-show': textOneShow}">We build great apps</div>
        <div :class="['technology-text', {'text-show': textTwoShow}]">
          <span>with</span>
          <span>{{technology}}</span>
          <span class="print-line">|</span>
        </div>
      </h1>
      <div class="short-info-text">
        <p :class="{'text-show': textThreeShow}">Top-notch digital products from an app development</p>
        <p :class="{'text-show': textFourShow}">company with a focus on your online business</p>
        <p :class="{'text-show': textFiveShow}">profitability.</p>
      </div>
    </div>
    <div class="demo-image-wrap">
      <div class="demo-image">
        <img src="../../assets/images/first-section/demo.png">
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "FirstPage",
    data() {
      return {
        technology: '',
        print_line_anim: false,
        textOneShow: false,
        textTwoShow: false,
        textThreeShow: false,
        textFourShow: false,
        textFiveShow: false,
      }
    },
    mounted() {
      let technologyNewText = [];
      let printStatus = 'vuePrint';
      let vue = ['V','u','e','.','j','s',' '];
      let react = ['R','e','a','c','t','.','j','s',' '];
      let angular = ['A','n','g','u','l','a','r','.','j','s',' '];
      setTimeout( () => {this.textOneShow = true},12000);
      setTimeout( () => {this.textTwoShow = true},12300);
      setTimeout( () => {this.textThreeShow = true},13000);
      setTimeout( () => {this.textFourShow = true},13500);
      setTimeout( () => {this.textFiveShow = true},13800);
      setTimeout( () => {
        setInterval( () => {
          if (printStatus == 'vuePrint'){
            setTimeout( () => {
              technologyNewText.push(vue[technologyNewText.length])
              this.technology = technologyNewText.join('');
              if (technologyNewText.length == vue.length) {
                printStatus = 'vuePop'
              }
            },140)
          } else if(printStatus == 'vuePop'){
            setTimeout( () => {
              technologyNewText.pop()
              this.technology = technologyNewText.join('');
              if (technologyNewText.length == 0) {
                printStatus = 'reactPrint'
              }
            },50)
          }else if (printStatus == 'reactPrint'){
            setTimeout( () => {
              technologyNewText.push(react[technologyNewText.length])
              this.technology = technologyNewText.join('');
              if (technologyNewText.length == react.length) {
                printStatus = 'reactPop'
              }
            },140)
          } else if (printStatus == 'reactPop') {
            setTimeout( () => {
              technologyNewText.pop()
              this.technology = technologyNewText.join('');
              if (technologyNewText.length == 0) {
                printStatus = 'angularPrint'
              }
            },50)
          }else if (printStatus == 'angularPrint') {
            setTimeout( () => {
              technologyNewText.push(angular[technologyNewText.length])
              this.technology = technologyNewText.join('');
              if (technologyNewText.length == angular.length) {
                printStatus = 'angularPop'
              }
            },140)
          }else if (printStatus == 'angularPop') {
            setTimeout( () => {
              technologyNewText.pop()
              this.technology = technologyNewText.join('');
              if (technologyNewText.length == 0) {
                printStatus = 'vuePrint'
              }
            },50)
          }
        },110)
      },14700)
    }
  }
</script>

<style scoped lang="scss">
  .first-page{
    width: 100%;
    min-height: 700px;
    max-height: 900px;
    height: 100vh;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .technology{
      padding: 0 80px;
      h1{
        font-size: 70px;
        line-height: 1.1;
        font-weight: 300;
        white-space: nowrap;
        font-family: 'Calibre';
        div{
          transform: translateX(calc(-100% - 80px));
          opacity: 0;
          transition: all 2.4s;
          &.text-show{
            transform: translateX(0);
            opacity: 1;
          }
        }
      }
      .technology-text{
        line-height: 1.1;
        display: flex;
        font-family: 'Calibre';
        span:first-child{
          margin-right: 14px;
        }
        .print-line{
          transform: translateY(-4px) translateX(-4px);
        }
      }
      .short-info-text{
        font-family: 'Calibre';
        font-size: 20px;
        p{
          transform: translateX(calc(-100% - 80px));
          opacity: 0;
          transition: all 2.4s;
          &.text-show{
            transform: translateX(0);
            opacity: 1;
          }
        }
      }
    }
    @keyframes line-show-hide {
      50%{
        opacity: 0;
      }
    }
  }

</style>
