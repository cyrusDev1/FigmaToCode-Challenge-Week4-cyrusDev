<template>
    <div class="py-16 px-5 2xl:px-28 space-y-8">
        <div class="py-5">
            <h2 class="text-4xl 2xl:text-5xl text-center">My <b>Testimonial</b></h2>
        </div>
        <div class="py-4 px-2 xl:px-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
            <div v-for="(testimonial, index) in testimonials">
                <testimonial :testimonial="testimonial" :id="index"></testimonial>
            </div>
        </div>
    </div>
</template>
<script>
import testimonial from "./testimonial.vue";

export default {
    components: {
        testimonial,
    },
    data() {
        return {
            testimonials: [
                {
                    'name': 'Evren Shah',
                    'text': 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
                    'role': 'Designer',
                    'avatar': 'img/testimonial/01.png'
                },
                {
                    'name': 'Flora sheen',
                    'text': 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
                    'role': 'Designer',
                    'avatar': 'img/testimonial/02.png'
                },
                { 
                    'name': 'Evren Shah',
                    'text': 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
                    'role': 'Designer',
                    'avatar': 'img/testimonial/01.png'
                },
            ]
        };
    },
}
</script>