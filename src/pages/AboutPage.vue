<template>
<section id="contents-wrap">
    <h3 id="page-title" class="text-normal">About</h3>
    <article class="contents">
        <p class="text-box font-bold">
            The best ideas come as jokes. Make your thinking as funny as possible <small class="text-large font-regular">~ David Mackenzie Ogilvy</small>
        </p>
        <img src="../assets/images/picture.png" alt="picture" class="picture">
        <h4 class="name text-center display-1 font-bold">SEUNG JU</h4>
        <ul class="naming display-1 font-bold">
            <li
              v-for="(Text, idx) in Naming"
              :key="idx">{{ Text }}</li>
        </ul>
        <div class="profile-wrap">
            <h5 class="title text-center display-2 font-bold">PROFILE</h5>
            <table class="text-large font-light">
                <tr><td>Name</td><td>{{ Profile.Name }}</td></tr>
                <tr><td>Birth</td><td>{{ Profile.Birth }}</td></tr>
                <tr><td>Phone</td><td>{{ Profile.Phone }}</td></tr>
                <tr><td>E-mail</td><td>{{ Profile.Email }}</td></tr>
            </table>
        </div>
    </article>
    <Footer/>
</section>
</template>
<script>
export default {
    name: 'about',
    data () {
        return {
            Naming: [
                'Special Design',
                'Excellent Ability',
                'Ultimate Skills',
                'No Problem',
                'Great Progress',
                'Join to make a difference',
                'Unlimited Development'
            ],
            Profile: {
                Name: 'Oh Seung Ju',
                Birth: '2000. 09. 27' ,
                Phone: '010. 5236. 3219',
                Email: 'webwebpubfighting!!'
            }
        }
    }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/app';
body {
    #app {
        #contents-wrap {position: relative;
            .contents {width: 90%; margin: 0 auto; max-width: 960px; box-sizing: border-box;
                .text-box {font-size: 90px; line-height: 96px; margin-bottom: 100px;}
                .picture {width: 343px; margin: 0 auto; display: block; margin-bottom: 75px;}
                .name {margin-bottom: 75px;}
                .naming {
                    margin-bottom: 150px;
                    li  {margin-bottom: 25px;
                        &:last-child {margin-bottom: 0;}
                    }
                }
                .profile-wrap {
                    .title {margin-bottom: 50px;}
                    table {
                        tr {
                            td {padding-bottom: 15px; width: 100px;
                                &:last-child {padding-bottom: 0;}
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    body {
        #app {
            #contents-wrap {
                .contents {
                    .text-box {font-size: 72px; line-height: 80px;}
                }
            }
        }
    }
}

@media screen and (max-width: 425px) {
    body {
        #app {
            #contents-wrap {
                .contents {
                    .text-box {font-size: 62px; line-height: 70px;}
                }
            }
        }
    }
}
</style>
