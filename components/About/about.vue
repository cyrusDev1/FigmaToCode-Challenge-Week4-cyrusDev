<template>
    <div class="py-16 px-5 2xl:px-28 space-y-8" id="about">
        <div class="grid 2xl:flex justify-between gap-16 2xl:gap-32">
            <div class="lg:w-1/2 order-2 2xl:order-[initial] flex mx-auto items-center">
                <img class="w-full" :src="aboutImg" alt="">
            </div>
            <div class="2xl:w-1/2 flex items-center">
                <div class="space-y-12">
                    <h2 class="text-4xl 2xl:text-5xl font-medium">About <b class="font-black">Me</b></h2>
                    <div class="space-y-5 2xl:space-y-10 text-xl">
                        <p>I'm a passionate, self-proclaimed designer who specializes in full stack development
                            (React.js &
                            Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital
                            products
                            to life. User experience, pixel perfect design, and writing clear, readable, highly
                            performant
                            code
                            matters to me.</p>
                        <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and
                            evolve
                            as a
                            developer, taking on new challenges and learning the latest technologies along the way. Now,
                            in
                            my
                            early thirties, 7 years after starting my web development journey, I'm building cutting-edge
                            web
                            applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
                            Supabase
                            and much more.</p>
                        <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on
                            indie
                            hacker, witnessing the journey of early startups or enjoying some free time. You can follow
                            me
                            on
                            Twitter where I share tech-related bites and build in public, or you can follow me on
                            GitHub.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
        },
        data() {
            return {
                aboutImg: 'img/about/me.png'
            };
        },
    }
</script>