<template>
  <section :class="{ 'hero-bg py-20 px-4 lg:px-0': !isMediumScreen, 'bg-black py-20 px-4 lg:px-0': isMediumScreen }">
    <section class="container px-0 pt-14 pt-lg-0">
      <div class="md:grid md:grid-cols-12 md:gap-5">
        <!-- Left column start -->
        <section class="hidden md:block md:col-span-3 md:border border-gray-500 text-center pt-10">
          <ProfileSidebar name="Danya Gutierrez" />
        </section>
        <!-- Left column end -->

        <section class="flex items-center px-5 px-lg-14 pb-16 pt-16 md:hidden">
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
          <div>
            <h2 class="font-bold text-2xl">Bezahlungsmethode andern</h2>
            <p class="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, odit.</p>
          </div>

          <v-form action="" class="font-archivo">
            <v-radio-group color="primary">
              <div>
                <div>
                  <div class="flex justify-between items-center">
                    <div>
                      <v-radio label="Credit/Debit Cards" class="radio-label" value="credit_debit_cards"> </v-radio>
                      <label class="ml-10 text-sm md:text-base" for="credit_debit_cards"
                        >Bezahlen Sie mit Ihrer Kredit-/Debitkarte</label
                      >
                    </div>
                    <div class="space-x-1">
                      <v-avatar image="/payment/visa.png" size="24"></v-avatar>
                      <v-avatar image="/payment/amex.png" size="24"></v-avatar>
                      <v-avatar image="/payment/maestro.png" size="24"></v-avatar>
                    </div>
                  </div>
                  <v-text-field
                    class="ml-10 mt-2"
                    variant="solo"
                    label="Kartennummer"
                    bg-color="white"
                    append-inner-icon="mdi-credit-card-settings"
                  ></v-text-field>
                </div>

                <div class="ml-10 mt-2 flex items-center gap-x-5">
                  <v-text-field
                    variant="solo"
                    label="MM / YY"
                    bg-color="white"
                    append-inner-icon="mdi-credit-card-settings"
                  ></v-text-field>

                  <v-text-field
                    variant="solo"
                    bg-color="white"
                    label="CVV"
                    append-inner-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </div>
              </div>

              <div class="mb-4 flex justify-between items-center">
                <div>
                  <v-radio label="SEPA Pay" value="sepa_pay"></v-radio>
                  <label for="sepa_pay" class="ml-10 text-sm md:text-base"
                    >Zahlung per SEPA-Sicherheitslastschrift</label
                  >
                </div>
                <div>
                  <v-avatar image="/payment/sepa.png" size="24"></v-avatar>
                </div>
              </div>

              <div class="mb-4 flex justify-between items-center">
                <div>
                  <v-radio label="Andere Zahlungsmethoden" value="andere_zahlungsmethoden"></v-radio>
                  <label for="andere_zahlungsmethoden" class="ml-10 text-sm md:text-base"
                    >Bezahlen Sie über Gpay, Paypal, Paytm usw</label
                  >
                </div>
                <div class="space-x-1">
                  <v-avatar image="/payment/paypal.png" size="24"></v-avatar>
                  <v-avatar image="/payment/apple-pay.png" size="24"></v-avatar>
                  <v-avatar image="/payment/amazon-pay.png" size="24"></v-avatar>
                  <v-avatar image="/payment/g-pay.png" size="24"></v-avatar>
                </div>
              </div>
            </v-radio-group>

            <div class="space-x-3">
              <v-btn class="text-capitalize" size="large" variant="outlined" type="submit">
                <NuxtLink to="/profile/bezahlverfahren">Stornieren</NuxtLink>
              </v-btn>
              <v-btn class="text-capitalize" size="large" color="primary" type="submit">
                <NuxtLink to="/profile/bezahlverfahren">Speichern</NuxtLink>
              </v-btn>
            </div>
          </v-form>
        </section>
        <!-- Right column end -->
      </div>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "profile",
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
</script>

<style scoped>
.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 130% 20%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at -20% 100%, rgb(153, 27, 27) 0, transparent 32%);
}
</style>
