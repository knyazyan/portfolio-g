<template>
    <div class="c-button">
        <span :style="{color: buttonColor}">{{value}}</span>
    </div>
</template>

<script>
    export default {
        name: "cButton",
        props: {
            value: {
                type: [String, Number],
                default: 'text'
            },
            buttonColor: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style lang="scss" scoped>

    .c-button span{
        border: 2px solid #269AFF;
        font-weight: 400;
        font-size: 18px;
        padding: 7px 15px;
        background-color: transparent;
        border-radius: 290486px;
        color: #269AFF;
        transition: .2s all;
        &:hover {
            background-color: #269AFF;
            border-color: #269AFF;
            color: #fff;
        }
    }
</style>