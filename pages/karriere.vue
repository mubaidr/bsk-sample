<template>
  <section
    :class="{
      'hero-bg py-36 md:py-0 px-4 lg:px-0': !isMediumScreen,
      'bg-black py-36 md:py-0 px-4 lg:px-0': isMediumScreen,
    }"
  >
    <!-- Desktop & mobile screens -->
    <section class="container grid md:hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[772px] items-center px-0">
      <div>
        <h1 class="text-h3 font-weight-bold pb-10">
          <span class="text-primary">Karriere</span> in Institut für Intelligenz
        </h1>
        <p class="font-weight-light pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptas debitis reprehenderit ut dignissimos
          mollitia, praesentium id ratione recusandae? Quos, aperiam. Facilis doloremque tenetur aliquam. Minus saepe
          odit perferendis aut voluptate? Illum velit nesciunt quibusdam
        </p>

        <div
          class="space-x-3 md:space-y-3 lg:space-y-0 lg:space-x-3 sm:space-x-4 md:space-x-0 text-center text-md-left"
        >
          <v-btn class="text-capitalize font-weight-light" size="x-large" color="primary">Offene Positionen</v-btn>
        </div>
      </div>
      <div>
        <v-img :src="imageLink"></v-img>
      </div>
    </section>

    <!-- Tablet screens -->
    <section class="container hidden md:grid lg:hidden grid-cols-1 py-10 items-center px-0">
      <div>
        <v-img :src="imageLink"></v-img>
      </div>

      <div class="pt-12">
        <h1 class="text-h3 font-weight-bold pb-10">
          <span class="text-primary">Karriere</span> in Institut für Intelligenz
        </h1>
        <p class="font-weight-light pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptas debitis reprehenderit ut dignissimos
          mollitia, praesentium id ratione recusandae? Quos, aperiam. Facilis doloremque tenetur aliquam. Minus saepe
          odit perferendis aut voluptate? Illum velit nesciunt quibusdam
        </p>

        <div class="space-x-3 md:space-y-3 lg:space-y-0 lg:space-x-3 sm:space-x-4 md:space-x-0 text-left">
          <v-btn class="text-capitalize font-weight-light" size="x-large" color="primary">Offene Positionen</v-btn>
        </div>
      </div>
    </section>
  </section>

  <section
    :class="{ 'radial-bg-2 pb-20 px-4 lg:px-0': !isMediumScreen, 'bg-black pb-20 px-4 lg:px-0': isMediumScreen }"
  >
    <section class="container px-0">
      <section class="text-center py-20">
        <h2 class="text-5xl font-medium">Unsere <span class="text-primary">Werte</span></h2>
        <p class="pt-6 w-full lg:w-[612px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </p>
      </section>

      <!-- Desktop & mobile screens -->
      <section class="grid md:hidden lg:grid grid-cols-1 md:grid-cols-2 gap-16">
        <article v-for="value in values" :key="value.id">
          <v-img class="rounded-xl aspect-video" cover :src="value.image"></v-img>
          <h3 class="text-[40px] font-semibold pt-10 pb-7">{{ value.title }}</h3>
          <p class="leading-[30.6px] text-[18px] font-light">{{ value.description }}</p>
        </article>
      </section>

      <!-- Tablet screens -->
      <article
        v-for="(value, index) in values"
        :key="value.id"
        class="hidden lg:hidden md:grid grid-cols-2 items-center gap-6 pb-10"
      >
        <v-img class="rounded-xl h-72" cover :src="value.image"></v-img>
        <div :class="index % 2 === 0 ? 'order-first' : 'order-last'">
          <h3 class="text-2xl font-semibold pb-4">{{ value.title }}</h3>
          <p class="text-sm font-light leading-relaxed">{{ value.description }}</p>
        </div>
      </article>
    </section>
  </section>

  <section class="bg-black pb-20 px-4 lg:px-0">
    <section class="container px-0">
      <section class="text-center py-20">
        <h3 class="font-medium tracking-[-3px] text-5xl">Stellenangebote</h3>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-center">
        <article v-for="jobOpening in jobOpenings" :key="jobOpening.id">
          <h4 class="font-semibold text-2xl pb-2">{{ jobOpening.department }}</h4>
          <ul v-for="(role, roleIndex) in jobOpening.roles" :key="roleIndex">
            <li class="underline underline-offset-2 text-primary text-[18px] pb-2">{{ role.title }}</li>
          </ul>
        </article>
      </section>
    </section>
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

const imageLink = ref(
  "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

const values = ref([
  {
    id: 1,
    title: "Bauen Sie eine Gemeinschaft auf",
    image:
      "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Lauf damit",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Ich liebe dein Handwerk",
    image:
      "https://images.pexels.com/photos/2179205/pexels-photo-2179205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Spielen",
    image:
      "https://images.pexels.com/photos/7792804/pexels-photo-7792804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]);

const jobOpenings = ref([
  {
    id: 1,
    department: "Business Development",
    roles: [
      {
        id: 1,
        title: "Director, Distribution Partnership",
      },
    ],
  },
  {
    id: 2,
    department: "Business Development",
    roles: [
      {
        id: 1,
        title: "Director, Distribution Partnership",
      },
    ],
  },
  {
    id: 3,
    department: "Business Development",
    roles: [
      {
        id: 1,
        title: "Director, Distribution Partnership",
      },
    ],
  },
  {
    id: 4,
    department: "Business Operations",
    roles: [
      {
        id: 1,
        title: "Contracts Manager",
      },
      {
        id: 2,
        title: "Senior Corporate Accountant",
      },
    ],
  },
  {
    id: 5,
    department: "Business Operations",
    roles: [
      {
        id: 1,
        title: "Contracts Manager",
      },
      {
        id: 2,
        title: "Senior Corporate Accountant",
      },
    ],
  },
  {
    id: 6,
    department: "Business Operations",
    roles: [
      {
        id: 1,
        title: "Contracts Manager",
      },
      {
        id: 2,
        title: "Senior Corporate Accountant",
      },
    ],
  },
  {
    id: 7,
    department: "Engineering",
    roles: [
      {
        id: 1,
        title: "Data Scientist - Marketing",
      },
      {
        id: 2,
        title: "Data Scientist - Product",
      },
    ],
  },
  {
    id: 8,
    department: "Engineering",
    roles: [
      {
        id: 1,
        title: "Data Scientist - Marketing",
      },
      {
        id: 2,
        title: "Data Scientist - Product",
      },
    ],
  },
  {
    id: 9,
    department: "Engineering",
    roles: [
      {
        id: 1,
        title: "Data Scientist - Marketing",
      },
      {
        id: 2,
        title: "Data Scientist - Product",
      },
    ],
  },
]);

useSeoMeta({
  title: "Karriere",
  description: "Karriere",
  image: "/logo.svg",
  url: "https://bsk-frontend.vercel.app/karriere",
});
</script>

<style scoped>
.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.radial-bg-2 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 100%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 0%, rgb(153, 27, 27) 0, transparent 32%);
}
</style>
