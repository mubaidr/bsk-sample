<template>
  <div>
    <v-avatar image="/sample-avatar.png" size="100"></v-avatar>
    <h1 class="font-semibold text-lg lg:text-xl pt-3">{{ ProfileSidebarProps.name }}</h1>
  </div>

  <ul class="py-20 space-y-3 px-3 lg:px-5">
    <li v-for="sidebarLink in sidebarLinks" :key="sidebarLink.id">
      <NuxtLink :to="sidebarLink.to" class="block py-2 hover:profile-sidebar-btn">{{ sidebarLink.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const ProfileSidebarProps = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
});

const sidebarLinks = ref([
  {
    id: 1,
    title: "Profile",
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
</script>

<style scoped>
.router-link-active {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}
</style>
