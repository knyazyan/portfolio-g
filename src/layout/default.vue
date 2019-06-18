<template>
    <div>
      <Header/>
      <router-view></router-view>
    </div>
</template>

<script>
    import Header from '@/layout/header';

    export default {
        name: 'defaultTemplate',
        components: {
            Header,
        },
        data() {
            return {}
        },
        mounted() {

        },
        computed: {}
    }
</script>
<style lang="scss" scoped>

</style>
