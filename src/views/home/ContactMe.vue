<template>
    <div :class="['contact-me',{'show': pageShow}]">
        <div class="headline">
            <h2>
                <p>
                    Thanks for taking the time to reach out.
                </p>
                <p>
                    How can I help you today?
                </p>
            </h2>
        </div>
        <div class="contact-form">
            <cInput
                    class="name-input"
                    inputPlaceholder="Name"
            ></cInput>
            <cInput
                    class="email-input"
                    inputType="email"
                    inputPlaceholder="Email"
            ></cInput>
            <cTextArea
                    class="message"
                    textPlaceholder="Message"
            ></cTextArea>
        </div>
        <div class="send-form-btn-wrap">
            <cButton
                    value="Submit"
            ></cButton>
        </div>
    </div>
</template>

<script>
    import * as types from "@/stores/types";

    import cButton from '@/components/cButton'
    import cInput from '@/components/cInput'
    import cTextArea from '@/components/cTextArea'

    export default {
        name: "contactMe",
        props: {

        },
        components: {
            cButton,
            cInput,
            cTextArea,
        },
        mounted() {
            setTimeout( () => {
                let data = true
                this.$store.dispatch(types.A_PAGE_SHOW, data)
            },12700)
        },
        computed: {
            pageShow() {
                return this.$store.getters['getPageShow']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contact-me{
        padding: 80px;
        opacity: 0;
        &.show{
            opacity: 1;
        }

        .headline{
            margin: 40px 0 70px;
            h2{
                font-size: 38px;
                text-align: center;
                font-family: 'Calibre';
                p{
                    margin-bottom: 10px;
                }
            }
        }
        .contact-form{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
            max-width: 600px;
            margin: 0 auto;
            .message{
                grid-column: span 2;
            }
        }
        .send-form-btn-wrap{
            display: flex;
            justify-content: center;
            margin: 30px 0;
        }
    }
</style>