<template>
  <v-app>
    <keep-alive>
      <component :is="layout">
        <router-view/>
      </component>
    </keep-alive>
  </v-app>
</template>

<script>

  const default_layout = "default_component";
  import default_component from '@/layout/default';


  export default {
  name: 'App',
  components: {
    default_component,
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
