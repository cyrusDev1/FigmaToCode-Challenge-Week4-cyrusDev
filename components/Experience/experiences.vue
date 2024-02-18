<template>
    <div class="py-16 bg-black px-5 2xl:px-36 space-y-8">
        <div class="py-5">
            <h2 class="text-4xl 2xl:text-5xl text-white text-center">My <b>Experiences</b></h2>
        </div>
        <div class="py-4 space-y-8">
            <div v-for="experience in experiences">
                <experience :experience="experience"></experience>
            </div>
        </div>
    </div>
</template>
<script>
import experience from "./experience.vue";

export default {
    components: {
        experience,
    },
    data() {
        return {
            experiences: [
                {
                    'role': 'Lead Software Engineer at Google', 'img': 'img/icons/google.png', 'duration': 'Nov 2019 - Present',
                    'description': 'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google\'s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.'
                },
                {
                    'role': 'Software Engineer at Youtube', 'img': 'img/icons/youtube.png', 'duration': 'Jan 2017 - Oct 2019',
                    'description': 'At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant\'s dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.'
                },
                {
                    'role': 'Junior Software Engineer at Apple', 'img': 'img/icons/apple.png', 'duration': 'Jan 2016 - Dec 2017',
                    'description': 'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.'
                },
            ]
        };
    },
}
</script>