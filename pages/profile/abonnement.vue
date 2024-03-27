<template>
  <section :class="{ 'hero-bg py-20 px-4 lg:px-0': !isMediumScreen, 'bg-black py-20 px-4 lg:px-0': isMediumScreen }">
    <section class="container px-0 pt-14 pt-lg-0">
      <div class="md:grid md:grid-cols-12 md:gap-5">
        <!-- Left column start -->
        <section class="hidden md:block md:col-span-3 md:border border-gray-500 text-center pt-10">
          <ProfileSidebar name="Danya Gutierrez" />
        </section>
        <!-- Left column end -->

        <section class="flex items-center px-5 px-lg-14 pt-16 md:hidden">
          <v-avatar image="/sample-avatar.png" size="100"></v-avatar>
          <div class="pl-6">
            <h1 class="font-semibold text-xl pt-3 pb-4">Danya Gutierrez</h1>
            <span class="flex items-center"
              >Zeige Profil <v-btn variant="text" class="ml-10"><v-icon>mdi-chevron-right</v-icon></v-btn></span
            >
          </div>
        </section>

        <!-- Right column start -->
        <section class="col-span-9 md:border border-gray-500 px-6 px-lg-14 py-7">
          <div class="pt-3">
            <div class="pb-10">
              <h2 class="font-bold text-2xl">Abonnement verwalten</h2>
              <p class="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, odit.</p>
            </div>

            <div class="hidden md:block">
              <v-card class="bg-gradient pa-5 rounded-xl lg:w-1/2 lg:mx-auto">
                <v-card-item>
                  <v-card-title class="title font-weight-medium pb-2">Pramie</v-card-title>
                </v-card-item>

                <v-card-text>
                  <p class="text-gray-100 pt-1">
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

                <v-card-actions>
                  <v-btn class="bg-black w-full text-capitalize" size="large">Abonnement beenden</v-btn>
                </v-card-actions>
              </v-card>
            </div>

            <div class="gap-y-14 hidden md:grid grid-cols-1 lg:grid-cols-2 lg:gap-5 py-12">
              <v-card class="bg-white pa-5 rounded-xl">
                <v-card-item>
                  <v-card-title class="title">Einfach</v-card-title>
                </v-card-item>

                <v-card-text>
                  <p class="text-gray-600 pt-1">
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

                <v-card-actions>
                  <v-btn class="bg-primary w-full text-capitalize" size="large">Aktualisieren</v-btn>
                </v-card-actions>
              </v-card>

              <v-card class="bg-white pa-5 rounded-xl">
                <v-card-item>
                  <v-card-title class="title font-weight-medium">Unternehmen</v-card-title>
                </v-card-item>

                <v-card-text>
                  <p class="text-gray-600 pt-1">
                    Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie
                    Live- Daten und Leistungskennzahlen.
                  </p>
                  <p class="text-3xl font-medium my-4">$15 <span class="text-sm font-light">/ Monat</span></p>
                  <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>
                  <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                    <v-icon color="black">mdi-check</v-icon>
                    <v-list-item>{{ listItem.title }}</v-list-item>
                  </ul>
                </v-card-text>

                <v-card-actions>
                  <v-btn class="bg-primary w-full text-capitalize" size="large">Aktualisieren</v-btn>
                </v-card-actions>
              </v-card>
            </div>

            <!-- Small view start -->
            <v-carousel
              :height="isMediumScreen ? 650 : 680"
              v-model="selectedItemIndex"
              hide-delimiter-background
              :show-arrows="false"
              :continuous="false"
              class="block md:hidden pt-10"
            >
              <v-carousel-item>
                <v-card class="bg-white py-8 px-4 rounded-lg">
                  <v-card-item>
                    <v-card-title class="title">Einfach</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <p class="text-gray-600 pt-1">
                      Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren
                      Sie Live- Daten und Leistungskennzahlen.
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
                    <v-btn class="bg-primary w-full text-capitalize" size="large">Loslegen</v-btn>
                  </v-card-actions>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card class="bg-gradient py-8 px-4 rounded-lg">
                  <v-card-item>
                    <v-card-title class="title font-weight-medium pb-2">Prämie</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <p class="text-gray-100 pt-1">
                      Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren
                      Sie Live- Daten und Leistungskennzahlen.
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
                    <v-btn class="bg-black w-full text-capitalize" size="large">Loslegen</v-btn>
                  </v-card-actions>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card class="bg-white py-8 px-4 rounded-lg">
                  <v-card-item>
                    <v-card-title class="title font-weight-medium pb-2">Unternehmen</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <p class="text-gray-600 pt-1">
                      Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren
                      Sie Live- Daten und Leistungskennzahlen.
                    </p>
                    <p class="text-3xl font-medium my-4">$15 <span class="text-sm font-light">/ Monat</span></p>
                    <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>
                    <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                      <v-icon color="black">mdi-check</v-icon>
                      <v-list-item>{{ listItem.title }}</v-list-item>
                    </ul>
                  </v-card-text>

                  <v-card-actions class="w-full">
                    <v-btn class="bg-primary w-full text-capitalize" size="large">Loslegen</v-btn>
                  </v-card-actions>
                </v-card>
              </v-carousel-item>
            </v-carousel>
            <!-- Small view end -->
          </div>
        </section>
        <!-- Right column end -->
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "profile",
});

const isMediumScreen = ref(false);

const selectedItemIndex = ref(1);

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
.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 130% 20%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at -20% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.bg-gradient {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}

.title {
  font-size: 1.8rem;
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
