<template>
  <section>
    <div class="relative w-full bg-black">
      <!-- SVG background -->
      <div class="d-none d-lg-block z-0">
        <svg
          width="754"
          height="359"
          class="absolute top-0 right-0"
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
      </div>

      <div class="d-none d-lg-block z-0">
        <svg
          width="448"
          height="724"
          class="absolute bottom-0 -left-20"
          viewBox="0 0 448 724"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="86" cy="362" r="362" fill="#B90008" fill-opacity="0.1" />
          <circle cx="56" cy="374" r="219" fill="#860D13" fill-opacity="0.2" />
        </svg>
      </div>
      <!-- SVG background -->

      <!-- Large to extra large screens start -->
      <section class="container z-50 d-none d-lg-block">
        <header class="pt-24 pb-12">
          <NuxtLink to="/">
            <v-img src="/login-logo.svg" width="200" class="mx-auto"></v-img>
          </NuxtLink>
        </header>

        <section class="pb-10">
          <v-stepper
            :items="['Melden Sie sich an', 'Plan und Preise', 'Dein Interesse', 'Zahlung']"
            rounded="0"
            class="bg-transparent"
            ref="stepper"
          >
            <template v-slot:item.1>
              <section class="w-full lg:w-1/2 mx-auto">
                <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6"></v-divider>
                <header class="text-center pb-8">
                  <h2 class="font-semibold text-[32px]">Benutzerkonto erstellen</h2>
                  <p class="py-3">
                    Sie haben bereits ein Konto?
                    <NuxtLink to="/accounts" class="text-primary hover:underline hover:underline-offset-4"
                      >Anmeldung</NuxtLink
                    >
                  </p>
                </header>

                <form action="">
                  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <v-text-field label="Vorname" type="text" variant="outlined"></v-text-field>
                    <v-text-field label="Nachname" type="text" variant="outlined"></v-text-field>
                  </div>

                  <div>
                    <v-text-field label="Email" type="email" variant="outlined"></v-text-field>
                    <v-text-field
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'"
                      label="Passwort"
                      variant="outlined"
                      @click:append-inner="visible = !visible"
                    ></v-text-field>
                  </div>

                  <div>
                    <v-checkbox color="primary">
                      <template v-slot:label>
                        <span style="font-size: 12px"
                          >Ich stimme den Allgemeinen Geschäftsbedingungen und Datenschutzrichtlinien zu.</span
                        >
                      </template>
                    </v-checkbox>

                    <v-btn block color="primary" class="text-capitalize" size="large" dark>
                      <p class="text-[18px]">Benutzerkonto erstellen</p>
                    </v-btn>
                  </div>

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
                    >
                      <p class="text-[18px]">Weiter mit Google</p>
                    </v-btn>
                    <v-btn
                      block
                      prepend-icon="mdi-facebook"
                      variant="outlined"
                      class="text-capitalize social-btn"
                      size="large"
                      dark
                    >
                      <p class="text-[18px]">Weiter mit Facebook</p>
                    </v-btn>
                  </div>
                </form>
              </section>
            </template>

            <template v-slot:item.2>
              <!-- Medium to Large view -->
              <section class="w-full lg:w-11/12 mx-auto py-6 px-4 md:px-0">
                <v-container>
                  <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6"></v-divider>
                  <section class="text-center">
                    <h2 class="pb-8 text-[32px] font-medium">Preisgestaltung</h2>
                    <p class="text-gray-100 font-light md:w-2/4 mx-auto">
                      Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren.
                      Unbegrenzte Benutzer kostenlos.
                    </p>
                  </section>

                  <!-- Optional offer section -->
                  <section
                    :class="[
                      toggleOffer
                        ? 'grid grid-cols-2 items-center gap-16 bg-[#3c0000] mt-10 p-16 rounded-md'
                        : 'd-none',
                    ]"
                  >
                    <div>
                      <v-img src="/bonus.png" cover></v-img>
                    </div>
                    <div>
                      <p class="leading-7 font-light text-[18px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti, laboriosam eaque
                        perferendis quas blanditiis numquam adipisci cupiditate? Inventore dicta numquam dolore eos
                        quaerat, alias aut facere impedit ab! Amet harum vero vel et. Voluptatibus animi repellat
                        magnam, enim delectus sed nihil commodi iusto odio nulla minus molestiae. Quam, placeat.
                        Voluptatibus animi repellat magnam, enim delectus sed nihil commodi iusto odio nulla minus
                        molestiae. Quam, placeat.
                      </p>
                      <p class="py-5 text-[26px] font-light">ONLY 30€</p>
                      <p class="font-light">USUALLY 50€ <span class="text-primary font-semibold">50% OFF</span></p>
                      <div class="text-left text-md-center ml-0 ml-lg-16">
                        <v-btn
                          class="text-capitalize w-full my-6"
                          size="x-large"
                          color="primary"
                          variant="flat"
                          @click="toggleOfferDisplay"
                        >
                          <p class="text-[18px]">Zu meiner Bestellung hinzufügen</p>
                        </v-btn>
                      </div>
                      <div class="text-end">
                        <v-btn variant="text" @click="toggleOfferDisplay">
                          <p class="text-capitalize text-primary underline underline-offset-2 font-bold font-poppins">
                            No thanks
                          </p>
                        </v-btn>
                      </div>
                    </div>
                  </section>
                  <!-- Optional offer section -->

                  <!-- Pricing cards start -->
                  <section :class="[!toggleOffer ? 'mt-24 grid grid-cols-1 lg:grid-cols-3 gap-5' : 'd-none']">
                    <v-card class="bg-white pa-5 rounded-xl md:mb-10">
                      <v-card-item>
                        <v-card-title class="title">
                          <h2 class="text-[36px]">Einfach</h2>
                        </v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <p class="text-gray-600 pt-1 text-base">
                          Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                          analysieren Sie Live- Daten und Leistungskennzahlen.
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

                      <v-card-actions class="w-full mt-12">
                        <v-btn class="bg-primary w-full text-capitalize" size="large">
                          <p class="text-[18px]">Loslegen</p>
                        </v-btn>
                      </v-card-actions>
                    </v-card>

                    <v-card class="bg-gradient pa-5 rounded-xl md:-mt-12">
                      <v-card-item>
                        <v-card-title class="title font-weight-medium pb-2">
                          <h2 class="text-[36px]">Prämie</h2>
                        </v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <p class="text-gray-100 pt-1 text-base">
                          Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                          analysieren Sie Live- Daten und Leistungskennzahlen.
                        </p>
                        <p class="text-3xl font-medium my-4">$49 <span class="text-sm font-light">/ month</span></p>
                        <v-divider class="border-opacity-100 mb-5" :thickness="2"></v-divider>
                        <p class="mb-3">Alles aus dem kostenlosen Plan plus:</p>
                        <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                          <v-icon color="white">mdi-check</v-icon>
                          <v-list-item>{{ listItem.title }}</v-list-item>
                        </ul>
                      </v-card-text>

                      <v-card-actions class="mt-20 w-full">
                        <v-btn class="bg-black w-full text-capitalize" size="large" @click="toggleOfferDisplay">
                          <p class="text-[18px]">Loslegen</p>
                        </v-btn>
                      </v-card-actions>
                    </v-card>

                    <v-card class="bg-white pa-5 rounded-xl md:mb-10">
                      <v-card-item>
                        <v-card-title class="title font-weight-medium pb-2">
                          <h2 class="text-[36px]">Unternehmen</h2>
                        </v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <p class="text-gray-600 pt-1 text-base">
                          Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                          analysieren Sie Live- Daten und Leistungskennzahlen.
                        </p>
                        <p class="text-3xl font-medium my-4">$15 <span class="text-sm font-light">/ month</span></p>
                        <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>
                        <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                          <v-icon color="black">mdi-check</v-icon>
                          <v-list-item>{{ listItem.title }}</v-list-item>
                        </ul>
                      </v-card-text>

                      <v-card-actions class="w-full mt-12">
                        <v-btn class="bg-primary w-full text-capitalize" size="large">
                          <p class="text-[18px]">Loslegen</p>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                    <!-- Pricing cards end -->
                  </section>
                </v-container>
              </section>
            </template>

            <template v-slot:item.3>
              <section class="py-6 px-4 md:px-0">
                <v-container>
                  <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6"></v-divider>
                  <section class="text-center">
                    <h2 class="pb-8 text-[32px] font-medium">Dein Interesse</h2>
                    <p class="text-gray-100 font-light md:w-2/4 mx-auto">
                      Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren.
                      Unbegrenzte Benutzer kostenlos.
                    </p>
                  </section>

                  <section
                    class="grid grid-cols-1 md:grid-cols-2 items-center mt-12 bg-gradient-to-b from-[#3C0000] to-[#B00000] px-[90px] py-[76px] rounded-lg"
                  >
                    <div>
                      <v-img src="/register-illustration.svg" class="w-[50%] md:w-[70%] mx-auto"></v-img>
                    </div>
                    <div class="grid grid-cols-3 md:grid-cols-2 gap-5 pt-10 md:pt-0">
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                      <v-btn
                        block
                        color="primary"
                        variant="outlined"
                        class="text-capitalize text-white"
                        size="large"
                        dark
                      >
                        <p class="text-[18px]">Interesse</p>
                      </v-btn>
                    </div>
                  </section>
                </v-container>
              </section>
            </template>

            <template v-slot:item.4>
              <section class="py-6 px-4 md:px-0">
                <section class="container w-full lg:w-8/12 mx-auto">
                  <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6"></v-divider>
                  <section class="text-center">
                    <h2 class="pb-8 text-[32px] font-semibold">Zahlung</h2>
                    <p class="text-gray-100 font-light md:w-2/4 mx-auto text-sm">
                      Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren.
                      Unbegrenzte Benutzer kostenlos.
                    </p>
                  </section>

                  <section class="pt-12">
                    <h3 class="font-archivo text-xl pb-5">Zahlungsarten</h3>
                    <v-form action="" class="font-archivo">
                      <v-radio-group color="primary">
                        <div>
                          <div>
                            <div class="flex justify-between items-center">
                              <div>
                                <v-radio label="Credit/Debit Cards" value="credit_debit_cards"></v-radio>
                                <label class="ml-10 text-[13px] md:text-base opacity-45" for="credit_debit_cards">
                                  Bezahlen Sie mit Ihrer Kredit-/Debitkarte
                                </label>
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
                            <label for="sepa_pay" class="ml-10 text-[13px] md:text-base opacity-45"
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
                            <label for="andere_zahlungsmethoden" class="ml-10 text-[13px] md:text-base opacity-45"
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
                    </v-form>
                  </section>
                </section>
              </section>
            </template>

            <template v-slot:actions>
              <footer class="flex justify-between items-center pt-10">
                <v-btn @click="stepper.prev()" variant="outlined" class="text-capitalize" size="x-large" dark>
                  <p class="text-[18px] px-10">Stornieren</p>
                </v-btn>
                <v-btn
                  @click="stepper.next()"
                  variant="flat"
                  color="primary"
                  class="text-capitalize"
                  size="x-large"
                  dark
                >
                  <p class="text-[18px] px-10">Fortfahren</p>
                </v-btn>
              </footer>
            </template>
          </v-stepper>
        </section>
      </section>
      <!-- Large to extra large screens start -->

      <!-- Small to medium screens start -->
      <section
        :class="{
          'container z-50 d-block d-lg-none min-h-screen bg-[url(\'/login-radial-bg.png\')] bg-cover bg-no-repeat':
            !isMediumScreen,
          'container z-50 d-block d-lg-none min-h-screen bg-black': isMediumScreen,
        }"
      >
        <header class="block md:hidden">
          <Navbar />
        </header>
        <header class="pt-24 pb-12 hidden md:block">
          <NuxtLink to="/">
            <v-img src="/login-logo.svg" width="200" class="mx-auto"></v-img>
          </NuxtLink>
        </header>

        <section class="pb-10">
          <v-stepper
            :items="['Melden Sie sich an', 'Plan und Preise', 'Dein Interesse', 'Zahlung']"
            rounded="0"
            class="bg-transparent"
            ref="mobileStepper"
            mobile
          >
            <template v-slot:item.1>
              <section class="w-full lg:w-1/2 mx-auto">
                <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6 d-none d-md-block"></v-divider>
                <header class="text-center pb-8">
                  <h2 class="font-semibold text-2xl md:text-3xl">Benutzerkonto erstellen</h2>
                  <p class="py-3 text-sm md:text-base">
                    Sie haben bereits ein Konto?
                    <NuxtLink to="/accounts" class="text-primary hover:underline hover:underline-offset-4"
                      >Anmeldung</NuxtLink
                    >
                  </p>
                </header>

                <form action="" class="">
                  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <v-text-field label="Vorname" type="text" variant="outlined"></v-text-field>
                    <v-text-field label="Nachname" type="text" variant="outlined"></v-text-field>
                  </div>

                  <div>
                    <v-text-field label="Email" type="email" variant="outlined"></v-text-field>
                    <v-text-field
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'"
                      label="Passwort"
                      variant="outlined"
                      @click:append-inner="visible = !visible"
                    ></v-text-field>
                  </div>

                  <div>
                    <v-checkbox
                      color="primary"
                      label="Ich stimme den Allgemeinen Geschäftsbedingungen und Datenschutzrichtlinien zu."
                    ></v-checkbox>

                    <v-btn block color="primary" class="text-capitalize" size="large" dark
                      >Benutzerkonto erstellen</v-btn
                    >
                  </div>

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
                      >Weiter mit Google</v-btn
                    >
                    <v-btn
                      block
                      prepend-icon="mdi-facebook"
                      variant="outlined"
                      class="text-capitalize social-btn"
                      size="large"
                      dark
                      >Weiter mit Facebook</v-btn
                    >
                  </div>
                </form>
              </section>
            </template>

            <template v-slot:item.2>
              <section class="w-full lg:w-11/12 mx-auto py-6 px-4 md:px-0">
                <section class="container">
                  <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6 d-none d-md-block"></v-divider>
                  <section class="text-center">
                    <h2 class="pb-8 text-3xl font-medium">Preisgestaltung</h2>
                    <p class="text-gray-100 font-light md:w-2/4 mx-auto">
                      Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren.
                      Unbegrenzte Benutzer kostenlos.
                    </p>
                  </section>

                  <!-- Optional offer section -->
                  <section
                    :class="[
                      toggleOffer
                        ? 'grid grid-cols-1 items-center gap-5 bg-[#3c0000] mt-10 px-5 py-8 rounded-md'
                        : 'd-none',
                    ]"
                  >
                    <div>
                      <v-img src="/bonus.png" cover></v-img>
                    </div>
                    <div>
                      <p class="leading-7 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti, laboriosam eaque
                        perferendis quas blanditiis numquam adipisci cupiditate? Inventore dicta numquam dolore eos
                        quaerat, alias aut facere impedit ab! Amet harum vero vel et. Voluptatibus animi repellat
                        magnam, enim delectus sed nihil commodi iusto odio nulla minus molestiae. Quam, placeat.
                        Voluptatibus animi repellat magnam, enim delectus sed nihil commodi iusto odio nulla minus
                        molestiae. Quam, placeat.
                      </p>
                      <p class="py-5 text-2xl font-light">ONLY 30€</p>
                      <p class="font-light">USUALLY 50€ <span class="text-primary font-semibold">50% OFF</span></p>
                      <div class="text-left text-md-center ml-0 ml-lg-16">
                        <v-btn
                          class="text-capitalize w-full my-6"
                          color="primary"
                          variant="flat"
                          @click="toggleOfferDisplay"
                        >
                          <p class="text-xs md:text-sm">Zu meiner Bestellung hinzufügen</p>
                        </v-btn>
                      </div>
                      <div class="text-end">
                        <v-btn variant="text" @click="toggleOfferDisplay">
                          <p class="text-capitalize text-primary underline underline-offset-2 font-bold font-poppins">
                            No thanks
                          </p>
                        </v-btn>
                      </div>
                    </div>
                  </section>
                  <!-- Optional offer section -->

                  <!-- Pricing cards start -->
                  <section :class="[!toggleOffer ? 'mt-24 lg:grid grid-cols-1 lg:grid-cols-3 gap-5 hidden' : 'd-none']">
                    <v-card class="bg-white py-8 px-4 rounded-lg md:mb-10">
                      <v-card-item>
                        <v-card-title class="title">Einfach</v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <p class="text-gray-600 pt-1">
                          Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                          analysieren Sie Live- Daten und Leistungskennzahlen.
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

                      <v-card-actions class="w-full mt-12">
                        <v-btn class="bg-primary w-full text-capitalize" size="large">Loslegen</v-btn>
                      </v-card-actions>
                    </v-card>

                    <v-card class="bg-gradient py-12 px-4 rounded-lg md:-mt-12">
                      <v-card-item>
                        <v-card-title class="title font-weight-medium pb-2">Pramie</v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <p class="text-gray-100 pt-1">
                          Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                          analysieren Sie Live- Daten und Leistungskennzahlen.
                        </p>
                        <p class="text-3xl font-medium my-4">$49 <span class="text-sm font-light">/ Monat</span></p>
                        <v-divider class="border-opacity-100 mb-5" :thickness="2"></v-divider>
                        <p class="mb-3">Alles aus dem kostenlosen Plan plus:</p>
                        <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                          <v-icon color="white">mdi-check</v-icon>
                          <v-list-item>{{ listItem.title }}</v-list-item>
                        </ul>
                      </v-card-text>

                      <v-card-actions class="mt-20 w-full">
                        <v-btn class="bg-black w-full text-capitalize" size="large" @click="toggleOfferDisplay"
                          >Loslegen</v-btn
                        >
                      </v-card-actions>
                    </v-card>

                    <v-card class="bg-white py-8 px-4 rounded-lg md:mb-10">
                      <v-card-item>
                        <v-card-title class="title font-weight-medium pb-2">Unternehmen</v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <p class="text-gray-600 pt-1">
                          Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                          analysieren Sie Live- Daten und Leistungskennzahlen.
                        </p>
                        <p class="text-3xl font-medium my-4">$15 <span class="text-sm font-light">/ Monat</span></p>
                        <v-divider class="border-opacity-75 mb-5" :thickness="2"></v-divider>
                        <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                          <v-icon color="black">mdi-check</v-icon>
                          <v-list-item>{{ listItem.title }}</v-list-item>
                        </ul>
                      </v-card-text>

                      <v-card-actions class="w-full mt-12">
                        <v-btn class="bg-primary w-full text-capitalize" size="large">Loslegen</v-btn>
                      </v-card-actions>
                    </v-card>
                  </section>

                  <!-- Pricing cards start - sm to md screens -->
                  <section :class="[!toggleOffer ? 'mt-24 lg:hidden' : 'd-none']">
                    <v-carousel
                      :height="isMediumScreen ? 650 : 680"
                      v-model="selectedItemIndex"
                      hide-delimiter-background
                      :show-arrows="false"
                      :continuous="false"
                    >
                      <v-carousel-item>
                        <v-card class="bg-white py-5 px-4 rounded-lg md:mb-10">
                          <v-card-item>
                            <v-card-title class="title">Einfach</v-card-title>
                          </v-card-item>

                          <v-card-text>
                            <p class="text-gray-600 pt-1">
                              Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                              analysieren Sie Live- Daten und Leistungskennzahlen.
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
                        <v-card class="bg-gradient py-5 px-4 rounded-lg">
                          <v-card-item>
                            <v-card-title class="title font-weight-medium pb-2">Pramie</v-card-title>
                          </v-card-item>

                          <v-card-text>
                            <p class="text-gray-100 pt-1">
                              Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                              analysieren Sie Live- Daten und Leistungskennzahlen.
                            </p>
                            <p class="text-3xl font-medium my-4">$49 <span class="text-sm font-light">/ Monat</span></p>
                            <v-divider class="border-opacity-100 mb-5" :thickness="2"></v-divider>
                            <p class="mb-3">Alles aus dem kostenlosen Plan plus:</p>
                            <ul v-for="listItem in listItems" :key="listItem.id" class="flex items-center">
                              <v-icon color="white">mdi-check</v-icon>
                              <v-list-item>{{ listItem.title }}</v-list-item>
                            </ul>
                          </v-card-text>

                          <v-card-actions class="mt-md-20 w-full">
                            <v-btn class="bg-black w-full text-capitalize" size="large" @click="toggleOfferDisplay"
                              >Loslegen</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-carousel-item>

                      <v-carousel-item>
                        <v-card class="bg-white py-5 px-4 rounded-lg md:mb-10">
                          <v-card-item>
                            <v-card-title class="title font-weight-medium pb-2">Unternehmen</v-card-title>
                          </v-card-item>

                          <v-card-text>
                            <p class="text-gray-600 pt-1">
                              Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse,
                              analysieren Sie Live- Daten und Leistungskennzahlen.
                            </p>
                            <p class="text-3xl font-medium my-4">$15 <span class="text-sm font-light">/ month</span></p>
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
                  </section>
                  <!-- Pricing cards end - sm to md screens -->

                  <!-- Pricing cards end -->
                </section>
              </section>
            </template>

            <template v-slot:item.3>
              <section class="py-6">
                <v-container>
                  <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6 d-none d-md-block"></v-divider>
                  <section class="text-center">
                    <h2 class="pb-8 text-3xl font-medium">Dein Interesse</h2>
                    <p class="text-gray-100 font-light md:w-2/4 mx-auto">
                      Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren.
                      Unbegrenzte Benutzer kostenlos.
                    </p>
                  </section>

                  <section
                    class="grid grid-cols-1 md:grid-cols-2 items-center md:mt-12 py-20 md:bg-gradient-to-b from-[#3C0000] to-[#B00000] md:p-5 md:pr-5 rounded-lg"
                  >
                    <div>
                      <v-img src="/register-illustration.svg" class="w-[50%] md:w-[70%] mx-auto"></v-img>
                    </div>
                    <div class="grid grid-cols-3 md:grid-cols-2 gap-5 pt-10 md:pt-0">
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                      <v-btn block color="primary" variant="outlined" class="text-capitalize text-white" size="large">
                        <p class="text-sm md:text-base">Interesse</p>
                      </v-btn>
                    </div>
                  </section>
                </v-container>
              </section>
            </template>

            <template v-slot:item.4>
              <section class="py-6">
                <section class="container w-full lg:w-8/12 mx-auto">
                  <v-divider :thickness="2" class="border-opacity-25 mt-10 mb-6 d-none d-md-block"></v-divider>
                  <section class="text-center">
                    <h2 class="pb-8 text-3xl font-semibold">Zahlung</h2>
                    <p class="text-gray-100 font-light md:w-2/4 mx-auto">
                      Beginnen Sie kostenlos und skalieren Sie, während Sie wachsen. Keine versteckten Gebühren.
                      Unbegrenzte Benutzer kostenlos.
                    </p>
                  </section>

                  <section class="pt-12">
                    <h3 class="font-archivo text-xl pb-5">Zahlungsarten</h3>
                    <v-form action="" class="font-archivo">
                      <v-radio-group color="primary">
                        <div class="hidden md:block">
                          <div>
                            <div class="flex justify-between">
                              <div>
                                <v-radio label="Credit/Debit Cards" class="radio-label" value="credit_debit_cards">
                                </v-radio>
                                <label class="ml-10 text-sm md:text-base opacity-45" for="credit_debit_cards"
                                  >Bezahlen Sie mit Ihrer Kredit-/Debitkarte</label
                                >
                              </div>
                              <div class="space-x-1 hidden md:block">
                                <v-avatar image="/payment/visa.png" size="24"></v-avatar>
                                <v-avatar image="/payment/amex.png" size="24"></v-avatar>
                                <v-avatar image="/payment/maestro.png" size="24"></v-avatar>
                              </div>
                              <div class="space-x-1 block md:hidden">
                                <v-avatar image="/payment/visa.png" size="15"></v-avatar>
                                <v-avatar image="/payment/amex.png" size="15"></v-avatar>
                                <v-avatar image="/payment/maestro.png" size="15"></v-avatar>
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

                        <div class="block md:hidden">
                          <div class="flex justify-between">
                            <div>
                              <v-radio label="Credit/Debit Cards" value="credit_debit_cards"> </v-radio>
                              <label class="ml-10 text-sm md:text-base opacity-45" for="credit_debit_cards"
                                >Bezahlen Sie mit Ihrer Kredit-/Debitkarte</label
                              >
                            </div>
                            <div class="space-x-1 hidden md:block">
                              <v-avatar image="/payment/visa.png" size="24"></v-avatar>
                              <v-avatar image="/payment/amex.png" size="24"></v-avatar>
                              <v-avatar image="/payment/maestro.png" size="24"></v-avatar>
                            </div>
                            <div class="space-x-1 block md:hidden">
                              <v-avatar image="/payment/visa.png" size="15"></v-avatar>
                              <v-avatar image="/payment/amex.png" size="15"></v-avatar>
                              <v-avatar image="/payment/maestro.png" size="15"></v-avatar>
                            </div>
                          </div>
                          <v-text-field
                            class="ml-10 mt-2"
                            variant="solo"
                            label="Kartennummer"
                            bg-color="white"
                            append-inner-icon="mdi-credit-card-settings"
                          ></v-text-field>
                          <v-text-field
                            class="ml-10"
                            variant="solo"
                            label="MM / YY"
                            bg-color="white"
                            append-inner-icon="mdi-credit-card-settings"
                          ></v-text-field>

                          <v-text-field
                            class="ml-10"
                            variant="solo"
                            bg-color="white"
                            label="CVV"
                            append-inner-icon="mdi-lock"
                            type="password"
                          ></v-text-field>
                        </div>

                        <div class="mb-4 flex justify-between items-center">
                          <div>
                            <v-radio label="SEPA Pay" value="sepa_pay"></v-radio>
                            <label for="sepa_pay" class="ml-10 text-sm sm:text-sm md:text-base opacity-45"
                              >Zahlung per SEPA-Sicherheitslastschrift</label
                            >
                          </div>
                          <div>
                            <v-avatar image="/payment/sepa.png" class="d-none d-md-block" size="24"></v-avatar>
                            <v-avatar image="/payment/sepa.png" class="d-block d-md-none" size="20"></v-avatar>
                          </div>
                        </div>

                        <div class="mb-4 flex justify-between">
                          <div>
                            <v-radio label="Andere Zahlungsmethoden" value="andere_zahlungsmethoden"></v-radio>
                            <label
                              for="andere_zahlungsmethoden"
                              class="ml-10 text-xs sm:text-sm md:text-base opacity-45"
                              >Bezahlen Sie über Gpay, Paypal, Paytm usw</label
                            >
                          </div>
                          <div class="space-x-1 hidden md:block">
                            <v-avatar image="/payment/paypal.png" size="24"></v-avatar>
                            <v-avatar image="/payment/apple-pay.png" size="24"></v-avatar>
                            <v-avatar image="/payment/amazon-pay.png" size="24"></v-avatar>
                            <v-avatar image="/payment/g-pay.png" size="24"></v-avatar>
                          </div>
                          <div class="space-x-1 block md:hidden">
                            <v-avatar image="/payment/paypal.png" size="14"></v-avatar>
                            <v-avatar image="/payment/apple-pay.png" size="14"></v-avatar>
                            <v-avatar image="/payment/amazon-pay.png" size="14"></v-avatar>
                            <v-avatar image="/payment/g-pay.png" size="14"></v-avatar>
                          </div>
                        </div>
                      </v-radio-group>
                    </v-form>
                  </section>
                </section>
              </section>
            </template>

            <template v-slot:actions>
              <footer class="flex justify-between items-center pt-10 px-6">
                <v-btn @click="mobileStepper.prev()" variant="outlined" class="text-capitalize" dark>
                  <p class="text-sm">Stornieren</p>
                </v-btn>
                <v-btn @click="mobileStepper.next()" variant="flat" color="primary" class="text-capitalize" dark>
                  <p class="text-sm">Fortfahren</p>
                </v-btn>
              </footer>
            </template>
          </v-stepper>
        </section>
      </section>
      <!-- Small to medium screens end -->
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const toggleOffer = ref(false);

const toggleOfferDisplay = () => {
  toggleOffer.value = !toggleOffer.value;
};

const stepper = ref(null);
const mobileStepper = ref(null);
const currentStep = ref(0);

const handleNextStep = () => {
  stepper.value.next();
};

const handleMobileNextStep = () => {
  mobileStepper.value.next();
};

const handlePrevStep = () => {
  stepper.value.prev();
};

const handleMobilePrevStep = () => {
  mobileStepper.value.prev();
};

watch(currentStep, (newValue) => {
  if (newValue === 0) {
    // Disable previous button if on the first step
    stepper.value.prevDisabled = true;
  } else {
    stepper.value.prevDisabled = false;
  }

  if (newValue === 3) {
    // Disable next button if on the last step
    stepper.value.nextDisabled = true;
  } else {
    stepper.value.nextDisabled = false;
  }
});

const selectedItemIndex = ref(1);

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

definePageMeta({
  layout: "account",
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
.v-carousel__controls {
  color: red !important;
}

.v-stepper-item__avatar.v-avatar {
  color: white !important;
  background: #b90008 !important;
}

.social-btn {
  font-family: Archivo, sans-serif !important;
  font-size: 16px !important;
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
</style>
