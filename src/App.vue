<template>
  <v-app>
    <keep-alive>
      <component :is="layout">
        <router-view/>
      </component>
    </keep-alive>
    <PageShow></PageShow>
  </v-app>
</template>

<script>
  const default_layout = "default_component";
  import default_component from '@/layout/default';
  import PageShow from '@/components/PageShow'

  export default {
  name: 'App',
  components: {
    default_component,
    PageShow
  },
  data () {
    return {
      //
    }
  },
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout)
      }
    }
}
</script>
