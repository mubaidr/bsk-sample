<template>
  <!-- Large screen layout start -->
  <section class="hidden lg:block">
    <div class="relative w-full bg-black">
      <svg
        width="754"
        height="359"
        class="absolute top-0 right-0 z-0"
        viewBox="0 0 754 359"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M224.28 69.6604C105.944 76.0294 25.4533 25.8739 0 0L754 1.74151V359H669.786C409.028 340.092 452.924 264.71 507.466 229.382C539.319 204.586 596.917 144.844 572.482 104.242C541.938 53.4893 372.2 61.6992 224.28 69.6604Z"
          fill="#630106"
          fill-opacity="0.4"
        />
      </svg>

      <v-container fluid class="min-h-screen grid grid-cols-2 gap-32 items-center">
        <div class="background-wrapper-left z-10">
          <img src="/left-col-bg.png" class="background-img-left" alt="Left Column Background" />
          <div class="pt-[400px] pl-[200px]">
            <NuxtLink to="/">
              <v-img src="/login-logo.svg" class="w-[40%]"></v-img>
            </NuxtLink>
            <p class="pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>
        </div>

        <div class="z-10 pr-56">
          <header class="font-archivo pb-24">
            <h2 class="font-bold text-[32px]">Willkommen zurück</h2>
            <p class="pt-2">Sie haben noch kein Konto? Melden Sie sich an</p>
          </header>

          <form action="">
            <v-text-field label="Email" variant="outlined"></v-text-field>
            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              label="Passwort"
              variant="outlined"
              @click:append-inner="visible = !visible"
            ></v-text-field>

            <div class="text-end mb-5">
              <NuxtLink
                to="/accounts/passwortVergessen"
                class="text-sm text-primary hover:underline hover:underline-offset-4"
                >Passwort vergessen</NuxtLink
              >
            </div>

            <v-btn block color="primary" class="text-capitalize" size="large" dark>
              <p class="text-[18px]">Anmeldung</p>
            </v-btn>

            <div class="d-flex items-center py-8">
              <v-divider class="border-opacity-25"></v-divider>
              <p class="px-3">or</p>
              <v-divider class="border-opacity-25"></v-divider>
            </div>

            <div class="space-y-5">
              <v-btn
                block
                prepend-icon="mdi-google"
                variant="outlined"
                class="text-capitalize social-btn"
                size="large"
                dark
                >Continue with Google</v-btn
              >
              <v-btn
                block
                prepend-icon="mdi-apple"
                variant="outlined"
                class="text-capitalize social-btn"
                size="large"
                dark
                >Continue with Apple</v-btn
              >
            </div>
          </form>
        </div>
      </v-container>
    </div>
  </section>
  <!-- Large screen layout end -->

  <!-- Small screen layout start -->
  <section class="block lg:hidden">
    <Navbar />
    <section
      :class="[
        !toggleLoginMenu
          ? `bg-[url('/login-radial-bg.png')] bg-cover bg-no-repeat min-h-screen px-6 flex flex-col items-center justify-around`
          : 'd-none',
      ]"
    >
      <div>
        <v-img src="/login-logo.svg" width="250" class="mx-auto"></v-img>
      </div>
      <div class="w-full">
        <v-btn block color="primary" class="text-capitalize w-full" size="x-large" @click="toggleLoginMenuDisplay"
          >Loslegen</v-btn
        >
      </div>
    </section>

    <section
      :class="[toggleLoginMenu ? `bg-[url('/login-radial-bg.png')] bg-cover bg-no-repeat min-h-screen px-6` : 'd-none']"
    >
      <div class="container flex items-center justify-between py-16">
        <v-icon color="primary" size="40" @click="toggleLoginMenuDisplay">mdi-chevron-left</v-icon>
        <h2 class="text-xl md:text-2xl font-semibold">Willkommen zurück</h2>
        <div class="invisible">
          <v-icon color="primary" size="40">mdi-chevron-right</v-icon>
        </div>
      </div>
      <p class="text-center">Sie haben noch kein Konto? <span class="text-primary">Melden Sie sich an</span></p>

      <form action="" class="py-6">
        <v-text-field label="Email" variant="outlined"></v-text-field>
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="Passwort"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <div class="text-right">
          <NuxtLink
            to="/accounts/passwortVergessen"
            class="text-sm text-right text-primary underline underline-offset-4"
            >Passwort vergessen</NuxtLink
          >
        </div>

        <div class="pt-56 pb-14 md:pt-72 md:pb-0">
          <v-btn block color="primary" class="text-capitalize" size="large" dark>Anmeldung</v-btn>

          <div class="d-flex items-center py-8">
            <v-divider class="border-opacity-25"></v-divider>
            <p class="px-3">or</p>
            <v-divider class="border-opacity-25"></v-divider>
          </div>

          <div class="space-y-8">
            <v-btn
              block
              prepend-icon="mdi-google"
              variant="outlined"
              class="text-capitalize social-btn"
              size="large"
              dark
              >Weiter with Google</v-btn
            >
            <v-btn
              block
              prepend-icon="mdi-apple"
              variant="outlined"
              class="text-capitalize social-btn"
              size="large"
              dark
              >Weiter with Apple</v-btn
            >
          </div>
        </div>
      </form>
    </section>
  </section>
  <!-- Small screen layout end -->
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "account",
});

const visible = ref(false);
const toggleLoginMenu = ref(false);

const toggleLoginMenuDisplay = () => {
  toggleLoginMenu.value = !toggleLoginMenu.value;
};
</script>

<style scoped>
.social-btn {
  font-family: Archivo, sans-serif !important;
  font-size: 16px !important;
}

.background-wrapper-left {
  position: relative;
  width: 100%;
  height: 100vh; /* Set height to fill the entire screen */
}

.background-img-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
  z-index: -1; /* Ensure it stays behind the content */
}

.v-container {
  padding: 0 !important;
}

.background-wrapper-left {
  position: relative;
  width: 100%;
  height: 100%; /* Ensures the content takes up the entire height */
}

.background-img-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
  z-index: -1; /* Ensure it stays behind the content */
}
</style>
