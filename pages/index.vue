<template>
    <Header></Header>
    <Hero></Hero>
    <Skills></Skills>
    <Experiences></Experiences>
    <About></About>
    <Works></Works>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
</template>

<script>
import Header from "../components/Menu/header.vue";
import Hero from "../components/Hero/hero.vue";
import Skills from "../components/Skill/skills.vue";
import Experiences from "../components/Experience/experiences.vue";
import About from "../components/About/about.vue";
import Works from "../components/Work/works.vue";
import Testimonials from "../components/Testimonial/testimonials.vue";
import Contact from "../components/Contact/contact.vue";
import Footer from "../components/Footer.vue";

export default{
    components: {
        Header,
        Hero,
        Skills,
        Experiences,
        Works,
        About,
        Testimonials,
        Contact,
        Footer
    },
    methods: {
    
  },
};
</script>