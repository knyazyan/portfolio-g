<template>
    <v-app>
        <keep-alive>
            <component :is="layout">
            </component>
        </keep-alive>
        <PageShow v-if="page_show_anim" @hide="page_show_anim = $event"></PageShow>
        <cCursor></cCursor>
    </v-app>
</template>

<script>
    const default_layout = "default_component";
    import default_component from '@/layout/default';
    import PageShow from '@/components/PageShow'
    import cCursor from '@/components/cCursor'

    export default {
        name: 'App',
        components: {
            default_component,
            PageShow,
            cCursor
        },
        data() {
            return {
                page_show_anim: true
            }
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || default_layout)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './assets/globalCSS/style.css';

</style>
