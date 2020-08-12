<template>
<section id="contents-wrap">
    <h3 id="page-title" class="text-normal">Contact</h3>
    <article class="contents">
        <p class="display-4 text-center font-light">Do you need me?</p>
        <h4 class="display-1 text-center font-bold">Contact Me !</h4>
        <form action="">
            <label for="name" hidden>Your Name</label><input type="text" id="name" placeholder="Your Name" title="Your Name">
            <label for="mail" hidden>Your Mail</label><input type="text" id="mail" placeholder="Your Mail" title="Your Mail">
            <label for="message" hidden>Your Message</label><textarea name="message" id="message" placeholder="Your Message" title="Your Message" @keyup="autoResizing"></textarea>
            <div id="submit">
                <input type="submit" value="SUBMIT">
                <i class="fas fa-arrow-right"></i>
            </div>
        </form>
    </article>
    <Footer/>
</section>
</template>

<script>
export default {
  methods: {
      autoResizing () {
          event.target.style.height = '50px'
          event.target.style.height = (1 + event.target.scrollHeight) + 'px'
      }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/app';
#app {box-sizing: border-box; min-height: 100vh;
    #contents-wrap {
        .contents {width: 90%; max-width: 560px; margin: 0 auto;
            h4 {margin-bottom: 25px;}
            form {display: flex; flex-flow: column nowrap; align-items: center;
                input[type="text"], textarea {height: 50px; background: transparent; color: $color--light; border-bottom: 1px solid $color--main; margin-bottom: 25px; padding: 14px 21px; box-sizing: border-box; overflow: visible; width: 100%;}
                textarea {resize: none; overflow-y: hidden;}
                #submit {width: 160px; height: 50px; margin-top: 25px; border: 1px solid $color--light; display: flex; justify-content: center; align-items: center; position: relative; transition-property: all; @include ease-out(.25s);
                    input[type="submit"] {width: 100%; background: transparent; display: block; height: 100%; text-indent: -30px; transition-property: all; @include ease-out(.25s);}
                    svg {font-size: 16px; width: 17px; height: 17px; position: absolute; top: 0; bottom: 0; left: 60px; right: 0; margin: auto; transition-property: all; @include ease-out(.25s);}
                    &:hover {border-color: $color--main !important;
                        input {color: $color--main;}
                        svg {color: $color--main;}
                    }
                }
            }
        }
    }
    &.theme--dark {
        #contents-wrap {
            .contents {
                form {
                    input, textarea {color: $color--dark}
                    #submit {border-color: $color--dark;}
                }
            }
        }
    }
}
</style>
