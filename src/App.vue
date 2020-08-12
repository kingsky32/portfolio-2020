<template>
  <div id="app"
    :class="{ 'theme--dark': DarkMode, 'theme--light': !DarkMode }">
    <transition name="router-fade" mode="out-in">
      <Loader
        v-if="!Loaded" />
    </transition>
    <transition name="router-fade" mode="out-in">
      <Header @change-theme="ChangeThemeToggle"
        v-if="Loaded" />
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view
        v-if="Loaded" />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      DarkMode: false,
      Loaded: false,
      SlideLoaded: false
    }
  },
  methods: {
    ChangeThemeToggle () {
      this.DarkMode = !this.DarkMode
    }
  },
  created () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.DarkMode = true
    } else {
      this.DarkMode = false
    }
  },
  mounted() {
    this.Loaded = true
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/app';
@import '@/assets/scss/_super.transition';
@import '@/assets/scss/_font';
#subMenu {background: $back--light; transition-property: background; @include ease-out(.5s);}
#app {box-sizing: border-box; position: relative; font-family: 'ProximaNova', 'Avenir', Helvetica, Arial, sans-serif; font-weight: 500; min-height: 100vh; color: $color--light; transition-property: background; @include ease-out(.5s); padding-top: 225px;
  #contents-wrap {position: relative; box-sizing: border-box;
      #page-title {position: absolute; left: 60px; top: 0;}
  }
  &.theme--dark {
    background: $back--dark;
    color: $color--dark;
  }
}

.router-fade-enter-active, .router-fade-leave-active {transition-property: opacity; @include ease-out(.3s);}
.router-fade-enter, .router-fade-leave-to {opacity: 0;}

@media screen and (max-width: 1440px) {

}

@media screen and (max-width: 1280px) {

}

@media screen and (max-width: 1024px) {
  #app {
    #contents-wrap {
      #page-title {left: 5%; top: -25px;}
    }
  }
}

</style>
