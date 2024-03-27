<template>
  <!-- Large screens layout start -->
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
            <h2 class="font-bold text-[32px]">Passwort zurücksetzen</h2>
            <p class="pt-2">Wählen Sie ein neues Passwort für Ihr Konto</p>
          </header>

          <form action="">
            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              label="Dein neues Passwort"
              variant="outlined"
              @click:append-inner="visible = !visible"
            ></v-text-field>
            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              label="Bestätigen Sie Ihr neues Passwort"
              variant="outlined"
              @click:append-inner="visible = !visible"
            ></v-text-field>
            <div>
              <NuxtLink to="/accounts/resetSuccess">
                <v-btn block color="primary" class="text-capitalize" size="large" dark>
                  <p class="text-[18px]">Passwort zurücksetzen</p>
                </v-btn>
              </NuxtLink>
            </div>
            <div class="mt-3">
              <NuxtLink to="/accounts">
                <v-btn block variant="outlined" class="text-capitalize" size="large" dark>
                  <p class="text-[18px]">Zurück zur Anmeldung</p>
                </v-btn>
              </NuxtLink>
            </div>
          </form>
        </div>
      </v-container>
    </div>
  </section>
  <!-- Large screens layout end -->

  <!-- Small screens layout start -->
  <section class="block lg:hidden">
    <Navbar />
    <section class="bg-[url('/login-radial-bg.png')] bg-cover bg-no-repeat min-h-screen px-6">
      <div class="container flex items-center justify-between py-16">
        <NuxtLink to="/accounts/checkEmail">
          <v-icon color="primary" size="40">mdi-chevron-left</v-icon>
        </NuxtLink>
        <div class="text-center">
          <h2 class="text-xl md:text-2xl font-semibold">Passwort zurücksetzen</h2>
          <p class="text-sm md:text-base pt-3">Wählen Sie ein neues Passwort für Ihr Konto</p>
        </div>
        <div class="invisible">
          <v-icon color="primary" size="40">mdi-chevron-right</v-icon>
        </div>
      </div>

      <form action="" class="py-6">
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="Passwort"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="Bestätige das Passwort"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <div class="pt-56 pb-14 md:pt-72 md:pb-0 flex flex-col gap-y-6">
          <NuxtLink to="/accounts/resetSuccess">
            <v-btn block color="primary" class="text-capitalize" size="large" dark>Passwort zurücksetzen</v-btn>
          </NuxtLink>
          <NuxtLink to="/accounts">
            <v-btn block variant="outlined" class="text-capitalize social-btn" size="large" dark>
              Zurück zur Anmeldung
            </v-btn>
          </NuxtLink>
        </div>
      </form>
    </section>
  </section>
  <!-- Small screens layout end -->
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "account",
});

const visible = ref(false);
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
