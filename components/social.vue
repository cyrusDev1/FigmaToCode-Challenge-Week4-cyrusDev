<template>
    <div class="p-4 border-2 hover:bg-black cursor-pointer border-black rounded"
        @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <img :src="isHovered ? social.imgHover : social.img" alt="social">
    </div>
</template>
  
<script>
export default {
    props: {
        social: {
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
  