<template>
    <div class="about-me">
        <div class="about-me-content">
            <div class="img img1"></div>
            <div class="img img2"></div>
            <div class="img img3"></div>
            <div class="img img4"></div>
            <div class="img img5"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "AboutMe",
        components: {

        },
        data() {
            return {

            }
        },
        mounted() {
            let images = document.getElementsByClassName('img');
            document.addEventListener( 'scroll', () => {
                let scroll_top = window.scrollY;

                if (scroll_top >= 440 && scroll_top < 880){
                    images[0].style.transform = 'rotateZ(0deg)';
                    images[1].style.transform = 'rotateZ(0deg)';
                    images[2].style.transform = 'rotateZ(0deg)';
                    images[3].style.transform = 'rotateZ(0deg)';
                    images[4].style.transform = 'rotateZ(0deg)';

                    images[0].style.top = -(scroll_top - 400) / 2 + 'px';
                    images[1].style.top = -(scroll_top - 400) / 10 + 'px';
                    images[1].style.left = -(scroll_top - 400) + 'px';
                    images[2].style.left = (scroll_top - 400) + 'px';
                    images[3].style.top = (scroll_top - 300) / 2 + 'px';
                    images[3].style.left = -(scroll_top - 400) / 2.3 + 'px';
                    images[4].style.top = (scroll_top - 300) / 1.7 + 'px';
                    images[4].style.left = (scroll_top - 400) / 2.3 + 'px';
                    if (scroll_top >= 460){
                        images[0].style.transform = 'rotateZ(-2deg)';
                        images[1].style.transform = 'rotateZ(-3deg)';
                        images[2].style.transform = 'rotateZ(3deg)';
                        images[3].style.transform = 'rotateZ(2deg)';
                        images[4].style.transform = 'rotateZ(-3deg)';

                        images[0].addEventListener('mousemove', () => {
                            images[0].style.transform = 'rotateZ(0.2deg) scale(1.07)';
                        });
                        images[0].addEventListener('mouseleave', () => {
                            images[0].style.transform = 'rotateZ(-2deg)';
                        })
                        images[1].addEventListener('mousemove', () => {
                            images[1].style.transform = 'rotateZ(0.2deg) scale(1.07)';
                        });
                        images[1].addEventListener('mouseleave', () => {
                            images[1].style.transform = 'rotateZ(-3deg)';
                        })
                        images[2].addEventListener('mousemove', () => {
                            images[2].style.transform = 'rotateZ(-0.2deg) scale(1.07)';
                        });
                        images[2].addEventListener('mouseleave', () => {
                            images[2].style.transform = 'rotateZ(3deg)';
                        })
                        images[3].addEventListener('mousemove', () => {
                            images[3].style.transform = 'rotateZ(-0.2deg) scale(1.07)';
                        });
                        images[3].addEventListener('mouseleave', () => {
                            images[3].style.transform = 'rotateZ(2deg)';
                        })
                        images[4].addEventListener('mousemove', () => {
                            images[4].style.transform = 'rotateZ(0.2deg) scale(1.07)';
                        });
                        images[4].addEventListener('mouseleave', () => {
                            images[4].style.transform = 'rotateZ(-3deg)';
                        })
                    }
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .about-me{
        width: 100%;
        height: 1060px;
        background-color: #ffffff;
        padding: 0 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        .about-me-content{
            position: relative;
            width: 30%;
            min-height: 260px;

            .img{
                position: absolute;
                width: 100%;
                height: 260px;
                background-image: url("../../assets/images/about-me/test.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                transition: all .2s ease-in-out;
            }
        }
    }
</style>
