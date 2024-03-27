<template>
  <section
    :class="{ 'px-4 pb-14 lg:px-0 radial-bg-1': !isMediumScreen, 'px-4 pb-14 lg:px-0 bg-black': isMediumScreen }"
  >
    <section class="container px-0">
      <header class="text-center pt-8">
        <span class="text-primary">FAQ</span>
        <h2 class="text-[48px] tracking-[-3px] font-medium">Fragen Sie uns alles</h2>
        <p class="font-light leading-[25.6px] pt-4">Have any questions? We're here to assist you.</p>

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
      </header>

      <v-window v-model="onboarding">
        <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[25px] mt-14 mb-12">
            <article v-for="faq in faqs" :key="faq.id">
              <v-card class="bg-white rounded-xl card">
                <p class="font-bold text-primary pt-2 pb-3">Was sie sagen</p>
                <v-card-text class="pa-0 mt-3 comment">"{{ faq.comment }}"</v-card-text>
                <div class="flex items-center pt-6 space-x-4">
                  <v-avatar :image="faq.avatar" size="80"></v-avatar>
                  <div class="space-y-[12px]">
                    <v-card-subtitle class="pa-0 subtitle">{{ faq.position }}</v-card-subtitle>
                    <v-card-title class="pa-0 text-[24px] title">{{ faq.name }}</v-card-title>
                  </div>
                </div>
              </v-card>
            </article>
          </section>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-center justify-md-end">
        <v-btn variant="outlined" icon="mdi-chevron-left" width="48" height="48" @click="prev"></v-btn>
        <v-btn variant="outlined" icon="mdi-chevron-right" width="48" height="48" @click="next"></v-btn>
      </v-card-actions>

      <article
        class="flex flex-col md:flex-row items-start md:items-center justify-between bg-white rounded-lg p-6 mt-8 space-y-5 md:space-y-0 space-x-0 md:space-x-5"
      >
        <div>
          <h3 class="font-semibold pb-2 text-lg">Sie haben noch Fragen?</h3>
          <p>Sie können die Antwort, die Sie suchen, nicht finden? Bitte chatten Sie mit unserem freundlichen Team.</p>
        </div>
        <div>
          <v-btn color="primary" class="text-capitalize" rounded="lg" size="x-large">In Kontakt kommen</v-btn>
        </div>
      </article>
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

const length = ref(3);
let onboarding = ref(1);

const next = () => {
  onboarding.value = onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
};

const prev = () => {
  onboarding.value = onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
};

useSeoMeta({
  title: "FAQ",
  description: "FAQ",
  image: "/logo.svg",
  url: "https://bsk-frontend.vercel.app/faq",
});

const faqs = ref([
  {
    id: 1,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 2,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 3,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 4,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 5,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 6,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 7,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 8,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
  {
    id: 9,
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/about/team-member-sample.jpg",
    comment:
      "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
  },
]);
</script>

<style scoped>
.card {
  padding: 30px;
}

.title {
  font-weight: bold;
}

.subtitle {
  color: black !important;
  font-weight: 400 !important;
}

.comment {
  font-size: 18px;
  line-height: 27px !important;
}

.radial-bg-1 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}
</style>
