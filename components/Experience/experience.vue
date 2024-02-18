
import experiencesVue from './experiences.vue';
<template>
    <div class="p-6 w-full border border-zinc-500 transition ease-in-out duration-500 hover:bg-zinc-800 text-zinc-300 space-y-8 cursor-pointer border-black rounded-lg">
        <div class="lg:flex justify-between">
            <div class="flex items-center gap-8">
                <div>
                    <img :src="experience.img">
                </div>
                <div>
                    <h2 class="font-semibold text-2xl">{{ experience.role }}</h2>
                </div>
            </div>
            <div class="mt-4 lg:mt-0">
                <p class="text-xl font-medium">{{ experience.duration }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl xl:text-[24px] space-x-5">{{ experience.description }}</p>
        </div>
    </div>

 </template>

<script>
export default {
    props: {
        experience: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
         };
    },
    methods: {
        
    }
}
</script>
<style scoped>
</style>