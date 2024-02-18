<template>
    <header class="mx-5 2xl:ml-[102px] 2xl:mr-28 lg:py-4" id="home">
        <Head>
            <Title>CyrusDev | Developper</Title>
        </Head>
        <NavBar class="hidden lg:block"></NavBar>
        <MobileNavBar class="block lg:hidden"></MobileNavBar>
    </header>
</template>

<script>
import MobileNavBar from "./mobileNavBar.vue";
import NavBar from "./navBar.vue";

export default{
    components: {
    NavBar,
    MobileNavBar
}
};
</script>