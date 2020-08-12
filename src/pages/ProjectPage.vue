<template>
<section id="contents-wrap">
    <section class="main-vis">
        <article class="thumb">
            <img :src="nowWork.thumb" alt="main-vis">
        </article>
        <article class="info-area">
            <article class="info-now">
                <p class="id text-small font-light">{{ nowWork.id }}</p>
                <h3 class="title display-4"
                    v-if="nowWork.info">{{ nowWork.info.title }}</h3>
                <p class="date text-tiny">
                    <span class="year"
                        v-if="nowWork.info">{{ nowWork.info.year }}</span>
                    <span class="category"
                        v-if="nowWork.info">{{ nowWork.info.cate }}</span>
                </p>
                <div class="pos-area"
                    v-if="nowWork.info">
                    <div class="pos"
                        v-for="(pos, idx) in nowWork.info.pos"
                        :key="idx">
                        <p class="role text-tiny font-medium">{{ pos.role }}</p>
                        <p class="name text-tiny font-light">{{ pos.name }}</p>
                    </div>
                </div>
            </article>
            <article class="info-next" v-if="nextWork">
                <router-link :to="`/works/project?id=${nextWork.id}`">
                    <p class="id text-small font-light">{{ nextWork.id }}</p>
                    <h3 class="title display-4"
                        v-if="nextWork.info">{{ nextWork.info.title }}</h3>
                    <p class="date text-tiny">
                        <span class="year"
                            v-if="nextWork.info">{{ nextWork.info.year }}</span>
                    </p>
                </router-link>
            </article>
            <article class="info-next" v-if="!nextWork">
                <h3 class="title display-4">Last Project</h3>
            </article>
        </article>
    </section>
    <section class="contents">
        <p class="summary text-big">{{ nowWork.summary }}</p>
        <section class="contents-detail">
            <article class="detail-area"
                v-for="(detail, idx) in nowWork.detail"
                :key="idx">
                <img :src="detail.img" alt="detail-img">
                <div class="text-area">
                    <p class="id text-normal">{{ idx.substring(8, 6) }}</p>
                    <p class="title text-big">{{ detail.title }}</p>
                    <p class="text text-big">{{ detail.text }}</p>
                </div>
            </article>
            <article class="mockup"
                v-for="(mockup, idx) in nowWork.mockup"
                :key="idx">
                <img :src="mockup" alt="mockup">
            </article>
            <article class="detail-area-row"
                v-for="(detail, idx) in nowWork.detail2"
                :key="idx">
                <div class="title-area">
                    <p class="id text-normal">{{ idx.substring(8, 6) }}</p>
                    <p class="title text-big">{{ detail.title }}</p>
                </div>
                <div class="img-area">
                    <img :src="detail.img" alt="img">
                </div>
            </article>
            <article class="final-img">
                <img :src="nowWork.finalImg" alt="finalImg">
            </article>
        </section>
    </section>
    <Footer/>
</section>
</template>

<script>
export default {
    name: 'Project',
    data () {
        return {
            QueryId: 0,
            NowNum: 0,
            NextNum: 0,
            nowWork: [],
            nextWork: []
        }
    },
    methods: {
        GetProject (url) {
            this.$http.get(url)
                .then((response) => {
                this.QueryId = Number(this.$route.query.id)
                this.NowNum = this.QueryId - 1
                this.NextNum = this.QueryId
                this.nowWork = response.data[this.NowNum]
                try {
                    this.nextWork = response.data[this.NextNum]
                } catch {
                    // 
                }
            })
        }
    },
    created () {
        this.GetProject('/api/project')
    },
    updated () {
        this.GetProject('/api/project')
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app';
#app {
    #contents-wrap {margin-top: -225px;
        .main-vis {width: 100%; height: 100vh; 
            .thumb {width: 100%; height: 77%;
                img {width: 100%; height: 100%; object-fit: cover;}
            }
            .info-area {width: 100%; height: 23%; background: $color--main; display: flex; color: #ffffff;
                .id { opacity: .5; margin-bottom: 10px;}
                .title {text-transform: uppercase; margin-bottom: 10px;}
                .date { opacity: .5; margin-bottom: 30px;
                    .year {
                        &::after {content: ' ・ ';}
                    }
                    .category {text-transform: uppercase;}
                }
                .pos-area {display: flex; letter-spacing: 1px;;
                    .pos {margin-right: 50px;
                        .role {margin-bottom: 5px; text-transform: uppercase;}
                    }
                }
                .info-now {padding: 30px 60px; box-sizing: border-box; flex: 50;}
                .info-next {background: #000; flex: 2; width: 10%; transition-property: all; @include ease-out(.25s); padding: 30px 0 30px 10px; box-sizing: border-box; overflow: hidden;
                    &:hover {flex: 5}
                    &.on {flex: 100000;}
                    a {display: block; width: 100%; height: 100%;}
                }
            }
        }
        .contents {padding: 100px 0; width: 960px; margin: 0 auto;
            .summary {width: 750px; margin: 0 auto 150px;}
            .contents-detail {
                img {width: 100%;}
                .id {margin-bottom: 15px;}
                .title {margin-bottom: 30px;}
                .text-area {width: 750px; margin: 50px auto 0;}
                .detail-area {margin-bottom: 150px;}
                .detail-area-row {display: flex; flex-flow: row nowrap; margin-bottom: 150px;
                    .title-area {flex: 1;}
                    .img-area {flex: 5;}
                }
            }
            .mockup {margin-bottom: 150px;
                img {width: 100%;}
            }
        }
    }
}
</style>