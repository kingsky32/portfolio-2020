<template>
  <header>
    <h1>
      <router-link to='/'><img src="@/assets/logo.png" alt="logo"></router-link>
    </h1>
    <div id="darkBtn"
      @click="ChangeTheme">
      <i class="fas fa-moon"></i>
    </div>
    <nav id="gnb" class="text-normal font-medium" >
      <router-link to='/' exact
        @mouseover.native="GnbLineFn"
        @mouseleave.native="GnbLineReset">HOME</router-link>
      <router-link to='/works'
        @mouseover.native="GnbLineFn"
        @mouseleave.native="GnbLineReset">WORKS</router-link>
      <router-link to='/about'
        @mouseover.native="GnbLineFn"
        @mouseleave.native="GnbLineReset">ABOUT</router-link>
      <router-link to='/carrers'
        @mouseover.native="GnbLineFn"
        @mouseleave.native="GnbLineReset">CARRERS</router-link>
      <router-link to='/contact'
        @mouseover.native="GnbLineFn"
        @mouseleave.native="GnbLineReset">CONTACT</router-link>
      <span id="gnbLine"
       :style="GnbLine">gnbline</span>
    </nav>
    <div id="menuBtn"
      @click="MenuActive = !MenuActive"
      :class="{ on: MenuActive }">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <transition name="fade">
      <nav id="subMenu"
        v-show="MenuActive">
        <div class="menu-wrapper display-4 font-light">
          <router-link to='/' exact
            @click.native="MenuActive = false">HOME</router-link>
          <router-link to='/works'
            @click.native="MenuActive = false">WORKS</router-link>
          <router-link to='/about'
            @click.native="MenuActive = false">ABOUT</router-link>
          <router-link to='/carrers'
            @click.native="MenuActive = false">CARRERS</router-link>
          <router-link to='/contact'
            @click.native="MenuActive = false">CONTACT</router-link>
          <div class="social">
            <a href="http://github.com/kingsky32" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004252961772" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" target="_blank">
              <i class="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/kingsky32" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </transition>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      MenuActive: false,
      GnbLine: {
        width: '0',
        left: '0'
      }
    }
  },
  methods: {
    GnbLineFn () {
      this.$data.GnbLine.width = event.currentTarget.offsetWidth + 'px'
      this.$data.GnbLine.left = event.currentTarget.offsetLeft + 'px'
    },
    GnbLineReset () {
      this.$data.GnbLine.width = document.getElementById('gnb').getElementsByClassName('router-link-active')[0].offsetWidth + 'px'
      this.$data.GnbLine.left = document.getElementById('gnb').getElementsByClassName('router-link-active')[0].offsetLeft + 'px'
    },
    ChangeTheme() {
      this.$emit('change-theme');
    }
  },
  watch:{
    $route (){
      setTimeout(() => {
        this.GnbLineReset()
      })
    }
  },
  mounted () {
    setTimeout(() => {
      this.GnbLineReset()
    }, 150)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app';
@import '@/assets/scss/_super.transition';
  .router-link-active {color: $color--main;}
  #app {
    header {padding: 25px 60px 0; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; transition-property: padding; @include ease-out(.5s); z-index: 100; top: 0; box-sizing: border-box;
      h1 {position: relative; z-index: 3;
        img {width: 72px;}
      }
      #darkBtn {width: 26px; position: absolute; top: -25px; left: 0; right: 0; margin: 0 auto; cursor: pointer; transition: .5s top ease; z-index: 3;
        &::before {content: ''; display: block; width: 1px; height: 85px; background-color: $color--light; margin: 0 auto;}
        svg {font-size: 28px; display: block;}
        &:active {transition: 0s !important; top: -25px !important;}
      }
      #gnb {display: flex; position: relative; z-index: 3;
        #gnbLine {display: block; position: absolute; bottom: 0; height: 1px; bottom: -2px; background: $color--main; text-indent: -9999px; transition-property: width, left; @include ease-out(1s);}
        a {display: block; margin-right: 25px;
          &:last-child {margin-right: 0;}
        }
      }
      #menuBtn {width: 25px; z-index: 3; display: none; cursor: pointer; @include ease-out(.25s);
        span {width: 25px; height: 4px; background-color: $color--main; display: block; text-indent: -9999px; margin: 5px auto; transition-property: all; @include ease-out(.25s);}
        &:active {transform: rotate(35deg);}
        &.on {transform: rotate(360deg); transition-delay: .15s;
          span {
            &:nth-child(1) {margin-bottom: -9px; transform: rotate(45deg);}
            &:nth-child(2) {transform: rotate(45deg);}
            &:nth-child(3) {margin-top: -9px; transform: rotate(-45deg);}
          }
        }
      }
      #subMenu {width: 100vw; height: 100vh; position: fixed; background: $back--light; top: 0; left: 0; z-index: 2;
        &.fade-enter-active, &.fade-leave-active {transition-property: opacity; @include ease-out(.25s)}
        &.fade-enter, &.fade-leave-to {opacity: 0;}
        .menu-wrapper {display: flex; flex-flow: column nowrap; align-items: center; justify-content: center; height: 100%;
          > a {margin-bottom: 50px;
            &:last-of-type {margin-bottom: 0;}
            &.router-link-exact-active {color: $color--main}
          }
          .social {position: absolute; bottom: 0;}
        }
      }
      &.theme--dark {
        header {
          #darkBtn {
            &::before {background: $color--dark;}
          }
        }
        #subMenu {background: $back--dark;}
      }
    }
  }
  @media screen and (min-width: 769px) {
    #app {
      header {
        #darkBtn {
          &:hover {top: 0;}
        }
        #menuBtn {
          &:hover {transform: rotate(15deg);}
          &.on {
            &:hover {transform: rotate(375deg); transition-delay: 0s;}
          }
        }
        #subMenu {
          .menu-wrapper {
            > a {
              &:hover {color: $color--main;}
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    #app {padding-top: 175px;
      header {padding: 55px 25px;}
    }
  }
  @media screen and (max-width: 1280px) {
    #app {
      header {
        #gnb {display: none;}
        #menuBtn {display: block;}
      }
    }
  }
  @media screen and (max-width: 1024px) {

  }

  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 425px) {

  }
</style>
