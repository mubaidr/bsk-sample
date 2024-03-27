<template>
  <section class="bg-black">
    <v-container class="min-h-screen">
      <header class="pt-24 pb-12">
        <NuxtLink to="/">
          <v-img src="/login-logo.svg" width="200" class="mx-auto"></v-img>
        </NuxtLink>
      </header>

      <section class="text-center my-24 flex flex-col">
        <div>
          <v-img src="/check-circle.svg" width="100" class="mx-auto"></v-img>
          <h2 class="pt-2">Erfolgreich registriert</h2>
        </div>
        <NuxtLink to="/accounts" class="text-primary">
          <v-btn class="mt-8 w-96" size="large" color="primary" dark>Anmeldung</v-btn>
        </NuxtLink>
      </section>
    </v-container>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "account",
});
</script>

<style scoped></style>
