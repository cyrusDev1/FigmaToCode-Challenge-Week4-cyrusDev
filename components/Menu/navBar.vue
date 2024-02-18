<template>
    <nav class="py-3">
        <div class="flex justify-between items-center">
            <div class="">
                <img src="../../assets/img/logo.png" alt="Logo">
            </div>
            <div>
                <ul class="flex space-x-8 items-center text-xl font-semibold">
                    <li class="hover:text-[#404040] transition ease-in-out duration-500 hover:underline"><a href="#about">About
                            Me</a></li>
                    <li class="hover:text-[#404040] transition ease-in-out duration-500 hover:underline"><a
                            href="#skills">Skills</a></li>
                    <li class="hover:text-[#404040] transition ease-in-out duration-500 hover:underline"><a
                            href="#projects">Project</a></li>
                    <li class="hover:text-[#404040] transition ease-in-out duration-500 hover:underline"><a href="#contact">Contact
                            Me</a></li>
                </ul>
            </div>
            <div @mouseover="handleMouseOver" @mouseleave="handleMouseLeave"
                class=" transition ease-in-out duration-500 flex items-center gap-4 bg-black rounded text-white cursor-pointer hover:bg-white hover:text-black border-2 border-black p-3 text-xl font-bold">
                <a class="" href="#">Resume</a>
                <img class="h-1/2"
                :src="isHovered ? download.imgHover : download.img" alt="">
            </div>
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