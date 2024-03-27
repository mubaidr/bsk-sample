<template>
  <nav class="py-5 bg-black px-4">
    <div class="container d-flex justify-space-between align-center">
      <!-- Tablet view icon -->
      <div class="hidden md:flex lg:hidden">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              @click="isClicked = !isClicked"
              size="30"
              role="button"
              >{{ isClicked ? "mdi-close" : "mdi-menu" }}</v-icon
            >
          </template>

          <v-list :width="150" :rounded="0" class="bg-black">
            <v-list-item
              v-for="navLinkMobile in navLinksMobile"
              :key="navLinkMobile.id"
              class="hover:bg-primary"
            >
              <NuxtLink
                :to="navLinkMobile.link"
                class="text-capitalize"
                @click="isClicked = false"
              >
                <v-list-item-title>{{ navLinkMobile.name }}</v-list-item-title>
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- Tablet view icon -->

      <!-- Large to Extra Large view logo -->
      <nav class="hidden lg:block">
        <NuxtLink to="/">
          <v-img src="/logo.svg" :width="80" :height="90" cover></v-img>
        </NuxtLink>
      </nav>
      <!-- Large to Extra Large view logo -->

      <!-- Small to tablet view logo -->
      <nav class="block lg:hidden">
        <NuxtLink to="/">
          <v-img src="/logo.svg" :width="42" :height="46.86" cover></v-img>
        </NuxtLink>
      </nav>
      <!-- Small to tablet view logo -->

      <ul class="hidden lg:flex">
        <li v-for="navLink in navLinks" :key="navLink.id">
          <NuxtLink
            :to="navLink.link"
            class="text-capitalize text-lg font-weight-regular mx-5 hover:text-primary transition duration-200"
            >{{ navLink.name }}</NuxtLink
          >
        </li>
      </ul>

      <div class="hidden lg:flex space-x-4">
        <NuxtLink to="/instructor" class="max-h-96"
          ><v-btn
            variant="text"
            :ripple="false"
            class="text-capitalize font-weight-medium"
          >
            <p class="text-primary underline underline-offset-4">Instructor</p>
          </v-btn>
        </NuxtLink>
        <NuxtLink to="/accounts" class="max-h-96"
          ><v-btn variant="outlined" class="text-capitalize font-weight-medium"
            >Anmeldung</v-btn
          >
        </NuxtLink>
        <NuxtLink to="/accounts/registrierung">
          <v-btn class="text-capitalize font-weight-medium" color="primary"
            >Registrierung</v-btn
          >
        </NuxtLink>
      </div>

      <!-- Small view icon -->
      <div class="flex md:hidden">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              @click="isClicked = !isClicked"
              size="30"
              role="button"
              >{{ isClicked ? "mdi-close" : "mdi-menu" }}</v-icon
            >
          </template>
        </v-menu>
      </div>
      <!-- Small view icon -->

      <div class="hidden md:block lg:hidden">
        <v-icon>mdi-account-circle</v-icon>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isClicked = ref(false);

const navLinks = ref([
  { id: 1, name: "Heim", link: "/" },
  { id: 2, name: "Über uns", link: "/uberUns" },
  { id: 3, name: "Preise", link: "/preise" },
]);

const navLinksMobile = ref([
  { id: 1, name: "Heim", link: "/" },
  { id: 2, name: "Über uns", link: "/uberUns" },
  { id: 3, name: "Preise", link: "/preise" },
  { id: 4, name: "Anmeldung", link: "/accounts" },
  { id: 5, name: "Registrierung", link: "/accounts/registrierung" },
  { id: 6, name: "Instructor", link: "/instructor" },
]);
</script>

<style scoped>
.v-btn--size-default {
  --v-btn-size: 16px;
  --v-btn-height: 0;
  font-size: var(--v-btn-size);
  min-width: 64px;
  padding: 10px 24px;
}
</style>
