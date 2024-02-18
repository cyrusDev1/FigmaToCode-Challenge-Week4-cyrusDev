<template>
    <div class="transition ease-in-out duration-700 p-6 md:p-12 2xl:p-16 w-full border-2 hover:bg-black hover:text-white space-y-8 cursor-pointer border-black rounded"
        @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <div class="flex justify-center">
            <img :src="isHovered ? skill.imgHover : skill.img" alt="skill">
        </div>
        <div class="flex justify-center">

        <span class="text-xl font-bold">{{ skill.text }}</span>
    </div>

    </div>
</template>
  
<script>
export default {
    props: {
        skill: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isHovered: false
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