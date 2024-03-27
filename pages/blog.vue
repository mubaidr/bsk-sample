<template>
  <section :class="{ 'px-4 lg:px-0 radial-bg-1': !isMediumScreen, 'px-4 lg:px-0 bg-black': isMediumScreen }">
    <div class="container px-0">
      <header class="text-center pt-8 px-4 lg:px-0">
        <span class="text-primary">BLOG</span>
        <h2 class="text-[48px] tracking-[-3px] font-medium">Unsere Nachrichten</h2>
        <p class="font-light leading-[25.6px] pt-4 pb-6 w-full md:w-1/2 mx-auto">
          Bleiben Sie mit den neuesten Kursen und Erkenntnissen auf dem Laufenden geteilt vom Intellect Institute.
        </p>

        <div class="w-full md:w-2/4 mx-auto mt-5 flex">
          <v-text-field
            class="search-input"
            label="Suche Kursfrage"
            bg-color="white"
            variant="solo-filled"
            rounded="0"
          ></v-text-field>
          <v-btn color="primary" rounded="0" height="56">
            <v-icon icon="mdi-magnify" size="20"></v-icon>
          </v-btn>
        </div>

        <p class="block d-md-none py-6 font-light">
          Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren. Unbegrenzte
          Benutzer kostenlos.
        </p>
      </header>

      <v-card-actions class="justify-center d-md-none">
        <v-btn variant="outlined" icon="mdi-chevron-left" @click="prev"></v-btn>
        <v-btn variant="outlined" icon="mdi-chevron-right" @click="next"></v-btn>
      </v-card-actions>

      <v-window v-model="onboarding">
        <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
          <section v-for="blog in blogs" :key="blog.id" class="px-4 lg:px-0 my-12">
            <v-divider :thickness="3"></v-divider>
            <article class="flex justify-lg-between justify-xl-center align-center gap-x-3 md:gap-x-10 pt-10 md:pt-0">
              <div class="md:pt-10">
                <v-img class="w-40 md:w-72 lg:w-96" cover :src="blog.image"></v-img>
              </div>
              <div class="flex items-start flex-col">
                <h2 class="text-sm md:text-2xl pb-4 leading-relaxed font-medium">{{ blog.title }}</h2>
                <p class="font-light text-sm sm:text-[18px]">
                  {{ blog.readingDuration }} &bull; {{ blog.datePublished }}
                </p>
              </div>
            </article>
          </section>
        </v-window-item>
      </v-window>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isMediumScreen = ref(false);

const handleResize = () => {
  isMediumScreen.value = window.innerWidth >= 640 && window.innerWidth < 1024;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const blogs = ref([
  {
    id: 1,
    title: "Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java",
    datePublished: "August 19, 2022",
    image:
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readingDuration: "4 Min",
  },
  {
    id: 2,
    title: "Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java",
    datePublished: "August 19, 2022",
    image:
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readingDuration: "4 Min",
  },
  {
    id: 3,
    title: "Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java",
    datePublished: "August 19, 2022",
    image:
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readingDuration: "4 Min",
  },
  {
    id: 4,
    title: "Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java",
    datePublished: "August 19, 2022",
    image:
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readingDuration: "4 Min",
  },
  {
    id: 5,
    title: "Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java",
    datePublished: "August 19, 2022",
    image:
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readingDuration: "4 Min",
  },
]);

const length = ref(blogs.value.length);
let onboarding = ref(1);

const next = () => {
  onboarding.value = onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
};

const prev = () => {
  onboarding.value = onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
};

useSeoMeta({
  title: "Blog",
  description: "Blog",
  image: "/logo.svg",
  url: "https://bsk-frontend.vercel.app/blog",
});
</script>

<style scoped>
.radial-bg-1 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}
</style>
