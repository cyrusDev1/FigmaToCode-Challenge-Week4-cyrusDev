<template>
    <div class="cursor-pointer p-5 xl:p-10 transition ease-in-out duration-500 space-y-6 rounded-xl text-[#404040] shadow-xl hover:bg-black hover:text-white"
        @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <div class="flex justify-center">
            <div class="relative">
                <img class="w-full" :src="testimonial.avatar" alt="">
                <img class="absolute bottom-4 right-0" :src="isHovered ? quoteHover : quote" alt="">
            </div>
        </div>
        <div>
            <p class="text-center text-xl xl:text-2xl">{{ testimonial.text }}</p>
        </div>
        <div class="border-2 border-black w-1/2 mx-auto" :class="{'border-white':isHovered}"></div>
        <div>
            <h2 class="text-center text-2xl font-semibold ">{{ testimonial.name }}</h2>
        </div>
        <div>
            <h2 class="text-center text-xl font-semibold" :class="{'text-white':isHovered, 'text-zinc-500': !isHovered}">{{ testimonial.role }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            testimonial: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                isHovered: false,
                quoteHover: 'img/icons/quote-hover.png',
                quote: 'img/icons/quote.png',
            };
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
<style scoped>
</style>