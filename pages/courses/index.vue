<template>
  <section
    :class="{
      'hero-bg pt-32 lg:pt-16 pb-20': !isMediumScreen,
      'bg-black pt-32 lg:pt-16 pb-20': isMediumScreen,
    }"
  >
    <section class="px-0 container">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-20 px-4 lg:px-0">
        <section>
          <div>
            <h1 class="font-archivo font-semibold text-3xl w-full lg:text-[32px] lg:w-1/2 leading-snug">
              Bestes Lernen Bildungsplattform <span class="text-primary">in der Welt</span>
            </h1>
            <p class="font-archivo py-7 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax negotium, dicerem impudens, nisi hoc
              institut translatum ad philosophos nostros esset.
            </p>
          </div>

          <div class="w-full mx-auto md:w-3/5 lg:w-full mt-5 flex">
            <v-text-field bg-color="white" variant="solo-filled" rounded="0">
              <template v-slot:prepend-inner>
                <v-icon class="pl-7 pr-5">mdi-magnify</v-icon>
              </template>
              <template v-slot:label>
                <span>Was willst du lernen</span>
              </template>
            </v-text-field>
            <v-btn color="primary" rounded="0" height="56" class="text-capitalize px-10 d-none d-md-block"
              >Kurs suchen</v-btn
            >
            <v-btn color="primary" rounded="0" height="56" class="text-capitalize d-block d-md-none">
              <v-icon icon="mdi-magnify"></v-icon>
            </v-btn>
          </div>
        </section>

        <section>
          <v-img src="/right-img.png" class="mx-auto w-full md:w-9/12 lg:w-full"></v-img>
        </section>
      </div>
    </section>
  </section>

  <section
    :class="{ 'py-16 radial-bg-2 px-4 lg:px-0': !isMediumScreen, 'py-16 bg-black px-4 lg:px-0': isMediumScreen }"
  >
    <section class="container px-0">
      <section>
        <h2 class="font-semibold text-2xl">Lass uns weiter lernen, Rose!</h2>
        <p class="py-5 font-light text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq
        </p>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <v-card class="d-flex flex-column flex-md-row lg:items-center pa-5" rounded="0" color="white">
            <v-img
              src="https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg"
              class="w-full lg:w-[300px] lg:h-[300px]"
              cover
            ></v-img>

            <div class="pt-5 md:pt-0">
              <div class="lg:pb-36">
                <v-card-subtitle class="px-0 px-md-5">React Native: Fortgeschrittenes Konzept</v-card-subtitle>
                <v-card-title class="text-wrap font-weight-bold px-0 px-md-5">
                  <p class="text-base">Lektion 12: Überprüfung von Common Authentifizierungsflüsse</p>
                </v-card-title>
              </div>
              <v-card-subtitle class="md:pt-12 px-0 px-md-5">Vortrag | Noch 12 Minuten übrig</v-card-subtitle>
            </div>
          </v-card>

          <v-card class="d-none d-lg-flex flex-column flex-md-row items-center pa-5" rounded="0" color="white">
            <v-img
              src="https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg"
              class="w-full md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
              cover
            ></v-img>

            <div class="pt-5 md:pt-0">
              <div class="lg:pb-36">
                <v-card-subtitle class="px-0 px-md-5">React Native: Fortgeschrittenes Konzept</v-card-subtitle>
                <v-card-title class="text-wrap font-weight-bold px-0 px-md-5">
                  <p class="text-base">Lektion 12: Überprüfung von Common Authentifizierungsflüsse</p>
                </v-card-title>
              </div>
              <v-card-subtitle class="md:pt-12 px-0 px-md-5">Vortrag | Noch 12 Minuten übrig</v-card-subtitle>
            </div>
          </v-card>
        </section>
      </section>

      <section>
        <article class="bg-[#272727] mt-20 mb-14 py-5 px-10 flex flex-col lg:flex-row items-center gap-5">
          <div>
            <p class="text-sm md:text-[18px] text-center text-lg-left">
              Trainieren Sie 5 oder mehr Personen? Erhalten Sie Ihrem Team Zugriff darauf Intellect Institute Über
              25.000 Top-Kurse.
            </p>
          </div>
          <div class="flex items-center space-x-5 flex-col md:flex-row space-y-3 md:space-y-0">
            <v-btn size="large" variant="flat" class="bg-primary text-capitalize">
              <p class="text-sm md:text-[18px] font-medium">Erhalten Sie Business-Zugang</p>
            </v-btn>
            <v-btn variant="outlined" size="large" class="text-capitalize">
              <p class="text-sm md:text-[18px] font-medium">Zurückweisen</p>
            </v-btn>
          </div>
        </article>
      </section>

      <section class="pt-8">
        <div class="flex items-center flex-wrap gap-4">
          <v-btn size="large" class="btn-bg text-capitalize" rounded="0">Etikett</v-btn>
          <v-btn size="large" class="btn-bg text-capitalize" rounded="0">Etikett</v-btn>
          <v-btn size="large" class="btn-bg text-capitalize" rounded="0">Etikett</v-btn>
          <v-btn size="large" class="btn-bg text-capitalize" rounded="0">Etikett</v-btn>
          <v-btn size="large" class="btn-bg text-capitalize" rounded="0">Etikett</v-btn>
        </div>
      </section>

      <section>
        <div class="md:flex items-center flex-col md:flex-row py-8 md:py-14 gap-6 md:gap-24">
          <div class="flex-1">
            <h3 class="font-archivo font-bold text-2xl lg:text-[32px] pb-2">Veranstaltungen</h3>
            <p class="text-sm md:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div class="flex-2 text-end pt-4 pt-md-0">
            <NuxtLink to="/" class="text-capitalize underline underline-offset-4 text-primary" rounded="0"
              >Alle ansehen</NuxtLink
            >
          </div>
        </div>

        <div class="space-y-5">
          <article class="flex items-center justify-center gap-5">
            <div class="flex items-center gap-3">
              <div class="card-bg px-4 flex flex-col">
                <p
                  class="font-bold h-[152px] text-xl text-center w-1/2 mx-auto md:w-auto md:mx-0 pt-12 pt-lg-10 pt-xl-12"
                >
                  29 DEC
                </p>
              </div>
              <div>
                <v-img
                  src="https://images.pexels.com/photos/4623463/pexels-photo-4623463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="200"
                  height="150"
                  cover
                ></v-img>
              </div>
            </div>

            <div class="hidden md:block">
              <h4 class="font-semibold pb-2 text-xl">Live Q&A - Lorem Ipsum</h4>
              <p class="font-archivo font-light w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div class="hidden md:block">
              <v-btn size="large" class="bg-primary">Sicht</v-btn>
            </div>
          </article>

          <article class="flex items-center justify-center gap-5">
            <div class="flex items-center gap-3">
              <div class="card-bg px-4 flex flex-col">
                <p
                  class="font-bold h-[152px] text-xl text-center w-1/2 mx-auto md:w-auto md:mx-0 pt-12 pt-lg-10 pt-xl-12"
                >
                  29 DEC
                </p>
              </div>
              <div>
                <v-img
                  src="https://images.pexels.com/photos/4623463/pexels-photo-4623463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="200"
                  height="150"
                  cover
                ></v-img>
              </div>
            </div>

            <div class="hidden md:block">
              <h4 class="font-semibold pb-2 text-xl">Live Q&A - Lorem Ipsum</h4>
              <p class="font-archivo font-light w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div class="hidden md:block">
              <v-btn size="large" class="bg-primary">Sicht</v-btn>
            </div>
          </article>

          <article class="flex items-center justify-center gap-5">
            <div class="flex items-center gap-3">
              <div class="card-bg px-4 flex flex-col">
                <p
                  class="font-bold h-[152px] text-xl text-center w-1/2 mx-auto md:w-auto md:mx-0 pt-12 pt-lg-10 pt-xl-12"
                >
                  29 DEC
                </p>
              </div>
              <div>
                <v-img
                  src="https://images.pexels.com/photos/4623463/pexels-photo-4623463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="200"
                  height="150"
                  cover
                ></v-img>
              </div>
            </div>

            <div class="hidden md:block">
              <h4 class="font-semibold pb-2 text-xl">Live Q&A - Lorem Ipsum</h4>
              <p class="font-archivo font-light w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div class="hidden md:block">
              <v-btn size="large" class="bg-primary">Sicht</v-btn>
            </div>
          </article>
        </div>
      </section>
    </section>
  </section>

  <section :class="{ 'radial-bg-3 px-4 lg:px-0': !isMediumScreen, 'bg-black px-4 lg:px-0': isMediumScreen }">
    <section class="container px-0">
      <section>
        <div class="lg:flex items-center flex-col md:flex-row pt-14 gap-6 md:gap-24">
          <div class="flex-1">
            <h3 class="font-archivo font-bold text-3xl pb-2">Empfehlungen</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi</p>
          </div>
          <div class="flex-2 text-end pt-2">
            <NuxtLink to="/" class="text-capitalize underline underline-offset-4 text-primary" rounded="0"
              >Alle ansehen</NuxtLink
            >
          </div>
        </div>

        <section
          class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-x-16 lg:gap-y-8 xl:gap-10 pt-12 pb-24"
        >
          <article v-for="course in courses" :key="course.id" class="flex flex-col">
            <v-card class="pa-5 bg-white flex-grow">
              <v-img class="mb-5 w-full h-32 xl:h-56" cover :src="course.image"></v-img>
              <v-chip v-if="course.bestseller" class="bg-primary mb-2 card-bg px-6" rounded="0">Bestseller</v-chip>
              <v-card-title class="pa-0 text-[#064263] font-weight-bold text-wrap">
                {{ course.courseName }}
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
        </section>

        <section class="scroll-container block md:hidden">
          <div class="gap-5 mt-12 mb-24 scroll-content">
            <article v-for="course in courses" :key="course.id" class="flex flex-col">
              <v-card class="pa-5 bg-white flex-grow">
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
      </section>
    </section>
  </section>

  <section :class="{ 'radial-bg-4 px-4 lg:px-0': !isMediumScreen, 'bg-black px-4 lg:px-0': isMediumScreen }">
    <section class="container px-0">
      <section>
        <div class="lg:flex items-center flex-col md:flex-row pt-14 gap-6 md:gap-24">
          <div class="flex-1">
            <h3 class="font-archivo font-bold text-3xl pb-2">Beliebt</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi</p>
          </div>
          <div class="flex-2 text-end pt-2">
            <NuxtLink to="/" class="text-capitalize underline underline-offset-4 text-primary" rounded="0"
              >Alle ansehen</NuxtLink
            >
          </div>
        </div>

        <section
          class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-x-16 lg:gap-y-8 xl:gap-10 pt-12 pb-24"
        >
          <article v-for="course in courses" :key="course.id" class="flex flex-col">
            <v-card class="pa-5 bg-white flex-grow">
              <v-img class="mb-5 w-full h-32 xl:h-56" cover :src="course.image"></v-img>
              <v-chip v-if="course.bestseller" class="bg-primary mb-2 card-bg px-6" rounded="0">Bestseller</v-chip>
              <v-card-title class="pa-0 text-[#064263] font-weight-bold text-wrap">
                {{ course.courseName }}
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
        </section>

        <section class="scroll-container block md:hidden pb-20 pt-10">
          <div class="gap-5 scroll-content">
            <article v-for="course in courses" :key="course.id" class="flex flex-col">
              <v-card class="pa-5 bg-white flex-grow">
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
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "course",
});

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
</script>

<style scoped>
.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-content {
  display: inline-flex;
}

.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.btn-bg {
  background: #450a0a !important;
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

.card-bg {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}
</style>
