<template>
       <div class="xl:flex justify-between gap-32"
            :class="{'lg:flex-row-reverse': (id % 2) > 0}">
            <div class="xl:w-1/2 cursor-pointer flex items-center">
                <img class="w-full" :src="work.img" alt="">
            </div>
            <div class="xl:w-1/2 flex items-center">
                <div class="space-y-4 lg:space-y-12 text-white">
                    <span class="text-3xl xl:text-5xl font-bold">{{ id < 9 ? '0' + (id + 1) : id + 1 }}</span>
                    <h2 class="text-xl xl:text-4xl font-bold">{{  work.tittle  }}</h2>
                    <div class="space-y-10 text-xl">
                        <p>{{ work.description }}</p>
                    </div>
                    <div>
                        <a :href="work.link"><img :src="exportImg"></a>
                    </div>
                </div>
            </div>
        </div>
 </template>

<script>
export default {
    props: {
        work: {
            type: Object,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            exportImg: 'img/icons/export.png',
        };
    },
    methods: {
        
    }
}
</script>
<style scoped>
</style>