<template>
  <section>
    <div :class="{ 'about-1': !isMediumScreen, 'bg-black': isMediumScreen }">
      <section class="container px-4 lg:px-0">
        <section class="pt-20">
          <h2 class="text-h5 text-md-h3 font-weight-bold text-center">
            Arbeiten Sie mit über 100 zusammen <br />
            führende Universitäten und Unternehmen
          </h2>
          <p class="text-center md:w-2/3 mx-auto pt-10 leading-8 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </section>

        <section class="hidden lg:grid lg:grid-cols-5 lg:gap-16 xl:gap-28 mt-24 items-center">
          <div v-for="imagePath in imagePaths">
            <img class="filter lg:w-40 xl:w-48 mx-auto" :src="imagePath.image" :key="imagePath.id" />
          </div>
        </section>

        <section class="hidden md:block lg:hidden pt-10">
          <v-img class="w-full filter" src="/tablet-view-icons.png"></v-img>
        </section>

        <section class="block md:hidden pt-10">
          <v-img class="w-full filter" src="/logo-mobile-group.png"></v-img>
        </section>
      </section>
    </div>

    <div
      :class="{
        'about-2 scroll pt-20 lg:pt-44 px-4 md:px-0': !isMediumScreen,
        'bg-black scroll pt-20 lg:pt-44 px-4 md:px-0': isMediumScreen,
      }"
    >
      <div class="container">
        <!-- Medium to Large view -->
        <section class="hidden md:grid md:grid-cols-2 md:gap-4 lg:gap-14 items-center">
          <div class="grid grid-cols-1 md:grid-cols-2 mx-auto gap-y-8 md:gap-y-0 md:gap-x-3">
            <v-img class="mt-12" width="230" height="250" cover :src="stockImage1"></v-img>
            <v-img width="300" height="350" cover :src="stockImage2"></v-img>
          </div>
          <div>
            <span class="text-primary text-base md:text-2xl">Uber uns</span>
            <h3 class="pt-6 font-poppins text-2xl lg:text-4xl font-weight-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing.
            </h3>
            <p class="pt-6 text-sm md:text-[18px] leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur accusantium unde natus voluptatum
              alias repellendus
            </p>
          </div>
        </section>

        <!-- Mobile view -->
        <section class="grid grid-cols-1 md:hidden gap-14 items-center">
          <div>
            <span class="text-primary text-base md:text-2xl">Uber uns</span>
            <h3 class="pt-6 font-poppins text-2xl lg:text-4xl font-weight-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing.
            </h3>
            <p class="pt-6 text-sm md:text-base leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur accusantium unde natus voluptatum
              alias repellendus
            </p>
          </div>

          <div class="grid grid-cols-2 mx-auto gap-y-8 md:gap-y-0">
            <v-img class="mt-20" width="180" height="180" cover :src="stockImage1"></v-img>
            <v-img width="300" height="350" cover :src="stockImage2"></v-img>
          </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 mt-14 gap-y-6 md:gap-y-0">
          <v-img class="md:ml-10" cover :src="stockImage3"></v-img>
          <v-img class="md:ml-10" cover :src="stockImage4"></v-img>
        </section>
      </div>
    </div>

    <div :class="{ 'about-3 py-20': !isMediumScreen, 'bg-black py-36': isMediumScreen }">
      <div class="container px-4 lg:px-0">
        <section class="text-center">
          <h3 class="font-poppins text-2xl md:text-[32px] lg:text-[44px] font-bold pb-10">
            Was ist <span class="text-primary">Intellect Institute?</span>
          </h3>
          <p class="text-base md:text-2xl w-full md:w-3/4 mx-auto tracking-[2%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit harum dolorum explicabo necessitatibus
            mollitia aliquam perferendis consequatur. Magnam animi laborum hic distinctio tempore! Mollitia doloribus
            vel tempore, optio dolore.
          </p>

          <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            <div
              class="h-[400px] relative flex items-center justify-center bg-cover bg-center bg-[url('https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
            >
              <div class="absolute bg-opacity-60 bg-gray-900 w-full h-full"></div>
              <div class="relative z-10 text-center text-white">
                <h1 class="text-[18px] md:text-2xl lg:text-[32px] font-medium mb-4 uppercase font-poppins">
                  FÜR LEHRER
                </h1>
                <v-btn variant="outlined" class="text-capitalize font-weight-light"
                  >Starten Sie noch heute einen Kurs</v-btn
                >
              </div>
            </div>

            <div
              class="h-[400px] relative flex items-center justify-center bg-cover bg-center bg-[url('https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
            >
              <div class="absolute bg-opacity-60 bg-gray-900 w-full h-full"></div>
              <div class="relative z-10 text-center text-white">
                <h1 class="text-[18px] md:text-2xl lg:text-[32px] font-medium mb-4 uppercase font-poppins">
                  FÜR STUDIERENDE
                </h1>
                <v-btn class="text-capitalize font-weight-light" color="primary" variant="flat"
                  >Geben Sie den Zugangscode ein</v-btn
                >
              </div>
            </div>
          </div>
        </section>
      </div>
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

const imagePaths = ref([
  {
    id: 1,
    image: "/itb-logo.png",
  },
  {
    id: 2,
    image: "/harvard-logo.png",
  },
  {
    id: 3,
    image: "/stanford-logo.png",
  },
  {
    id: 4,
    image: "/google-logo.png",
  },
  {
    id: 5,
    image: "/tokopedia-logo.png",
  },
  {
    id: 6,
    image: "/university-of-cambridge-logo.png",
  },
  {
    id: 7,
    image: "/oxford-logo.png",
  },
  {
    id: 8,
    image: "/microsoft-logo.webp",
  },
  {
    id: 9,
    image: "/amazon-logo.png",
  },
  {
    id: 10,
    image: "/samsung-logo.webp",
  },
]);
const stockImage1 = ref(
  "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
const stockImage2 = ref(
  "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
const stockImage3 = ref(
  "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
const stockImage4 = ref(
  "https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
</script>

<style scoped>
.filter {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.about-1 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 100%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 0%, rgb(153, 27, 27) 0, transparent 32%);
}

.about-2 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 0%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.about-3 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 100%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 0%, rgb(153, 27, 27) 0, transparent 32%);
}
</style>
