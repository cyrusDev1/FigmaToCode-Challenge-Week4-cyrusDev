<template>
    <div class="py-16 bg-black px-5 2xl:px-28 space-y-8" id="projects">
        <div class="py-5">
            <h2 class="text-4xl 2xl:text-5xl text-white text-center">My <b>Works</b></h2>
        </div>
        <div class="py-4 space-y-8">
            <div v-for="(work, index) in works">
                <work :work="work" :id="index"></work>
            </div>
        </div>
    </div>
</template>
<script>
import work from "./work.vue";

export default {
    components: {
        work,
    },
    data() {
        return {
            works: [
                {
                    'tittle': 'Crypto Screener Application', 'img': 'img/work/01.png',
                    'description': 'I\'m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book.',
                    'link': '#'
                },
                {
                    'tittle': 'Euphoria - Ecommerce (Apparels) Website Template', 'img': 'img/work/02.png',
                    'description': 'I\'m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book.',
                    'link': '#'
                },
                {
                    'tittle': 'Blog Website Template', 'img': 'img/work/03.png',
                    'description': 'I\'m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book.',
                    'link': '#'
                },
            ]
        };
    },
}
</script>