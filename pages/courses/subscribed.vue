<template>
  <section
    :class="{
      qa: tab !== 'one',
      'px-4 lg:px-0 py-28 relative hero-bg': !isMediumScreen,
      'px-4 lg:px-0 py-28 relative bg-black': isMediumScreen,
    }"
  >
    <div
      class="absolute right-0 bg-[#630106] p-4 cursor-pointer"
      :class="[toggleGrid ? 'hidden' : 'absolute']"
      @click="gridDisplay"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </div>

    <section
      :class="[
        toggleGrid ? 'container px-0 grid grid-cols-1 md:grid-cols-2 gap-10' : 'container px-0 grid grid-cols-1',
      ]"
    >
      <!-- Left column start -->
      <section class="pt-5">
        <h1 class="text-xl md:text-2xl font-semibold" :class="[!toggleGrid ? 'hidden' : 'block']">
          iOS & Swift - Das komplette iOS - App <span class="text-primary font-bold">Entwicklungs-Bootcamp</span>
        </h1>

        <div :class="[toggleGrid ? 'hidden' : 'flex justify-between items-center']">
          <h1 class="text-xl md:text-2xl font-semibold">
            iOS & Swift - Das komplette iOS - App <span class="text-primary font-bold">Entwicklungs-Bootcamp</span>
          </h1>
          <v-btn
            @click="gridDisplay"
            prepend-icon="mdi-trophy-outline"
            append-icon="mdi-chevron-down"
            class="text-capitalize bg-gradient d-none d-md-flex"
            >Dein Fortschritt</v-btn
          >
        </div>

        <div class="w-full py-5">
          <v-img class="w-full" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </div>

        <div :class="[!toggleGrid ? 'hidden' : 'block']">
          <div class="flex items-center space-x-2 md:space-x-6">
            <v-chip class="bg-primary card-bg px-2 px-md-6">Bestseller</v-chip>
            <div class="flex items-center space-x-0">
              <p class="text-sm md:text-base pr-1">4.5</p>
              <v-rating
                class="pa-0"
                length="5"
                size="28"
                model-value="4.5"
                active-color="#D88B43"
                readonly
                half-increments
              />
              <p class="text-sm md:text-base pl-1">(32,394)</p>
            </div>
          </div>

          <p class="font-light py-5">Erstellt von: <span class="font-semibold">Dr. Angela Yu</span></p>

          <div class="flex items-center space-x-4 lg:space-x-10">
            <div class="flex items-center space-x-3">
              <v-icon>mdi-information-outline</v-icon>
              <p class="text-sm md:text-base">Last updated: 11/2023</p>
            </div>
            <div class="flex items-center space-x-3">
              <v-icon>mdi-web</v-icon>
              <p>German</p>
            </div>
          </div>
        </div>

        <div :class="[toggleGrid ? 'hidden' : 'block py-6']">
          <div class="flex justify-center items-center space-x-2 md:space-x-6">
            <v-chip class="bg-primary card-bg px-2 px-md-6">Bestseller</v-chip>
            <div class="flex items-center space-x-0">
              <p class="text-sm md:text-base pr-1">4.5</p>
              <v-rating
                class="pa-0"
                length="5"
                size="28"
                model-value="4.5"
                active-color="#D88B43"
                readonly
                half-increments
              />
              <p class="text-sm md:text-base pl-1">(32,394)</p>
            </div>
          </div>

          <p class="font-light py-5 text-center">Erstellt von: <span class="font-semibold">Dr. Angela Yu</span></p>

          <div class="flex justify-center items-center space-x-4 lg:space-x-10">
            <div class="flex items-center space-x-3">
              <v-icon>mdi-information-outline</v-icon>
              <p class="text-sm md:text-base">Last updated: 11/2023</p>
            </div>
            <div class="flex items-center space-x-3">
              <v-icon>mdi-web</v-icon>
              <p>German</p>
            </div>
          </div>
        </div>

        <section>
          <v-tabs v-model="tab" bg-color="transparent" class="mt-5">
            <v-tab value="one">
              <p class="text-capitalize text-base lg:text-lg">Überblick</p>
            </v-tab>
            <v-tab value="two">
              <p class="text-capitalize text-base lg:text-lg">Fragen und Antworten</p>
            </v-tab>
            <v-tab value="three">
              <p class="text-capitalize text-base lg:text-lg">Rezensionen</p>
            </v-tab>
          </v-tabs>

          <v-window v-model="tab">
            <v-window-item value="one">
              <h2 class="font-semibold text-lg pb-3 pt-8">Über diesen Kurs</h2>
              <p class="font-light leading-relaxed pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iusto perspiciatis numquam laboriosam
                deserunt delectus minima error enim impedit commodi, culpa, repudiandae ut quae harum reiciendis ullam
                dolores fuga, quibusdam molestiae. Magnam sapiente asperiores veritatis deserunt harum eaque ipsum
                delectus autem voluptatibus commodi eos ducimus amet at ut, facere blanditiis facilis voluptatum nam
                ullam. Cumque quibusdam neque ullam dicta voluptatum officia, consequatur, laboriosam assumenda eos aut
                accusantium explicabo exercitationem quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi iusto perspiciatis numquam laboriosam deserunt delectus minima error enim impedit commodi, culpa,
                repudiandae ut quae harum reiciendis ullam dolores fuga, quibusdam molestiae. Magnam sapiente asperiores
                veritatis deserunt harum eaque ipsum delectus autem voluptatibus commodi eos ducimus amet at ut, facere
                blanditiis facilis voluptatum nam ullam. Cumque quibusdam neque ullam dicta voluptatum officia,
                consequatur, laboriosam assumenda eos aut accusantium explicabo exercitationem quos.
              </p>

              <v-divider :thickness="2" class="border-opacity-25"></v-divider>

              <div class="pt-7 space-y-10">
                <div class="flex gap-x-20">
                  <p>Zertifikate</p>
                  <p class="font-light">Erhalten Sie ein Zertifikat, indem Sie den gesamten Kurs abschließen</p>
                </div>

                <div class="flex">
                  <p class="pr-13">Beschreibung</p>
                  <p class="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iusto perspiciatis numquam laboriosam
                    deserunt delectus minima error enim impedit commodi, culpa, repudiandae ut quae harum reiciendis
                    ullam dolores fuga, quibusdam molestiae. Magnam sapiente asperiores veritatis deserunt harum eaque
                    ipsum delectus autem voluptatibus commodi eos ducimus amet at ut, facere blanditiis facilis
                    voluptatum nam ullam. Cumque quibusdam neque ullam dicta voluptatum officia, consequatur, laboriosam
                    assumenda eos aut accusantium explicabo exercitationem quos. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quasi iusto perspiciatis numquam laboriosam deserunt delectus minima error enim
                    impedit commodi, culpa, repudiandae ut quae harum reiciendis ullam dolores fuga, quibusdam
                    molestiae. Magnam sapiente asperiores veritatis deserunt harum eaque ipsum delectus autem
                    voluptatibus commodi eos ducimus amet at ut, facere blanditiis facilis voluptatum nam ullam. Cumque
                    quibusdam neque ullam dicta voluptatum officia, consequatur, laboriosam assumenda eos aut
                    accusantium explicabo exercitationem quos.
                  </p>
                </div>
              </div>
            </v-window-item>

            <v-window-item value="two">
              <div>
                <div v-if="!toggleGrid" class="w-full md:w-2/4 mt-8 flex">
                  <v-text-field
                    class="search-input"
                    label="Suche Kursfrage"
                    bg-color="white"
                    variant="solo-filled"
                    rounded="0"
                  ></v-text-field>
                  <v-btn color="primary" rounded="0" height="56">
                    <v-icon icon="mdi-magnify"></v-icon>
                  </v-btn>
                </div>

                <div v-else class="w-full mt-8 flex">
                  <v-text-field
                    class="search-input"
                    label="Suche Kursfrage"
                    bg-color="white"
                    variant="solo-filled"
                    rounded="0"
                  ></v-text-field>
                  <v-btn color="primary" rounded="0" height="56">
                    <v-icon icon="mdi-magnify"></v-icon>
                  </v-btn>
                </div>
              </div>

              <div class="flex flex-col md:flex-row justify-between items-center py-6">
                <div>
                  <p v-if="!toggleGrid" class="font-semibold md:text-xl lg:text-2xl">
                    Alle Fragen in diesem Kurs <span class="font-light">(175)</span>
                  </p>
                  <p v-else class="font-semibold md:text-lg">
                    Alle Fragen in diesem Kurs <span class="font-light text-sm">(175)</span>
                  </p>
                </div>
                <div>
                  <v-btn
                    variant="text"
                    color="primary text-capitalize"
                    @click="toggleAddQuestionsDisplay"
                    :class="[toggleAddQuestions ? 'd-none' : 'd-block']"
                  >
                    <p class="underline underline-offset-2 font-archivo">Neue Frage hinzu hinzufügen</p>
                  </v-btn>
                </div>
              </div>

              <!-- Add question form goes here -->
              <section :class="[!toggleAddQuestions ? 'hidden' : 'block']">
                <section class="pb-6 pt-4">
                  <div class="inline-flex items-center space-x-3 pb-6">
                    <v-icon color="primary" class="cursor-pointer" size="28" @click="toggleAddQuestionsDisplay"
                      >mdi-arrow-left</v-icon
                    >
                    <p class="text-lg">Zurück zu den Fragen</p>
                  </div>

                  <div class="bg-gradient-to-b from-black to-red-950 p-10">
                    <form action="">
                      <p class="pb-2">Titel oder Zusammenfassung</p>
                      <v-text-field variant="outlined" type="text" suffix="255"></v-text-field>

                      <p class="pt-2 pb-2">Details (Optional)</p>
                      <v-textarea variant="outlined" auto-grow></v-textarea>

                      <v-btn color="black" variant="flat" size="x-large" class="w-full">
                        <p class="text-capitalize font-light">Veröffentlichen</p>
                      </v-btn>
                    </form>
                  </div>
                </section>
              </section>
              <!-- Add question form goes here -->

              <!-- Comments/Questions go here -->
              <section
                class="md:bg-gradient-to-b from-black to-red-950 md:p-10"
                :class="[toggleAddQuestions ? 'hidden' : 'block']"
              >
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel v-for="i in 6" :key="i" rounded="0" bg-color="transparent" elevation="0">
                    <v-expansion-panel-title>
                      <div class="flex items-center space-x-5">
                        <div>
                          <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
                        </div>
                        <div class="flex flex-col space-y-1">
                          <h3 class="font-semibold text-base">AWS Certification</h3>
                          <p class="text-xs text-gray-300">Rose Lim &bull; 6 years ago</p>
                        </div>
                      </div>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, animi?</p>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>

                <div class="pt-8">
                  <v-btn variant="outlined" class="w-full" size="x-large">
                    <p class="text-capitalize text-sm font-archivo">Mehr sehen</p>
                  </v-btn>
                </div>
              </section>
              <!-- Comments/Questions go here -->
            </v-window-item>

            <v-window-item value="three">
              <h2 class="font-semibold text-xl pb-3 pt-8">Feedback der Studierenden</h2>
              <div :class="[toggleGrid ? 'hidden' : 'grid grid-cols-1 md:grid-cols-12 items-center gap-10 py-8']">
                <div class="text-center md:col-span-2">
                  <p class="text-[#FFBA40] text-5xl font-bold font-archivo">4.8</p>
                  <v-rating
                    class="pa-0"
                    length="5"
                    size="22"
                    model-value="4.8"
                    active-color="#FFBA40"
                    readonly
                    half-increments
                  />
                  <p class="text-[#FFBA40] text-sm">Course Rating</p>
                </div>

                <div class="md:col-span-10">
                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="100" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="5" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="80" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="4" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="70" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="3" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="60" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="2" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="50" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="1" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div :class="[!toggleGrid ? 'hidden' : 'grid grid-cols-1 lg:grid-cols-12 items-center gap-10 py-8']">
                <div class="text-center lg:col-span-2">
                  <p class="text-[#FFBA40] text-5xl font-bold font-archivo">4.8</p>
                  <v-rating
                    class="pa-0"
                    length="5"
                    size="22"
                    model-value="4.8"
                    active-color="#FFBA40"
                    readonly
                    half-increments
                  />
                  <p class="text-[#FFBA40] text-sm">Course Rating</p>
                </div>

                <div class="lg:col-span-10">
                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="100" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="5" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="80" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="4" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="70" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="3" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="60" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="2" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-5/6 pr-5 xl:pr-8">
                      <v-progress-linear model-value="50" color="#FFBA40" height="7" rounded></v-progress-linear>
                    </div>
                    <div class="flex items-center">
                      <v-rating length="5" size="28" model-value="1" active-color="#FFBA40" readonly half-increments />
                      <p class="text-[#FFBA40] text-sm pl-3">50%</p>
                    </div>
                  </div>
                </div>
              </div>

              <section class="md:bg-gradient-to-b from-black to-red-950 md:p-10 space-y-16">
                <div class="space-y-10">
                  <article>
                    <header class="flex items-center space-x-6">
                      <div>
                        <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
                      </div>
                      <div>
                        <h3 class="font-semibold pb-1">AWS Certification</h3>
                        <p class="text-sm text-gray-400">Rose Lim &bull; 6 years ago</p>
                      </div>
                    </header>

                    <div class="pl-[70px]">
                      <v-rating
                        class="py-4"
                        length="5"
                        size="28"
                        model-value="5"
                        active-color="#FFBA40"
                        readonly
                        half-increments
                      />
                      <p class="text-sm md:text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat quod dolor voluptas
                        aperiam sed architecto pariatur nemo ullam aut fugit, eaque similique tenetur eius! Sequi,
                        commodi perferendis.
                      </p>
                    </div>
                  </article>

                  <article>
                    <header class="flex items-center space-x-6">
                      <div>
                        <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
                      </div>
                      <div>
                        <h3 class="font-semibold pb-1">AWS Certification</h3>
                        <p class="text-sm text-gray-400">Rose Lim &bull; 6 years ago</p>
                      </div>
                    </header>

                    <div class="pl-[70px]">
                      <v-rating
                        class="py-4"
                        length="5"
                        size="28"
                        model-value="5"
                        active-color="#FFBA40"
                        readonly
                        half-increments
                      />
                      <p class="text-sm md:text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat quod dolor voluptas
                        aperiam sed architecto pariatur nemo ullam aut fugit, eaque similique tenetur eius! Sequi,
                        commodi perferendis.
                      </p>
                    </div>
                  </article>

                  <article>
                    <header class="flex items-center space-x-6">
                      <div>
                        <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
                      </div>
                      <div>
                        <h3 class="font-semibold pb-1">AWS Certification</h3>
                        <p class="text-sm text-gray-400">Rose Lim &bull; 6 years ago</p>
                      </div>
                    </header>

                    <div class="pl-[70px]">
                      <v-rating
                        class="py-4"
                        length="5"
                        size="28"
                        model-value="5"
                        active-color="#FFBA40"
                        readonly
                        half-increments
                      />
                      <p class="text-sm md:text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat quod dolor voluptas
                        aperiam sed architecto pariatur nemo ullam aut fugit, eaque similique tenetur eius! Sequi,
                        commodi perferendis.
                      </p>
                    </div>
                  </article>

                  <article>
                    <header class="flex items-center space-x-6">
                      <div>
                        <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
                      </div>
                      <div>
                        <h3 class="font-semibold pb-1">AWS Certification</h3>
                        <p class="text-sm text-gray-400">Rose Lim &bull; 6 years ago</p>
                      </div>
                    </header>

                    <div class="pl-[70px]">
                      <v-rating
                        class="py-4"
                        length="5"
                        size="28"
                        model-value="5"
                        active-color="#FFBA40"
                        readonly
                        half-increments
                      />
                      <p class="text-sm md:text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat quod dolor voluptas
                        aperiam sed architecto pariatur nemo ullam aut fugit, eaque similique tenetur eius! Sequi,
                        commodi perferendis.
                      </p>
                    </div>
                  </article>

                  <article>
                    <header class="flex items-center space-x-6">
                      <div>
                        <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
                      </div>
                      <div>
                        <h3 class="font-semibold pb-1">AWS Certification</h3>
                        <p class="text-sm text-gray-400">Rose Lim &bull; 6 years ago</p>
                      </div>
                    </header>

                    <div class="pl-[70px]">
                      <v-rating
                        class="py-4"
                        length="5"
                        size="28"
                        model-value="5"
                        active-color="#FFBA40"
                        readonly
                        half-increments
                      />
                      <p class="text-sm md:text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat quod dolor voluptas
                        aperiam sed architecto pariatur nemo ullam aut fugit, eaque similique tenetur eius! Sequi,
                        commodi perferendis.
                      </p>
                    </div>
                  </article>
                </div>

                <div>
                  <v-btn variant="outlined" class="w-full" size="x-large"
                    ><p class="text-capitalize text-sm font-archivo">Weitere Bewertungen anzeigen</p></v-btn
                  >
                </div>
              </section>
            </v-window-item>
          </v-window>
        </section>
      </section>
      <!-- Left column end -->

      <!-- Right column -->
      <section :class="[!toggleGrid ? 'hidden' : 'block']">
        <v-btn
          @click="gridDisplay"
          prepend-icon="mdi-trophy-outline"
          append-icon="mdi-chevron-down"
          class="text-capitalize bg-gradient"
          >Dein Fortschritt</v-btn
        >

        <article class="py-8">
          <div class="bg-white flex justify-between items-center py-4 px-6">
            <div>
              <p class="font-semibold">Kursinhalte</p>
            </div>
            <div>
              <v-icon @click="gridDisplay">mdi-close</v-icon>
            </div>
          </div>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel v-for="i in 19" :key="i" rounded="0">
              <v-expansion-panel-title>
                <div class="flex flex-col space-y-2">
                  <h3 class="font-semibold text-lg">Abschnitt {{ i }}: Lorem ipsum dolor sit amet</h3>
                  <p class="text-sm text-gray-300">0/10 | 20min</p>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, animi?</p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </article>
      </section>
      <!-- Right column end -->
    </section>
  </section>

  <!-- Instructor details start -->
  <section class="py-12 px-4 lg:px-0 pt-14 bg-black" :class="{ hidden: tab !== 'one' }">
    <section class="container px-0 grid grid-cols-1 lg:grid-cols-2">
      <!-- Left column start -->
      <div>
        <h2 class="text-2xl font-semibold pb-8">Lehrerin</h2>
        <h3 class="font-bold text-xl pb-2 text-primary underline underline-offset-2 text-center text-md-left">
          Dr. Angela Yu
        </h3>
        <p class="text-center text-md-left">Developer and Lead Instructor</p>

        <div class="flex items-center space-x-12 py-10">
          <v-avatar image="/sample-avatar.png" class="mx-auto mx-md-0" size="150"></v-avatar>
          <ul class="space-y-5 hidden lg:block">
            <li class="flex items-center space-x-3">
              <v-icon>mdi-star-outline</v-icon>
              <p>4.7 Instructor Rating</p>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon>mdi-star-check-outline</v-icon>
              <p>733,251 Reviews</p>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon>mdi-account-group</v-icon>
              <p>2,403,377 Students</p>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon>mdi-play-box-outline</v-icon>
              <p>7 Courses</p>
            </li>
          </ul>
        </div>

        <div class="text-center text-lg-start">
          <v-btn color="primary" size="large">
            <p class="text-capitalize">Einen Termin verabreden</p>
          </v-btn>
        </div>
      </div>
      <!-- Left column end -->

      <!-- Right column start -->
      <div class="flex items-center pt-10 lg:pt-0">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum animi nisi, vero qui quia quibusdam possimus?
          Iusto repellat ullam autem, repudiandae quidem sequi, facilis eius mollitia at similique, minima suscipit
          veritatis labore optio ipsa. Dignissimos quaerat non quos vel veniam amet mollitia sequi quas consequatur
          culpa reiciendis atque eum doloremque velit error laborum inventore, explicabo quisquam necessitatibus facere
          fuga at perferendis? Vero necessitatibus optio quis adipisci, fugiat fuga iusto quasi deserunt aperiam porro
          velit, error sunt. Optio harum sequi voluptate a consequatur numquam quia corrupti quod officiis ducimus
          perferendis deleniti, nobis veritatis aliquid? Accusamus pariatur sed deserunt nam numquam quod non quas.
        </p>
      </div>
      <!-- Right column end -->
    </section>
  </section>
  <!-- Instructor details end -->
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "course",
});

const tab = ref("one");
const toggleGrid = ref(true);
const toggleAddQuestions = ref(false);

const toggleAddQuestionsDisplay = () => {
  toggleAddQuestions.value = !toggleAddQuestions.value;
};

const gridDisplay = () => {
  toggleGrid.value = !toggleGrid.value;
};

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
.v-tab--selected {
  font-weight: 700;
}

.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 22%, rgb(127, 29, 29) 0, transparent 18%),
    radial-gradient(at -20% 40%, rgb(153, 27, 27) 0, transparent 30%),
    radial-gradient(at 100% 85%, rgb(127, 29, 29) 0, transparent 25%);
}

.qa {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 85%, rgb(127, 29, 29) 0, transparent 18%),
    radial-gradient(at -20% 70%, rgb(153, 27, 30) 0, transparent 28%);
}

.bg-gradient {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}

.v-chip {
  border-radius: 0;
}

.card-bg {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}
</style>
