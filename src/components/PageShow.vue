<template>
    <div class="page-show">
        <div class="admin-logo">
            <img src="../assets/images/user.png">
            <div class="hello-wrap">
                <p>Hello</p>
            </div>
        </div>
        <div class="anim">
            <div class="background-effect"></div>
            <div class="show-circle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageShow"
    }
</script>

<style lang="scss" scoped>
    .page-show{

        .admin-logo{
            position: absolute;
            top: calc(50% - 100px);
            left: calc(50% - 100px);

            img{
                width: 200px;
                position: relative;
            }
            .hello-wrap{
                position: relative;
                display: flex;
                justify-content: center;
                p{
                    font-size: 20px;
                    animation: type 6s steps(9);
                    animation-delay: 4s;
                    animation-fill-mode: forwards;
                    overflow: hidden;
                    white-space: nowrap;
                    font-family: Consolas;
                    width: 0;
                }
                @keyframes type {
                    0%{
                        width: 0;
                        border-right: 4px solid black;
                    }
                    40%{
                        width: 6ch;
                        border-right: 4px solid black;
                    }
                    45%{
                        border-right: unset;
                    }
                    50%{
                        border-right: 4px solid black;
                    }
                    55%{
                        border-right: unset;
                    }
                    60%{
                        width: 6ch;
                        border-right: 4px solid black;
                    }
                    99%{
                        border-right: 4px solid black;
                    }
                    100%{
                        width: 0;
                        border-right: unset;
                    }
                }
            }
        }
        .anim {
            mix-blend-mode: darken;

            .background-effect{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #000000;
            }
            .show-circle{
                width: 40px;
                height: 40px;
                background-color: #ffffff;
                border-radius: 50%;
                position: absolute;
                top: calc(50% - 20px);
                left: -40px;
                animation: circleMove;
                animation-duration: 4s;
                animation-fill-mode: forwards;
                animation-timing-function: cubic-bezier(.81,-0.27,.86,.77);
            }

            @keyframes circleMove {
                50% {
                    left: calc(50% - 20px);
                    transform: scale(1);
                }
                100%{
                    left: calc(50% - 20px);
                    transform: scale(300);
                }
            }
        }
    }
</style>