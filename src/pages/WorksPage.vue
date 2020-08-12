<template>
<section id="contents-wrap">
    <section class="contents">
        <h3 id="page-title" class="text-normal">Works</h3>
        <section class="main-works">
            <article class="work" v-for="(work, idx) in works.slice(0, 3)" :key="idx">
            <router-link :to="`/works/project?id=${work.id}`">
                <div class="thumb">
                    <img v-bind:src="work.thumb" alt="thumbnail">
                </div>
                <div class="detail">
                    <h4 class="display-4 font-regular title">{{ work.info.title }}</h4>
                    <p class="text-normal font-light cate">{{ work.info.cate }}</p>
                    <p class="text-large font-light create"> {{ work.info.create }}</p>
                    <div class="more display-4 font-light">
                        <span>learn more</span>
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
            </router-link></article>
        </section>
        <section class="sub-works">
            <article class="work" v-for="(work, idx) in works" :key="idx">
            <router-link :to="`/works/project?id=${work.id}`">
                <div class="thumb">
                    <img v-bind:src="work.thumb" alt="thumbnail">
                </div>
                <div class="detail">
                    <h4 class="display-4 font-regular title">{{ work.info.title }}</h4>
                    <p class="text-normal font-light cate">{{ work.info.cate }}</p>
                    <p class="text-large font-light create"> {{ work.info.create }}</p>
                    <div class="more display-4 font-light">
                        <span>learn more</span>
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
            </router-link></article>
        </section>
    </section>
    <Footer/>
</section>
</template>

<script>
export default {
  name: 'works',
  created () {
    this.$http.get('/api/project')
    .then((response) => {
        this.works = response.data
    })
  },
  data () {
    return {
      works: []
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app';
#app {
    #contents-wrap {
        .contents {margin-bottom: -150px;
            .main-works {display: flex; flex-flow: column nowrap; width: 100%; max-width: 960px; margin: 0 auto 150px; box-sizing: border-box;
                .work {margin-bottom: 150px;
                    .thumb {height: 475px;}
                    .detail {padding: 40px;
                        .more {bottom: 40px; right: 40px;}
                    }
                }
            }
            .work {position: relative;
                .thumb {width: 100%;
                    img {width: 100%; height: 100%; object-fit: cover;}
                }
                .detail {width: 100%; height: 100%; position: absolute; top: 0; left: 0; background: rgba(0, 0, 0, 0.25); transition-property: opacity; @include ease-out(.25s); box-sizing: border-box; opacity: 0;
                    h4 {color: $color--main;}
                    .create, .cate {color: #fff;}
                    .cate {text-transform: uppercase;}
                    .more {position: absolute; color: $color--main; display: flex; align-items: center;
                        span {margin-right: 15px;}
                    }
                }
                &:last-child {margin-bottom: 0;}
                &:hover {
                    .detail {opacity: 1;}
                }
            }

            .sub-works {display: flex; flex-flow: row wrap;
                .work {flex: 0 1 calc(100% / 7);
                    .thumb {height: 225px;}
                    .detail {padding: 15px;
                        h4 {margin-bottom: 5px;}
                        .more {bottom: 15px; right: 15px;}
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1920px ) {
    #app {
        #contents-wrap {
            .contents {
                .sub-works {
                    .work {flex: 0 1 calc(100% / 5)}
                }
            }
        }
    }
}
@media screen and (max-width: 1440px ) {
    #app {
        #contents-wrap {
            .contents {margin-bottom: -100px;
                .sub-works {
                    .work {flex: 0 1 calc(100% / 4)}
                }
            }
        }       
    }
}
@media screen and (max-width: 1024px ) {
    #app {
        #contents-wrap {
            .contents {
                .main-works {padding: 0 5%;}
                .sub-works {
                    .work {flex: 0 1 calc(100% / 3)}
                }
            }
        }
    }
}
@media screen and (max-width: 768px ) {
    #app {
        #contents-wrap {
            .contents{
                .sub-works {
                    .work {flex: 0 1 calc(100% / 2)}
                }
            }
        }
    }
}
@media screen and (max-width: 425px ) {
    #app {
        #contents-wrap {
            .contents {
                .main-works {
                    .work {margin-bottom: 75px;
                        .thumb {height: 250px;}
                        &:last-child {margin-bottom: 0;}
                    }
                }
                .sub-works {
                    .work {flex: 0 1 33.334%;
                        .thumb {height: 150px;}
                    }
                }
            }
        }
    }
}
</style>
