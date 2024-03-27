<template>
  <section :class="{ 'pricing-bg py-24 px-4 md:px-0': !isMediumScreen, 'bg-black py-24 px-4 md:px-0': isMediumScreen }">
    <div class="container px-4 lg:px-0">
      <section class="text-center">
        <h2 class="pb-8 text-3xl md:text-4xl lg:text-5xl font-medium">Preisgestaltung</h2>
        <p class="text-gray-100 font-light md:w-2/4 mx-auto">
          Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren. Unbegrenzte
          Benutzer kostenlos.
        </p>
      </section>

      <!-- Medium to Large view start -->
      <section class="mt-28 hidden lg:grid grid-cols-1 md:grid-cols-3 gap-5">
        <v-card class="bg-white pa-5 rounded-xl md:mb-10">
          <v-card-item>
            <v-card-title class="title">
              <h2 class="text-[36px]">Einfach</h2>
            </v-card-title>
          </v-card-item>

          <v-card-text>
            <p class="text-gray-600 pt-1 text-base">
              Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-
              Daten und Leistungskennzahlen.
            </p>
            <p class="text-3xl font-medium my-4">
              Frei <span class="text-sm font-light">* Keine Krediktarte benotigt</span>
            </p>
            <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>

            <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
              <v-icon color="black">mdi-check</v-icon>
              <v-list-item>{{ listItem.title }}</v-list-item>
            </ul>
          </v-card-text>

          <v-card-actions class="w-full mt-12">
            <v-btn class="bg-primary w-full text-capitalize" size="large">
              <p class="text-[18px]">Loslegen</p>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="bg-gradient pa-5 rounded-xl md:-mt-12">
          <v-card-item>
            <v-card-title class="title font-weight-medium pb-2">
              <h2 class="text-[36px]">Prämie</h2>
            </v-card-title>
          </v-card-item>

          <v-card-text>
            <p class="text-gray-100 pt-1 text-base">
              Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-
              Daten und Leistungskennzahlen.
            </p>
            <p class="text-3xl font-medium my-4">$49 <span class="text-sm font-light">/ Monat</span></p>
            <v-divider class="border-opacity-100 mb-5" :thickness="2"></v-divider>
            <p class="mb-3">Alles aus dem kostenlosen Plan plus:</p>
            <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
              <v-icon color="white">mdi-check</v-icon>
              <v-list-item>{{ listItem.title }}</v-list-item>
            </ul>
          </v-card-text>

          <v-card-actions class="w-full mt-20">
            <v-btn class="bg-black w-full text-capitalize" size="large">
              <p class="text-[18px]">Loslegen</p>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="bg-white pa-5 rounded-xl md:mb-10">
          <v-card-item>
            <v-card-title class="title font-weight-medium pb-2">
              <h2 class="text-[36px]">Unternehmen</h2>
            </v-card-title>
          </v-card-item>

          <v-card-text>
            <p class="text-gray-600 pt-1 text-base">
              Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-
              Daten und Leistungskennzahlen.
            </p>
            <p class="text-3xl font-medium my-4">$15 <span class="text-sm font-light">/ Monat</span></p>
            <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>
            <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
              <v-icon color="black">mdi-check</v-icon>
              <v-list-item>{{ listItem.title }}</v-list-item>
            </ul>
          </v-card-text>

          <v-card-actions class="w-full mt-12">
            <v-btn class="bg-primary w-full text-capitalize" size="large">
              <p class="text-[18px]">Loslegen</p>
            </v-btn>
          </v-card-actions>
        </v-card>
      </section>
      <!-- Medium to Large view end -->

      <!-- Small view start -->
      <v-carousel
        :height="isMediumScreen ? 650 : 680"
        v-model="selectedItemIndex"
        hide-delimiter-background
        :show-arrows="false"
        :continuous="false"
        class="d-block d-md-none pt-10"
      >
        <v-carousel-item>
          <v-card class="bg-white py-8 px-4 rounded-lg">
            <v-card-item>
              <v-card-title class="title">
                <h2 class="text-2xl">Einfach</h2>
              </v-card-title>
            </v-card-item>

            <v-card-text>
              <p class="text-gray-600 pt-1 text-sm">
                Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie
                Live- Daten und Leistungskennzahlen.
              </p>
              <p class="text-3xl font-medium my-4">
                Frei <span class="text-sm font-light">* Keine Krediktarte benotigt</span>
              </p>
              <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>

              <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                <v-icon color="black">mdi-check</v-icon>
                <v-list-item>{{ listItem.title }}</v-list-item>
              </ul>
            </v-card-text>

            <v-card-actions class="w-full">
              <v-btn class="bg-primary w-full text-capitalize" size="large">
                <p class="text-[18px]">Loslegen</p>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
        <v-carousel-item>
          <v-card class="bg-gradient py-8 px-4 rounded-lg">
            <v-card-item>
              <v-card-title class="title font-weight-medium pb-2">
                <h2 class="text-2xl">Prämie</h2>
              </v-card-title>
            </v-card-item>

            <v-card-text>
              <p class="text-gray-100 pt-1 text-sm">
                Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie
                Live- Daten und Leistungskennzahlen.
              </p>
              <p class="text-3xl font-medium my-4">$49 <span class="text-sm font-light">/ Monat</span></p>
              <v-divider class="border-opacity-100 mb-5" :thickness="2"></v-divider>
              <p class="mb-3">Alles aus dem kostenlosen Plan plus:</p>
              <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                <v-icon color="white">mdi-check</v-icon>
                <v-list-item>{{ listItem.title }}</v-list-item>
              </ul>
            </v-card-text>

            <v-card-actions class="w-full">
              <v-btn class="bg-black w-full text-capitalize" size="large">
                <p class="text-[18px]">Loslegen</p>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
        <v-carousel-item>
          <v-card class="bg-white py-8 px-4 rounded-lg">
            <v-card-item>
              <v-card-title class="title font-weight-medium pb-2">
                <h2 class="text-2xl">Unternehmen</h2>
              </v-card-title>
            </v-card-item>

            <v-card-text>
              <p class="text-gray-600 pt-1 text-sm">
                Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie
                Live- Daten und Leistungskennzahlen.
              </p>
              <p class="text-3xl font-medium my-4">$15 <span class="text-sm font-light">/ month</span></p>
              <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>
              <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                <v-icon color="black">mdi-check</v-icon>
                <v-list-item>{{ listItem.title }}</v-list-item>
              </ul>
            </v-card-text>

            <v-card-actions class="w-full">
              <v-btn class="bg-primary w-full text-capitalize" size="large">
                <p class="text-[18px]">Loslegen</p>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>

      <!-- Small view end -->
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isMediumScreen = ref(false);

const selectedItemIndex = ref(1);

const handleResize = () => {
  isMediumScreen.value = window.innerWidth >= 640 && window.innerWidth < 1025;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const carouselItems = ref([
  [
    {
      title: "Einfach",
      description:
        "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
      price: "Frei",
      listItems: ["Keine Kreditkarte benötigt"],
    },
    {
      title: "Prämie",
      description:
        "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
      price: "$49 / Monat",
      listItems: ["Alles aus dem kostenlosen Plan plus:"],
    },
    {
      title: "Unternehmen",
      description:
        "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
      price: "$15 / Monat",
      listItems: [],
    },
  ],
]);

const listItems = ref([
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
  },
]);
</script>

<style scoped>
.bg-gradient {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}

.title {
  font-weight: 600;
}

.pa-5 {
  padding: 2.5rem !important;
}

.pricing-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 0%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 55%, rgb(153, 27, 27) 0, transparent 32%);
}
</style>
