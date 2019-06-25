<template>
  <div class="home-portfolio">
      <div class="headline">
        <h3>My Recent Work</h3>
        <p>Here are a few recent design projects. Want to see more? Email me.</p>
      </div>
    <div class="portfolio-wrap">
      <div class="portfolio">
        <div class="portfolio-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, hic!
          </p>
          <cButton class="portfolio-btn cursor-pointer" value="Visit Website"></cButton>
        </div>
      </div>
      <div class="portfolio">
        <div class="portfolio-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, hic!
          </p>
          <cButton class="portfolio-btn cursor-pointer" value="Visit Website"></cButton>
        </div>
      </div>
      <div class="portfolio">
        <div class="portfolio-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, hic!
          </p>
          <cButton class="portfolio-btn cursor-pointer" value="Visit Website"></cButton>
        </div>
      </div>
      <div class="portfolio">
        <div class="portfolio-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, hic!
          </p>
          <cButton class="portfolio-btn cursor-pointer" value="Visit Website"></cButton>
        </div>
      </div>
      <div class="portfolio">
        <div class="portfolio-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, hic!
          </p>
          <cButton class="portfolio-btn cursor-pointer" value="Visit Website"></cButton>
        </div>
      </div>
      <div class="portfolio">
        <div class="portfolio-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, hic!
          </p>
          <cButton class="portfolio-btn cursor-pointer" value="Visit Website"></cButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cButton from '@/components/cButton'

  export default {
    name: "HomePortfolio",
    data() {
      return {}
    },
    components:{
      cButton
    }
  }
</script>

<style lang="scss" scoped>
  .home-portfolio{
    padding: 0 80px 120px;

    .headline {
      display: grid;
      justify-items: center;
      h3{
        color: #293347;
        font-weight: 800;
        font-family: "Calibre",sans-serif;
        font-size: 36px;
        margin-bottom: 12px;
      }
      p{
        font-size: 22px;
        color: #4a4a4a;
        font-weight: 300;
        font-family: "Calibre",sans-serif;
        margin-bottom: 50px;
      }
    }
    .portfolio-wrap{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 24px;

      .portfolio{
        background-image: url("../../assets/images/home-portfolio/portfolio-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        border-radius: 12px;
        overflow: hidden;
        .portfolio-content{
          display: grid;
          justify-items: center;
          padding: 40px 20px;
          width: 100%;
          height: 100%;
          background-color: #293347;
          opacity: 0;
          transition: all .4s;

          p{
            color: #FFFFFF;
            font-family: "Calibre", sans-serif;
            font-size: 24px;
            line-height: 28px;
            text-align: center;
            margin-bottom: 22px;
            transition: all .2s;
          }
          .portfolio-btn{
            transition: all .2s;
          }
          &:hover{
            opacity: 1;
          }
        }
      }
    }
  }
</style>
