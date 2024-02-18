<template>
    <div class="py-16 px-5 2xl:px-28 space-y-8" id="contact">
        <div class="py-5 2xl:flex gap-24 space-y-10 2xl:space-y-0">
            <div class="2xl:w-2/5">
                <div class="">
                    <form action="#" method="get" class="space-y-5">
                        <div>
                            <input class="rounded w-full px-6 py-4 outline-none border-2 border-black" type="text" name="" id=""
                                placeholder="Your name">
                        </div>
                        <div>
                            <input class="rounded w-full px-6 py-4 outline-none border-2 border-black" type="text" name="" id=""
                                placeholder="Email">
                        </div>
                        <div>
                            <input class="rounded w-full px-6 py-4 outline-none border-2 border-black" type="text" name="" id=""
                                placeholder="Your website (If exists)">
                        </div>
                        <div>
                            <textarea class="rounded w-full h-36 px-6 py-4 outline-none border-2 border-black" type="text"
                                name="" id="" placeholder="How can I help?*"></textarea>
                        </div>
                        <div class="2xl:flex justify-between space-y-8 2xl:space-y-0">
                            <div>
                                <button
                                class="transition ease-in-out duration-500 bg-black rounded text-white cursor-pointer hover:bg-white hover:text-black border-2 border-black py-3 px-5 text-xl font-bold">
                                 Get In Touch 
                            </button>
                            </div>
                            <div class="flex justify-start gap-6">
                                <div v-for="social in socials">
                                    <social :social="social"></social>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="2xl:w-4/5 flex items-center">
                <div class="space-y-5 2xl:space-y-10">
                    <div class="space-y-5">
                        <div>
                            <h2 class="text-2xl 2xl:text-4xl leading-tight 2xl:leading-normal font-black">Let’s
                                talk
                                for <br>
                                Something special</h2>
                        </div>
                        <div>
                            <p class="text-lg 2xl:text-xl">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                        </div>
                    </div>
                  
                    <div class="font-bold text-xl 2xl:text-2xl space-y-4">
                        <p>Youremail@gmail.com</p>
                        <p>1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import social from "../social.vue";

    export default {
        components: {
            social,
        },
        data() {
            return {
                socials: [
                    {'img': 'img/icons/fb.png', 'imgHover': 'img/icons/fb-hover.png'},
                    {'img': 'img/icons/flap.png', 'imgHover': 'img/icons/flap-hover.png'},
                    {'img': 'img/icons/x.png', 'imgHover': 'img/icons/x-hover.png'},
                    {'img': 'img/icons/discord.png', 'imgHover': 'img/icons/discord-hover.png'},
                ],
            };
        },
    }
</script>