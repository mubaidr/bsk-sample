<template>
  <section :class="{ 'px-4 lg:px-0 radial-bg-1': !isMediumScreen, 'px-4 lg:px-0 bg-black': isMediumScreen }">
    <section class="container px-0">
      <!-- <h1>Coach Page - {{ router.params.id }}</h1> -->
      <article class="hidden md:grid grid-cols-2 items-center py-20">
        <section>
          <p class="text-[25px] text-primary">Lehrer</p>
          <h2 class="font-semibold text-[40px]">Dr. Richard Lim</h2>
          <p class="font-normal text-[18px] leading-[31.5px] pt-2">Developer and Lead Instructor</p>

          <div class="pt-10 flex items-center gap-x-20">
            <div>
              <h3 class="font-light text-[18px] text-nowrap">Gesamtzahl der Studenten</h3>
              <p class="font-semibold text-[40px]">123,456</p>
            </div>
            <div>
              <h3 class="font-light text-[18px]">Rezensionen</h3>
              <p class="font-semibold text-[40px]">123,456</p>
            </div>
          </div>
        </section>

        <section class="text-end hidden lg:block">
          <v-avatar image="/about/team-member-sample.jpg" size="300"></v-avatar>
        </section>

        <section class="text-end lg:hidden">
          <v-avatar image="/about/team-member-sample.jpg" size="230"></v-avatar>
        </section>
      </article>

      <!-- Extra small screens layout -->
      <article class="py-20 block md:hidden">
        <div class="flex items-center space-x-7">
          <v-avatar image="/about/team-member-sample.jpg" size="120"></v-avatar>
          <div>
            <p class="text-base text-primary">Lehrer</p>
            <h2 class="font-semibold text-2xl sm:text-3xl">Dr. Richard Lim</h2>
            <p class="font-normal text-sm pt-2">Developer and Lead Instructor</p>
          </div>
        </div>
        <div class="flex pt-7 space-x-4">
          <div class="flex flex-col md:hidden space-y-3">
            <v-btn class="text-capitalize font-light" size="small" prepend-icon="mdi-link" variant="outlined"
              >Website Link</v-btn
            >
            <v-btn class="text-capitalize font-light" size="small" prepend-icon="mdi-twitter" variant="outlined"
              >Twitter</v-btn
            >
            <v-btn class="text-capitalize font-light" size="small" prepend-icon="mdi-facebook" variant="outlined"
              >Facebook</v-btn
            >
            <v-btn class="text-capitalize font-light" size="small" prepend-icon="mdi-instagram" variant="outlined"
              >Instagram</v-btn
            >
          </div>

          <div class="flex gap-x-2">
            <div>
              <h3 class="font-light text-sm">Gesamtzahl der Studenten</h3>
              <p class="font-semibold text-sm pt-7">123,456</p>
            </div>
            <div>
              <h3 class="font-light text-sm">Rezensionen</h3>
              <p class="font-semibold text-sm pt-[47px]">123,456</p>
            </div>
          </div>
        </div>
      </article>
      <!-- Extra small screens layout -->

      <section class="flex items-center flex-col md:flex-row gap-0 md:gap-36 lg:gap-x-72 pb-20">
        <div>
          <h3 class="font-bold text-primary text-2xl md:text-[32px] pb-4">Über mich</h3>
          <p class="text-justify text-[18px] leading-[27px]">
            Ich bin Angela, eine Entwicklerin mit einer Leidenschaft für das Unterrichten. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bis zu einem
            gewissen Grad sind unsere Anstrengungen nicht mehr möglich Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bis zu einem gewissen
            Grad ist es uns gelungen, unsere Arbeit so lange wie möglich zu verrichten. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod temporär incididunt ut labore et dolore groß aliqua. Bis zu
            einem gewissen Grad ist es uns gelungen, unsere Arbeit so lange wie möglich zu verrichten. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod temporär incididunt ut labore et dolore groß aliqua.
            Bis zu einem gewissen Grad sind unsere Anstrengungen nicht mehr möglich
          </p>
        </div>
        <div class="md:flex flex-col gap-y-3 hidden">
          <v-btn class="text-capitalize font-light" size="large" prepend-icon="mdi-link" variant="outlined">
            <p class="text-[18px]">Website Link</p>
          </v-btn>
          <v-btn class="text-capitalize font-light" size="large" prepend-icon="mdi-twitter" variant="outlined">
            <p class="text-[18px]">Twitter</p>
          </v-btn>
          <v-btn class="text-capitalize font-light" size="large" prepend-icon="mdi-facebook" variant="outlined">
            <p class="text-[18px]">Facebook</p>
          </v-btn>
          <v-btn class="text-capitalize font-light" size="large" prepend-icon="mdi-instagram" variant="outlined">
            <p class="text-[18px]">Instagram</p>
          </v-btn>
        </div>
      </section>
    </section>
  </section>

  <section
    :class="{
      'px-4 lg:px-0 radial-bg-2': !isMediumScreen,
      'px-4 lg:px-0 bg-black': isMediumScreen,
    }"
  >
    <section class="container px-0">
      <header>
        <div>
          <h3 class="font-bold text-primary text-[32px] pb-4">Meine Kurse</h3>
          <p class="w-full md:w-3/4 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq
          </p>
        </div>
        <div class="pt-6 md:pt-0 text-end">
          <NuxtLink to="/" class="underline underline-offset-2 text-primary text-nowrap text-[18px]"
            >Alle ansehen</NuxtLink
          >
        </div>
      </header>

      <!-- Large screens start -->
      <section
        class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-8 pt-12 pb-24"
      >
        <article v-for="course in courses" :key="course.id" class="flex flex-col">
          <v-card class="pa-5 bg-white flex-grow">
            <v-img class="mb-5 w-full lg:h-36 xl:h-64" cover :src="course.image"></v-img>
            <v-chip v-if="course.bestseller" class="bg-primary mb-2 card-bg px-6">
              <span class="text-[12px]">Bestseller</span>
            </v-chip>
            <v-card-title class="pa-0 text-[#064263] font-weight-bold text-wrap">
              <p class="text-base">{{ course.courseName }}</p>
            </v-card-title>
            <v-card-subtitle class="pa-0 pt-4">
              <p class="text-[12px]">{{ course.author }}</p>
            </v-card-subtitle>

            <div class="flex items-center space-x-0 pt-3">
              <p class="pr-1">{{ course.rating }}</p>
              <v-rating class="pa-0" :length="5" :size="28" :model-value="course.rating" active-color="#D88B43" />
              <p class="pl-1 text-[12px]">({{ course.totalRatings }})</p>
            </div>
            <div>
              <p class="text-[#111010] font-weight-bold text-sm pt-3">
                {{ course.price - course.discount }}€
                <span class="text-gray-400 line-through pl-2 text-[12px]">{{ course.price }}€</span>
              </p>
            </div>
          </v-card>
        </article>
      </section>
      <!-- Large screens end -->

      <!-- Medium and small screens start -->
      <section class="scroll-container block md:hidden py-10">
        <div class="gap-5 scroll-content">
          <article v-for="course in courses" :key="course.id" class="flex flex-col">
            <v-card class="pa-4 bg-white flex-grow">
              <v-img class="mb-5 w-full h-32 xl:h-56" cover :src="course.image"></v-img>
              <v-chip v-if="course.bestseller" class="bg-primary mb-2 card-bg px-4" rounded="0">Bestseller</v-chip>
              <v-card-title class="pa-0 text-[#064263] font-weight-bold text-wrap">
                <h2 class="text-base">{{ course.courseName }}</h2>
              </v-card-title>
              <v-card-subtitle class="pa-0 pt-4">{{ course.author }}</v-card-subtitle>

              <div class="flex items-center space-x-0 pt-3">
                <p class="pr-1">{{ course.rating }}</p>
                <v-rating class="pa-0" :length="5" :size="28" :model-value="course.rating" active-color="#D88B43" />
                <p class="pl-1">({{ course.totalRatings }})</p>
              </div>
              <div>
                <p class="text-[#111010] font-weight-bold text-sm pt-3">
                  {{ course.price - course.discount }}€
                  <span class="text-gray-400 line-through pl-2">{{ course.price }}€</span>
                </p>
              </div>
            </v-card>
          </article>
        </div>
      </section>
      <!-- Medium and small screens end -->
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const router = useRoute();

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

const courses = ref([
  {
    id: 1,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: true,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: false,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 3,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: false,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: false,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: false,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: false,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]);

useSeoMeta({
  title: "Coach - " + router.params.id,
  description: "Coach" + router.params.id,
  image: "/logo.svg",
  url: "https://bsk-frontend.vercel.app/coach/" + router.params.id,
});
</script>

<style scoped>
.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-content {
  display: inline-flex;
}

.radial-bg-1 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.radial-bg-2 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 100%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 0%, rgb(153, 27, 27) 0, transparent 32%);
}

.v-chip {
  border-radius: 0;
}

.card-bg {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}
</style>
