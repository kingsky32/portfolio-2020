<template>
<section id="contents-wrap">
    <h3 id="page-title" class="text-normal">Carrers</h3>
    <article class="contents">
        <h2 class="display-1 text-center font-bold">SEUNG JU</h2>
        <section class="career-wrap">
            <article>
                <span class="text-extra-large font-regular">{{ Message.Title }}</span>
                <p class="text-large font-light">{{ Message.Message }}</p>
            </article>
            <article>
                <span class="text-extra-large font-regular">Skills</span>
                <div class="career">
                    <div class="career-box"
                      v-for="(Skill, idx) in Skills"
                      :key="idx">
                        <div class="title text-large font-light"
                            @click="Skill.Active = !Skill.Active"
                            :class="{ on: Skill.Active }">
                            <span>{{ Skill.Title }}</span>
                            <div class="plus-btn"><span>1</span><span>2</span></div>
                        </div>
                        <transition name="fade">
                            <p class="career-text text-large font-light"
                                v-if="Skill.Active">{{ Skill.Message }}</p>
                        </transition>
                    </div>
                </div>
            </article>
            <article>
                <span class="text-extra-large font-regular">Position</span>
                <div class="career">
                    <div class="career-box"
                      v-for="(Position, idx) in Position"
                      :key="idx">
                        <div class="title text-large font-light"
                            @click="Position.Active = !Position.Active"
                            :class="{on: Position.Active}">
                            <span>{{ Position.Title }}</span>
                            <div class="plus-btn"><span>1</span><span>2</span></div>
                        </div>
                        <transition name="fade">
                            <p class="career-text text-large font-light"
                                v-if="Position.Active">{{ Position.Message }}</p>
                        </transition>
                    </div>
                </div>
            </article>
        </section>
    </article>
    <Footer/>
</section>
</template>

<script>
export default {
  name: 'Carrers',
  data () {
      return {
        Message:  {
            Title: 'Meesage',
            Message: 'Hello ! I’m Oh Seung Ju in Korea, Dreaming ‘Web Master’ Working hard on my skills to achieve for dream. If you need me, Wherever to free Contact me !'
        },
        Skills: [
            { Active: false, Title: 'Design', Message: 'Illustrator, Photoshop, Sketch, After Effects, Premiere, Indesign' },
            { Active: false, Title: 'Delveop', Message: 'HTML5, CSS3, Javascript, PHP, Mysql, JSP' },
            { Active: false, Title: 'Other', Message: 'Git' }
        ],
        Position: [
            { Active: false, Title: 'Design', Message: 'Message' },
            { Active: false, Title: 'Front-End', Message: 'Message' },
            { Active: false, Title: 'Back-End', Message: 'Message' }
        ]
      }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app';
#app {
    #contents-wrap {
        .contents {width: 90%; max-width: 960px; margin: 0 auto;
            h2 {margin-bottom: 150px; display: block;}
            .career-wrap {
                article {display: flex; margin-bottom: 70px;
                    > span {flex: 2;}
                    > .career, > p {flex: 3;}
                    .career {display: flex; flex-flow: column nowrap;
                        p {transition-property: max-height; @include ease-out(.5s); overflow: hidden; transition: opacity .5s;}
                        .career-box {margin-bottom: 25px;
                            .title {display: flex; width: 100%; justify-content: space-between; height: 50px; align-items: center; border-bottom: 1px solid $color--light; box-sizing: border-box; margin-bottom: 25px; cursor: pointer;
                                .plus-btn {width: 14px; height: 14px; position: relative; transition-property: transform; @include ease-out(.25s);
                                    span {width: 100%; height: 1px; display: inline-block; background: $color--light; text-indent: -9999px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; transition-property: transform; @include ease-out(.5s);
                                        &:last-child {transform: rotate(90deg); width: 85%;}
                                    }
                                }
                                &.on {
                                    .plus-btn {
                                        span:last-child {transform: rotate(0deg);}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    &.theme--dark {
        #contents-wrap {
            .contents {
                .career-wrap {
                    article {
                        .career {
                            .career-box {
                                .title {border-color: $color--dark;
                                    .plus-btn {
                                        span {background: $color--dark}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 769px) {
    #app {
        #contents-wrap {
            .contents {
                .career-wrap {
                    article {
                        .career {
                            .career-box {
                                .title {
                                    &:hover {
                                        .plus-btn {transform: rotate(15deg);}
                                    }
                                    &:active {
                                        .plus-btn {transform: rotate(30deg);}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    #app {
        #contents-wrap {
            .contents {
                h2 {margin-bottom: 100px;}
                .career-wrap {
                    article {flex-flow: column nowrap; margin-bottom: 100px;
                        > span {margin-bottom: 25px;}
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 425px) {
    #app {
        #contents-wrap {
            .contents {
                h2 {margin-bottom: 75px;}
            }
        }
    }
}

</style>
