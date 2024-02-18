<template>
    <div class="py-16 mx-5 2xl:mx-28 xl:space-y-8" id="skills">
        <div class="py-5">
            <h2 class="text-4xl xl:text-5xl text-center">My <b>Skills</b></h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-12 py-4">
            <div v-for="skill in skills">
                <skill :skill="skill"></skill>
            </div>
        </div>
    </div>
</template>
<script>
import skill from "./skill.vue";

export default {
    components: {
        skill,
    },
    data() {
        return {
            skills: [
                        { 'text': 'Git', 'img': 'img/icons/git.png', 'imgHover': 'img/icons/git-hover.png' },
                        { 'text': 'Javascript', 'img': 'img/icons/js.png', 'imgHover': 'img/icons/js-hover.png' },
                        { 'text': 'Sass/scss', 'img': 'img/icons/sass.png', 'imgHover': 'img/icons/sass-hover.png' },
                        { 'text': 'NestJs', 'img': 'img/icons/nest.png', 'imgHover': 'img/icons/nest-hover.png' },
                        { 'text': 'Storybook', 'img': 'img/icons/storybook.png', 'imgHover': 'img/icons/storybook-hover.png' },
                        { 'text': 'Socket.io', 'img': 'img/icons/socket.png', 'imgHover': 'img/icons/socket-hover.png' },
                        { 'text': 'Sass/scss', 'img': 'img/icons/sass.png', 'imgHover': 'img/icons/sass-hover.png' },
                        { 'text': 'NestJs', 'img': 'img/icons/nest.png', 'imgHover': 'img/icons/nest-hover.png' },
                        { 'text': 'Storybook', 'img': 'img/icons/storybook.png', 'imgHover': 'img/icons/storybook-hover.png' },
                        { 'text': 'Socket.io', 'img': 'img/icons/socket.png', 'imgHover': 'img/icons/socket-hover.png' },
                    ]
        };
    },
}
</script>