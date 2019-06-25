<template>
    <div class="footer">
        <div class="start-project">
            <h3>Start a project</h3>
            <p>
                Interested in working together? We should queue up a chat. I’ll buy the coffee.
            </p>
            <cButton class="cursor-pointer" value="Let's do this" buttonColor="#ffffff"></cButton>
        </div>
        <div class="footer-content">
            <h3>
                <p>Living, learning, & leveling up</p>
                <p>one day at a time.</p>
            </h3>
            <div class="social">
                <a href="#" class="link cursor-pointer" target="_blank">
                    <img src="../../assets/images/footer/facebook.png" alt="">
                </a>
                <a href="#" class="link cursor-pointer" target="_blank">
                    <img src="../../assets/images/footer/linkedin.png" alt="">
                </a>
                <a href="#" class="link cursor-pointer" target="_blank">
                    <img src="../../assets/images/footer/Telegram.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import cButton from '@/components/cButton'

    export default {
        name: "Footer",
        components:{
            cButton
        }
    }
</script>

<style lang="scss"  scoped>
    .footer{
        margin-top: 120px;
        padding: 0 80px 120px;
        display: grid;
        justify-items: center;
        background-color: #8C43FF;

        .start-project{
            transform: translateY(-40%);
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
            align-items: center;
            padding: 56px 20px;
            background-color: #293347;
            border-radius: 12px;
            color: #FFFFFF;
            box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 0 0 1px #293347;

            h3{
                font-size: 28px;
                font-family: "Calibre",sans-serif;
            }
            p{
                font-size: 20px;
                font-family: "Calibre", sans-serif;
                text-align: center;
                font-weight: 300;
                line-height: 24px;
            }
        }
        .footer-content{
            display: grid;

            h3{
                text-align: center;
                color: #FFFFFF;
                font-size: 28px;
                font-family: "Calibre", sans-serif;
                margin-bottom: 30px;
            }
            .social{
                display: grid;
                grid-template-columns: auto auto auto;
                justify-items: center;
                align-items: center;

                a{
                    cursor: none;
                    img{
                        width: 20px;
                    }
                }
            }
        }
    }
</style>