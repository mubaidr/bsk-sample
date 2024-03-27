<template>
  <nav app fixed class="px-4 py-5 hidden d-none d-lg-block bg-black">
    <section class="container pa-0 d-flex justify-space-between align-center">
      <div>
        <NuxtLink to="/">
          <v-img src="/logo.svg" :width="45" :height="50" cover></v-img>
        </NuxtLink>
      </div>

      <ul class="flex">
        <li v-for="navLink in navLinks" :key="navLink.id">
          <NuxtLink
            :to="navLink.link"
            class="text-capitalize font-weight-light mx-5 hover:text-primary transition duration-200"
            >{{ navLink.name }}</NuxtLink
          >
        </li>
      </ul>

      <div class="flex">
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="text-capitalize" variant="text" append-icon="mdi-chevron-down">
              <v-icon color="primary mr-3">mdi-account</v-icon>
              Danya G.
            </v-btn>
          </template>

          <v-list class="pa-2">
            <v-list-item-title>
              <v-list-item-title class="mb-3">
                <NuxtLink to="/profile" exact-active-class="bg-none">
                  <v-btn variant="text" class="text-capitalize w-full" append-icon="mdi-cog-outline"
                    >Profile Settings</v-btn
                  >
                </NuxtLink>
              </v-list-item-title>
              <v-list-item-title>
                <NuxtLink to="/accounts">
                  <v-btn variant="text" class="text-capitalize w-full" append-icon="mdi-logout">Log Out</v-btn>
                </NuxtLink>
              </v-list-item-title>
            </v-list-item-title>
          </v-list>
        </v-menu>
      </div>
    </section>
  </nav>

  <!-- Mobile navbar start -->
  <header class="bg-black px-4 lg:px-0 d-lg-none fixed inset-x-0 z-50">
    <v-container class="px-0 flex justify-between items-center">
      <div @click="toggleMenu">
        <v-icon size="30" color="white">{{ !menuOpen ? "mdi-menu" : "mdi-close" }}</v-icon>
      </div>
      <div>
        <v-img src="/logo.svg" :width="50" cover></v-img>
      </div>
      <div>
        <v-icon>mdi-account-circle-outline</v-icon>
      </div>
    </v-container>
  </header>

  <nav class="px-4 hero-bg nav-menu z-40 pt-16" :class="{ 'menu-open': menuOpen }">
    <section class="flex items-center pt-20 d-lg-none">
      <v-avatar image="/sample-avatar.png" size="90"></v-avatar>
      <div class="pl-6">
        <h1 class="font-semibold text-lg pt-3 pb-2">Danya Gutierrez</h1>
        <span class="flex items-center text-sm"
          >Zeige Profil <v-btn variant="text" class="ml-10"><v-icon>mdi-chevron-right</v-icon></v-btn></span
        >
      </div>
    </section>

    <ul class="py-20 space-y-3 text-center">
      <li v-for="sidebarLink in sidebarLinks" :key="sidebarLink.id" @click="toggleMenu">
        <NuxtLink :to="sidebarLink.to" class="block py-2 hover:profile-sidebar-btn">{{ sidebarLink.title }}</NuxtLink>
      </li>
    </ul>

    <div class="w-full pb-20">
      <v-btn variant="outlined" class="text-capitalize w-full" @click="toggleMenu">
        <NuxtLink to="/accounts">Ausloggen</NuxtLink>
      </v-btn>
    </div>
  </nav>
  <!-- Mobile navbar end -->
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const navLinks = ref([
  { id: 1, name: "Heim", link: "/" },
  { id: 2, name: "Über uns", link: "/uberUns" },
  { id: 3, name: "Preise", link: "/preise" },
]);

const sidebarLinks = ref([
  {
    id: 1,
    title: "Profil",
    to: "/profile",
  },
  {
    id: 2,
    title: "Konto Sicherheit",
    to: "/profile/kontoSicherheit",
  },
  {
    id: 3,
    title: "Abonnement",
    to: "/profile/abonnement",
  },

  {
    id: 4,
    title: "Bezahlverfahren",
    to: "/profile/bezahlverfahren",
  },
  {
    id: 5,
    title: "Konto schließen",
    to: "/profile/kontoSchlieben",
  },
]);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.classList.toggle("menu-open", menuOpen.value);
};
</script>

<style scoped>
.router-link-exact-active {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}

.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 130% 30%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at -20% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.nav-menu {
  position: fixed;
  top: 20;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.menu-open .nav-menu {
  transform: translateX(0);
}
</style>
