<template>
    <div class="mx-4 2xl:mx-28 py-16">
        <div class="grid xl:flex grid-cols-1">
            <div class="w-full xl:w-[60%] flex items-center order-3 xl:order-1">
                <div class="space-y-8">
                    <h2 class="text-3xl leading-tight xl:text-5xl xl:leading-relaxed">Hello I’am <b>Evren Shah.</b> <br> <b class="font-outlined">Frontend</b> Developer <br> Based In
                        <b>India.</b></h2>
                    <p class="w-full xl:w-[90%] text-xl xl:text-2xl">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to specimen book.</p>
                </div>
            </div>
            <div class="w-full xl:w-[40%] order-1 xl:order-2 flex justify-center xl:justify-star">
                <img class="" 
                @mouseover="handleMouseOver" @mouseleave="handleMouseLeave"
                :src="isHovered ? hero.imgHover : hero.img" alt="">
            </div>
            <div class="order-2 flex justify-center xl:hidden mb-16">
                <img class="" 
                :src="rect.img" alt="">
            </div>
        </div>

        <div class="flex mt-10 xl:mt-0 justify-between relative">
            <div class="flex gap-4 xl:gap-8 absolute xl:bottom-[-27px]">
                <div v-for="social in socials"> 
                    <social :social="social"></social>
                </div>
            </div>
            <div class="hidden xl:flex justify-end right-0 absolute inset-x-0">
                <img class="w-2/4" 
                :src="rect.img" alt="">
            </div>
        </div>
</div>
</template>
<script>
import social from '../social.vue'
export default{
    components: {
        social,
    },
    data(){
        return {
            isHovered: false,
            socials: [
                {'img': 'img/icons/fb.png', 'imgHover': 'img/icons/fb-hover.png'},
                {'img': 'img/icons/flap.png', 'imgHover': 'img/icons/flap-hover.png'},
                {'img': 'img/icons/x.png', 'imgHover': 'img/icons/x-hover.png'},
                {'img': 'img/icons/discord.png', 'imgHover': 'img/icons/discord-hover.png'},
            ],
            hero: {
                'img': 'img/hero/hero.png',
                'imgHover': 'img/hero/hero-hover.png'
            },
            rect: {
                'img': 'img/hero/rect.png',
            }
        }
    },
    methods: {
        handleMouseOver() {
            this.isHovered = true;
        },
        handleMouseLeave() {
            this.isHovered = false;
        }
    }
}
</script>