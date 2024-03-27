<template>
  <footer class="bg-black py-12 px-4 lg:px-0">
    <section class="container grid md:grid-cols-1 xl:grid-cols-12 xl:space-x-36">
      <!-- Column 1 Start -->
      <div class="xl:col-span-3">
        <v-img :width="80" cover src="/logo.svg"></v-img>
        <p class="py-8 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        </p>
        <p class="text-uppercase font-archivo text-gray-300 hidden lg:block">&copy; Intellect Institute {{ year }}</p>
      </div>
      <!-- Column 1 End -->

      <!-- Column 2 Start -->
      <div class="xl:col-span-6 hidden md:flex justify-between text-nowrap pt-8 lg:pt-0">
        <div>
          <h5 class="text-primary font-bold text-uppercase text-base pb-5 font-poppins">Unternehmen</h5>
          <ul v-for="unternehmenLink in unternehmenLinks" :key="unternehmenLink.id">
            <li>
              <NuxtLink :to="unternehmenLink.link" class="hover:text-primary transition duration-200">{{
                unternehmenLink.name
              }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="text-primary font-bold text-uppercase text-base pb-5 font-poppins">Produkte</h5>
          <ul v-for="produkteLink in produkteLinks" :key="produkteLink.id">
            <li>
              <NuxtLink :to="produkteLink.link" class="hover:text-primary transition duration-200">{{
                produkteLink.name
              }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="text-primary font-bold text-uppercase text-base pb-5 font-poppins">Helfen</h5>
          <ul v-for="helfenLink in helfenLinks" :key="helfenLink.id">
            <li>
              <NuxtLink :to="helfenLink.link" class="hover:text-primary transition duration-200 text-nowrap">{{
                helfenLink.name
              }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Column 2 End -->

      <!-- Column 3 Start -->
      <div class="xl:col-span-3 ml-0 pt-8 lg:pt-0 flex items-center justify-start justify-xl-end space-x-6">
        <div class="bg-gray-600 rounded-full p-2">
          <v-icon icon="mdi-facebook" size="25"></v-icon>
        </div>
        <div class="bg-gray-600 rounded-full p-2">
          <v-icon icon="mdi-linkedin" size="25"></v-icon>
        </div>
        <div class="bg-gray-600 rounded-full p-2">
          <v-icon icon="mdi-twitter" size="25"></v-icon>
        </div>
        <div class="bg-gray-600 rounded-full p-2">
          <v-icon icon="mdi-instagram" size="25"></v-icon>
        </div>
      </div>
      <!-- Column 3 End -->

      <p class="text-uppercase font-archivo text-gray-300 lg:hidden block pt-10">
        &copy; Intellect Institute {{ year }}
      </p>
    </section>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();

import { ref } from "vue";

const unternehmenLinks = ref([
  { id: 1, name: "Über uns", link: "/uberUns" },
  { id: 2, name: "FAQ", link: "/faq" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "Karriere", link: "/karriere" },
]);

const produkteLinks = ref([
  { id: 1, name: "Kunde", link: "/kunde" },
  { id: 2, name: "Rückmeldung", link: "/ruckmeldung" },
  { id: 3, name: "Zertifikate", link: "/zertifikate" },
]);

const helfenLinks = ref([
  { id: 1, name: "Erste Schritte", link: "/ersteSchritte" },
  { id: 2, name: "FAQ", link: "/faq" },
]);
</script>

<style scoped>
li {
  @apply py-3 text-gray-200;
}

h5 {
  font-family: "Archivo", sans-serif;
}
</style>
