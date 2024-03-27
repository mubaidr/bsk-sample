<template>
  <v-app>
    <Hero />
    <About />
    <Pricing />
    <Testimonials />
    <FAQ />
  </v-app>
</template>

<script setup>
useSeoMeta({
  title: "Intellect Institute",
  description: "BSK - Intellect Institute",
  image: "/logo.svg",
  url: "https://bsk-frontend.vercel.app/",
});
</script>
