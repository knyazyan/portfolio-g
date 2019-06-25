<template>
  <div class="technologies">
    <div class="technologies-text">
      <div>
        <h1>здравствуйте я Гурген: Oчень рад вас видеть</h1>
        <p>С начала моего путешествия в качестве внештатного дизайнера около 8 лет назад, я я сделал уборку на улице:</p>
        <p>работал очень много работал день и ночь,пока мои друзья(роланд, мушег) подошли  ка мне и предлагали у них в офисесделать уборку</p>
        <p>digital products for both business and consumer use. I'm quietly confident, naturally curious,</p>
        <p> and perpetually working on improving my chops one design problem at a time.</p>
      </div>
    </div>

    <div class="boxes-wrap">
      <div class="boxes">
        <div class="box">
          <div class="logo">
            <img src="../../assets/images/about-me/react-512.png" width="100px">
          </div>
          <div class="title">
            <h5>Designer</h5>
          </div>
          <div class="title-desc">
            <p>
              I value simple content structure,
              clean design patterns, and
              thoughtful interactions.
            </p>
          </div>
          <div class="tools">
            <div class="title">
              <h5>Things I enjoy designing:</h5>
            </div>
            <div class="title-desc">
              <p>
                UX, UI, Web, Mobile, Apps, Logos
              </p>
            </div>
          </div>

          <div class="tittle1">
            <h5>Design Tools:</h5>
            <p>Balsamiq Mockups</p>
            <p>Figma</p>
            <p>Invision</p>
            <p>Marvel</p>
            <p>Sketch</p>
            <p>Webflow</p>
            <p>Zeplin</p>
          </div>
        </div>
        <div class="box">
          <div class="logo">
            <img src="../../assets/images/about-me/1_yeAO-nwsAqnzr7k-zoDkoQ.png" width="100px">
          </div>
          <div class="title">
            <h5>Front-end Developer</h5>
          </div>
          <div class="title-desc">
            <p>
              I like to code things from
              scratch, and enjoy
              bringing ideas to life in
              the browser.
            </p>
          </div>
          <div class="tools">
            <div class="title">
              <h5>Languages I speak:</h5>
            </div>
            <div class="title-desc">
              <p>
                HTML, Pug, Slim, CSS, Sass, Less
              </p>
            </div>
          </div>

          <div class="tittle1">
            <h5> Dev Tools:</h5>
            <p>Atom </p>
            <p>Bitbucket</p>
            <p>Bootstrap</p>
            <p>Bulma</p>
            <p>Codekit</p>
            <p>Codepen</p>
            <p>Github</p>
            <p>Gitlab</p>
            <p>Terminal</p>
          </div>
        </div>
        <div class="box">
          <div class="logo">
            <img src="../../assets/images/about-me/загруженное.png" width="100px">
          </div>
          <div class="title">
            <h5>Mentor</h5>
          </div>
          <div class="title-desc">
            <p>
              I genuinely care about
              people, and love helping
              fellow designers work on
              their craft.
            </p>
          </div>
          <div class="tools">
            <div class="title">
              <h5>Experiences I draw from:</h5>
            </div>
            <div class="title-desc">
              <p>
                UX/UI, Product design, Freelancing
              </p>
            </div>
          </div>

          <div class="tittle1">
            <h5> Mentor Stats:</h5>
            <p>4 years experience</p>
            <p>26 short courses</p>
            <p>34 bootcamps</p>
            <p>100+ students</p>
            <p>1,000+ mentor sessions</p>
            <p>60+ group critiques</p>
            <p>9,000+ comments</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: "Technologies",
    data() {
      return {}
    }
  }
</script>






<style scoped lang="scss">
  .technologies{
    display: grid;
    justify-items: center;
    padding-bottom: 30px;
  }
  .technologies-text{
    width: 100%;
    height: 700px;
    background-color: #269AFF;
    color: #ffffff;
    font-family: sans-serif;

    h1{
      text-align: center;
      padding-top: 120px;
      font-size: 35px;
    }
    p{
      text-align: center;
      padding-top: 20px;
      font-size: 20px;
    }
  }
  .boxes-wrap{
    padding:0 80px;
  }
  .boxes{
    width:100%;
    border: 1px solid #b1b1b1;
    border-radius: 30px;
    background-color: #ffffff;
    transform: translateY(-250px);
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    box-shadow:0 3px 4px 0 #00000044;

    .box {
      padding: 20px 50px;
      border-right: 1px solid #b1b1b1;

      .logo,  .title, .title-desc {
        text-align: center;
        margin-bottom: 20px;
      }
      .tools{
        .title{
          text-align: center;
          margin-bottom: 20px;
          h5{
            color:#CF99FF;
          }
        }
        .title-desc{
          text-align: center;
          margin-bottom: 20px;
        }
      }
      .tittle1{
        text-align: center;
        margin-bottom: 20px;
        h5{
          margin-bottom: 20px;
          color:#CF99FF;
        }
        p{
          margin-bottom: 20px;
        }

      }

    }
    .box:last-child{
      border-right:none;
    }

  }



</style>