<template>
  <div id="loader">
    <img src="@/assets/images/loader.gif" alt="loader">
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped lang="scss">
@import '../assets/scss/app';
  #app {
    #loader {width: 100vw; height: 100vh; background: $back--light; transition-property: background opacity; @include ease-out(.5s); position: fixed; top: 0; left: 0; z-index: 10000;
      img {position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; width: 128px;}
    }
    &.theme--dark {
      #loader {background: $back--dark;}
    }
  }
</style>
