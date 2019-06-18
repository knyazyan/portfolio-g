<template>
  <div class="header">
    <div class="language">
      <span @click="setLang('ru')">ru/eng</span>
    </div>
    <div class="menu">
      <span>{{$t('message')}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {

      }
    },
    methods: {
      setLang: function(lang){
        this.$store.dispatch('setLang', lang)
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 20px 40px;
    background-color: #b1b1b1;
    .language {

    }
  }
</style>
