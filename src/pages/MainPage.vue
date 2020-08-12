<template>
<section id="contents-wrap">
    <section class="back-text font-bold"
    ref="BackText">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 451.3 208"
            style="overflow:visible;"
            xml:space="preserve">
            <g>
                <path v-for="( Name, idx )
                in FullName"
                ref="st"
                :class="{ active: Name.Active, loaded: SlideLoaded }"
                :key="idx" class="st" :d="Name.Path" />
            </g>
        </svg>
    </section>
    <section class="text-area">
        <transition name="fade" mode="out-in"
            v-for="(Name, idx) in FullName"
            :key="idx">
            <p class="font-bold text"
                v-if="Name.Active">{{ Name.Text }}</p>
        </transition>
    </section>
</section>
</template>

<script>
export default {
    data () {
        return {
            MainColor: '#CB6765',
            BackPosition: 0,
            SlideLoaded: false,
            PosX: 0,
            PosY: 0,
            NowName: 0,
            SlideStatus: false,
            SlideDelay: 500,
            FirstName: {
                S: { Active: false, Text: 'Special Design', Path: 'M0.7,175.7l23.1-32.4c14.1,14.7,36,27,63.6,27c23.4,0,34.8-10.8,34.8-22.2C122.2,112.7,7,137,7,61.7C7,28.4,35.8,0.8,82.9,0.8c31.8,0,58.2,9.6,78,27.9l-23.7,31.2C121,44.9,99.4,38,79,38c-18.3,0-28.5,8.1-28.5,20.1c0,31.8,114.9,10.5,114.9,85.2c0,36.6-26.1,64.2-80.1,64.2C46.9,207.5,19.3,194.6,0.7,175.7z'},
                E: { Active: false, Text: 'Excellent Ability', Path: 'M194.1,203.9V3.8h141.6v37.5h-99v42.3h96.9v37.5h-96.9v45.3h99v37.5H194.1z' },
                U: { Active: false, Text: 'Ultimate Skills', Path: 'M369,124.1V3.8h43.2v118.8c0,27.9,16.2,47.1,47.1,47.1s46.8-19.2,46.8-47.1V3.8h43.5v120c0,49.8-29.4,83.7-90.3,83.7C398.4,207.5,369,173.3,369,124.1z' },
                N: { Active: false, Text: 'No Problem', Path: 'M726.9,203.9L631.5,73.4v130.5h-42.6V3.8h43.8l92.7,125.7V3.8H768v200.1H726.9z' },
                G: { Active: false, Text: 'Great Progress', Path: 'M798,104C798,40.7,846,0.5,904.5,0.5c41.7,0,67.8,21,82.8,44.7l-35.4,19.2c-9-14.1-26.1-26.1-47.4-26.1c-36.3,0-62.7,27.9-62.7,65.7c0,37.8,26.4,65.7,62.7,65.7c17.7,0,34.5-7.8,42.6-15.3v-24h-52.8V93.2h95.4V170c-20.4,22.8-48.9,37.8-85.2,37.8C846,207.8,798,167,798,104z' }
            },
            SecondName: {
                J: { Active: false, Text: 'Join to make a difference', Path: 'M1082.4,188l18.6-32.7c7.8,7.5,18,14.4,31.8,14.4c18.9,0,31.2-12.6,31.2-32.1V3.8h42.6v134.4c0,47.4-29.4,69.3-70.5,69.3C1116,207.5,1096.8,202.1,1082.4,188z' },
                _U: { Actvie: false, Text: 'Unlimited Development', Path: 'M1246.2,124.1V3.8h43.2v118.8c0,27.9,16.2,47.1,47.1,47.1c30.9,0,46.8-19.2,46.8-47.1V3.8h43.5v120c0,49.8-29.4,83.7-90.3,83.7C1275.6,207.5,1246.2,173.3,1246.2,124.1z' }
            }
        }
    },
    computed: {
        FullName: function () {
            return Object.assign(this.FirstName, this.SecondName)
        }
    },
    methods: {
        ResetSlide: function (e) {
            const BackChild = this.$refs.st
            if (e) {
                this.PosX = e.clientX / 75
                this.PosY = e.clientY / 75
            }
            BackChild.forEach((e, i) => {
                if (i % 2) {
                    BackChild[i].style.transform = `translate(calc(${this.BackPosition}vw + ${this.PosX}px / 2) , ${this.PosY}px)`
                } else {
                    BackChild[i].style.transform = `translate(calc(${this.BackPosition}vw - ${this.PosX}px / 2) , -${this.PosY}px)`
                }
            })
        },
        SlideFn: function () {
            for (let i = 0; i < Object.values(this.FullName).length; i ++) {
                Object.values(this.FullName)[i].Active = false
            }   
            Object.values(this.FullName)[this.NowName].Active = true
            this.SlideStatus = false
            this.ResetSlide()
            setTimeout(() => {
                this.SlideStatus = true
            }, this.SlideDelay)
        },
        NextName: function () {
            const _Slides = Object.keys(this.FullName).length
            if ( this.NowName == _Slides - 1 ) {
                return false
            } else {
                this.NowName += 1
                this.BackPosition -= 12
            }
            this.SlideFn()
        },
        PrevName: function () {
            if ( this.NowName == 0 ) {
                return false
            } else {
                this.BackPosition += 12
                this.NowName -= 1
            }
            this.SlideFn()
        },
        NameFn: function (e) {
            if(this.SlideStatus) {
                e.deltaY < 0 ? this.PrevName() : this.NextName()
            }
        },
        GetArray: function (_this) {
            const path = _this
            const length = path.getTotalLength()
            return length
        },
        LoadFn: function() {
            this.SlideStatus = true
            this.SlideLoaded = true
        },
        DrawSvg: function (e) {
            const length = this.GetArray(e)
            e.style.strokeDasharray = length
            e.style.strokeDashoffset = length
            setTimeout(() => {
                e.style.transition = '1.5s stroke-dashoffset ease-out, 1s fill ease, stroke 1s ease-out, opacity 1s ease-out'
                e.style.strokeDashoffset = 0
            }, 500)
            setTimeout(() => {
                this.LoadFn()
                this.SlideFn()
                this.FullName
            }, 2500)
        }
    },
    mounted () {
        document.body.addEventListener('mousemove', e => {
            try {
                this.ResetSlide(e)
            } catch {
                //
            }
        })
        document.body.addEventListener('wheel', e => {
            this.NameFn(e)
        })
        
        this.$refs.st.forEach(e => {
            this.DrawSvg(e)
        })
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/app';
#app {width: 100vw; height: 100vh; overflow: hidden;
    #contents-wrap {width: 100%; height: 100vh; position: absolute; top: 0; left: 0; overflow: hidden; display: flex; align-items: center; justify-content: center; overflow: hidden;
        .back-text {position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 100vh;
            span {flex: 1; color: $color--light; opacity: 0.15; position: relative; pointer-events: none; transform: translate(100vw, 5vh); transition-property: color opacity; @include ease-out(.5s);
                &.active {color: $color--main !important; opacity: .75;}
            }
            svg {height: 65vh;
                .st{fill: transparent; stroke: $color--light; opacity: .15; transform-origin: center;
                    &.loaded {fill: $color--light;}
                    &.loaded.active {fill: $color--main; stroke: $color--main; opacity: .75;}
                }
            }
        }
        .text-area { width: 100%; height: 100%; display: flex; align-items: center;
            .text {width: 82vw; font-size: 8.5rem; position: absolute; left: 0; right: 0; margin: auto; transition-property: opacity; @include ease-out(.5s);}
            .fade-enter-active {opacity: 0;}
        }
    }
    &.theme--dark {
        #contents-wrap {
            .back-text {
                span {color: $color--dark;}
            }
            svg {height: 65vh;
                .st{fill: transparent; stroke: $color--dark;
                    &.loaded {fill: $color--dark;}
                }
            }
        }
    }
}
    
</style>
