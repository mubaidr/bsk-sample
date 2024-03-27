<template>
  <section :class="{ 'radial-bg-1': !isMediumScreen, 'bg-black': isMediumScreen }">
    <div class="container pt-16 lg:pt-0">
      <div class="px-4 lg:px-0">
        <div class="block lg:hidden">
          <p class="text-primary text-base">Über uns</p>
          <h2 class="font-[600] text-[32px]">Lorem ipsum is simply dummy text of the printing.</h2>
          <p class="font-[400] text-[18px] leading-[31.5px] pt-7 pr-24 md:pb-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
          </p>
        </div>
        <v-img class="w-full pt-14 lg:pt-20 pb-12" src="/about/about-img.jpg"></v-img>
      </div>
    </div>
  </section>

  <section :class="{ 'radial-bg-2 pb-20': !isMediumScreen, 'bg-black pb-20': isMediumScreen }">
    <div class="container grid grid-cols-1 lg:grid-cols-2 lg:space-x-28 px-4 lg:px-0">
      <div class="d-none d-lg-block">
        <p class="text-primary text-[25px] font-medium">Über uns</p>
        <h2 class="font-[600] text-[40px] leading-[68px]">Lorem ipsum is simply dummy text of the printing.</h2>
        <p class="font-[400] text-[18px] leading-[31.5px] pt-7 pr-24 pb-8 md:pb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <div class="flex flex-col gap-7">
        <div>
          <h3 class="font-light font-archivo leading-[40px] text-[24px]">
            01. <span class="font-[500]">Lorem ipsum dolor sit amet</span>
          </h3>
          <p class="font-[300] font-poppins leading-[28px] pt-6 md:pl-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
          </p>
        </div>
        <div>
          <h3 class="font-light font-archivo leading-[40px] text-[24px]">
            02. <span class="font-[500]">Lorem ipsum dolor sit amet</span>
          </h3>
          <p class="font-[300] font-poppins leading-[28px] pt-6 md:pl-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
          </p>
        </div>
        <div>
          <h3 class="font-light font-archivo leading-[40px] text-[24px]">
            03. <span class="font-[500]">Lorem ipsum dolor sit amet</span>
          </h3>
          <p class="font-[300] font-poppins leading-[28px] pt-6 md:pl-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
          </p>
        </div>
      </div>
    </div>
  </section>

  <section :class="{ 'radial-bg-3 pb-20': !isMediumScreen, 'bg-black pb-20': isMediumScreen }">
    <div class="container space-y-14">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-14 lg:gap-y-0 items-center px-4 lg:px-0">
        <div class="lg:order-first">
          <v-img
            class="rounded-xl lg:w-[568px] xl:w-full lg:h-[387px] xl:h-full"
            cover
            src="/about/mission.jpg"
          ></v-img>
        </div>
        <div class="lg:order-last">
          <h3 class="font-bold uppercase text-[40px] leading-[68px]">
            Unsere <span class="text-primary">Aufgabe</span>
          </h3>
          <p class="text-[18px] leading-[30.6px] pt-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-14 items-center px-4 lg:px-0">
        <div class="lg:order-last">
          <v-img class="rounded-xl lg:w-[568px] xl:w-full lg:h-[387px] xl:h-full" cover src="/about/vision.jpg"></v-img>
        </div>
        <div class="lg:order-first">
          <h3 class="font-bold uppercase text-[40px] leading-[68px]">
            Unsere <span class="text-primary">Aufgabe</span>
          </h3>
          <p class="text-[18px] leading-[30.6px] pt-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  </section>

  <section :class="{ 'radial-bg-4': !isMediumScreen, 'bg-black': isMediumScreen }">
    <div class="container px-4 md:px-0">
      <h4 class="text-[25px] leading-[37.5px] text-primary font-[400] text-center">Unser Team</h4>
      <p class="font-[600] text-xl md:text-[35px] lg:text-[40px] md:leading-[68px] text-center pt-5 md:pt-0">
        Lorem Ipsum is simply dummy text of the printing.
      </p>
      <section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-12 xl:gap-16 pt-24 pb-12">
        <article v-for="teamMember in teamMembers" :key="teamMember.id">
          <article class="pa-5 text-center card-bg">
            <NuxtLink :to="`/instructor/${teamMember.id}`">
              <v-img class="mb-5 rounded-md" :src="teamMember.image"></v-img>
            </NuxtLink>
            <section class="pa-0">
              <NuxtLink :to="`/instructor/${teamMember.id}`" class="hover:underline hover:underline-offset-4">
                <h5 class="text-2xl font-semibold">{{ teamMember.name }}</h5>
              </NuxtLink>
            </section>
            <p class="text-sm font-normal">{{ teamMember.position }}</p>
            <footer class="pa-0 mt-3 flex justify-center space-x-6 py-3">
              <div class="bg-white rounded-full p-2">
                <v-icon icon="mdi-facebook" size="24"></v-icon>
              </div>
              <div class="bg-white rounded-full p-2">
                <v-icon icon="mdi-linkedin" size="24"></v-icon>
              </div>
              <div class="bg-white rounded-full p-2">
                <v-icon icon="mdi-twitter" size="24"></v-icon>
              </div>
              <div class="bg-white rounded-full p-2">
                <v-icon icon="mdi-instagram" size="24"></v-icon>
              </div>
            </footer>
          </article>
        </article>
      </section>
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

const teamMembers = ref([
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 7,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 8,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
  {
    id: 9,
    name: "John Doe",
    position: "CEO",
    image: "/about/team-member-sample.jpg",
  },
]);

useSeoMeta({
  title: "Über uns",
  description: "Über uns",
  image: "/logo.svg",
  url: "https://bsk-frontend.vercel.app/uberUns",
});
</script>

<style scoped>
.card-bg {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
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

.radial-bg-3 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 0%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.radial-bg-4 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 100%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 0%, rgb(153, 27, 27) 0, transparent 32%);
}
</style>
