<template>
    <footer class="bg-black px-5 2xl:px-28 py-6">
        <div class="flex justify-between items-center">
            <div>
                <img :src="logoDark" alt="">
            </div>
            <div class="text-white text-sm xl:text-md text-end">
                <p>@ 2019-2024 Personal</p>
                <p>Made In Figma</p>
            </div>
        </div>
        <a href="#top" id="backToTop" class="hidden fixed p-2 right-2 bottom-2  text-white z-20 bg-[#eee] rounded-[50%]">
           <img :src="up" class="w-4" alt="">
        </a>
    </footer>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            logoDark: 'img/logo-dark.png',
            up: 'img/icons/up.png'
        };
    },
    methods: {
        scrollToTop() {
            this.$nuxtVueScrollTo('#skills', 500, { easing: 'ease-in-out' });
        },
    },
    mounted() {
        var backToTop = document.getElementById('backToTop');

        // Ajoutez un gestionnaire de scroll pour afficher/masquer l'élément
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                // Si la position de défilement est supérieure à 0, montrez l'élément
                backToTop.style.display = 'block';
            } else {
                // Sinon, masquez l'élément
                backToTop.style.display = 'none';
            }
        });

    }
}
</script>
<style scoped></style>