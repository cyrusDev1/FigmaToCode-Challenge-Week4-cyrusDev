<template>
    <nav class="py-3">
        <div class="flex justify-between items-center">
            <div class="">
                <img src="../../assets/img/logo.png" alt="Logo">
            </div>
            <div class="cursor-pointer">
                <img @click="openToggleMenu()" class="w-8" src="../../public/img/icons/bar.png" alt="Logo">
            </div>
        </div>

        <transition name="fade" v-if="showToggleMenu" class="z-50 py-4 px-5">
            <div class="fixed top-0 w-4/5 right-0 h-full bg-black">
                <div class="cursor-pointer flex justify-end">
                    <img @click="closeToggleMenu()" class="w-8" src="../../public/img/icons/close.svg" alt="Logo">
                </div>
                <div>
                    <ul class="space-y-8 text-white items-center text-xl font-semibold">
                        <li @click="closeToggleMenu()" class="transition ease-in-out duration-500 hover:underline"><a href="#about">About
                                Me</a></li>
                        <li @click="closeToggleMenu()" class="transition ease-in-out duration-500 hover:underline"><a href="#skills">Skills</a></li>
                        <li @click="closeToggleMenu()" class="transition ease-in-out duration-500 hover:underline"><a href="#projects">Project</a></li>
                        <li @click="closeToggleMenu()" class="transition ease-in-out duration-500 hover:underline"><a href="#contact">Contact
                                Me</a></li>
                    </ul>
                </div>
                <div @mouseover="handleMouseOver" @mouseleave="handleMouseLeave"
                    class="w-[fit-content] mt-5 transition ease-in-out duration-500 flex justify-center items-center gap-4 bg-white rounded text-black cursor-pointer border-2 border-black p-3 text-lg font-bold">
                    <a class="" href="#">Resume</a>
                    <img class="h-1/2" :src="download.imgHover" alt="">
                </div>
            </div>
        </transition>
        <div v-if="showToggleMenu" @click="closeToggleMenu()" class="bg-black opacity-70 
        z-30 fixed w-full h-full inset-0">
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isHovered: false,
            download: {
                'img': 'img/icons/download.png',
                'imgHover': 'img/icons/download-hover.png'
            },
            showToggleMenu: false,
        };
    },
    methods: {
        handleMouseOver() {
            this.isHovered = true;
        },
        handleMouseLeave() {
            this.isHovered = false;
        },
        openToggleMenu() {
            this.showToggleMenu = true;
        },
        closeToggleMenu() {
            this.showToggleMenu = false;
        },

    }
}
</script>
<style>
 
</style>