<template>
  <section
    :class="{
      'hero-bg px-4 lg:px-0': !isMediumScreen,
      'bg-black px-4 lg:px-0': isMediumScreen,
    }"
  >
    <section class="container px-0">
      <section class="py-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <!-- Left column start -->
        <div class="pt-10">
          <h2 class="font-semibold text-xl md:text-[32px] md:leading-10">
            iOS & Swift - Das komplette iOS-App <span class="text-primary">Entwicklungs-Bootcamp</span>
          </h2>
          <p class="pt-5 md:pt-7 pb-5 text-sm md:text-[18px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax negotium, dicerem impudens, nisi hoc institut
            translatum ad philosophos nostros esset.
          </p>

          <div class="flex items-center space-x-1 md:space-x-5">
            <!-- Do a if else statement here, if the course is bestseller, show the v-chip -->
            <v-chip class="bg-primary card-bg px-3 md:px-6 mr-2 md:mr-0" rounded="0">
              <p class="text-sm">Bestseller</p>
            </v-chip>
            <p class="text-sm md:text-base">4.5</p>
            <v-rating class="pa-0" hover readonly :length="5" :size="28" :model-value="4.5" active-color="#D88B43" />
            <p class="text-sm md:text-base">(32,394)</p>
          </div>

          <p class="py-5">Erstellt van: <span class="font-bold">Dr. Angel Yu</span></p>

          <div class="flex items-center space-x-4 md:space-x-8">
            <div class="flex items-center space-x-3">
              <v-icon>mdi-information-outline</v-icon>
              <p class="text-sm md:text-base">Letzte Aktualisierung 11/2023</p>
            </div>
            <div class="flex items-center space-x-3">
              <v-icon>mdi-web</v-icon>
              <p class="text-sm md:text-base">German</p>
            </div>
          </div>

          <!-- Course description -->
          <div class="hidden md:block">
            <h3 class="font-semibold text-2xl pt-8 pb-4">Was Sie lernen werden</h3>
            <p class="text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quibusdam ratione esse dolor dignissimos
              distinctio maxime fugiat, non possimus odit aspernatur debitis nemo eveniet ex voluptate quaerat dicta
              blanditiis dolores. Impedit ipsam nostrum molestiae veritatis ad animi consequatur explicabo accusantium.
              Vero aperiam molestiae consequatur velit rerum perferendis error, eum molestias sequi, ut enim ex illum
              quisquam temporibus id facilis explicabo odio. Nemo minima doloremque ipsam necessitatibus temporibus!
              Culpa ipsa repudiandae tempora tempore. Non optio voluptas et temporibus dolor, velit reprehenderit, at
              iste minus, repudiandae placeat commodi quae error ipsa labore necessitatibus ad aliquid tempore molestias
              praesentium obcaecati quibusdam impedit expedita!
            </p>
          </div>
        </div>
        <!-- Left column end -->

        <!-- Right column start -->
        <div>
          <!-- Course card start -->
          <article class="bg-white p-[26px]">
            <div>
              <v-img aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
            </div>

            <div class="pb-5">
              <p class="text-[32px] font-semibold pt-5">
                200€ <span class="line-through text-base font-normal">550€</span>
                <span class="text-base font-normal"> 80% off</span>
              </p>
              <div class="text-primary flex items-center pt-3">
                <v-icon class="">mdi-timer-outline</v-icon>
                <p class="pt-1 ml-1 text-[18px]">Noch 1 Tag zu diesem Preis!</p>
              </div>
            </div>

            <div class="grid grid-cols-12 items-center">
              <div class="col-span-10">
                <v-btn color="primary" variant="flat" size="large" class="w-full">
                  <p class="text-sm md:text-[18px] font-medium text-capitalize">in den Warenkorb legen</p>
                </v-btn>
              </div>
              <div class="col-span-2 text-center">
                <v-icon color="primary" size="40" class="mx-auto hover:cursor-pointer">mdi-heart-outline</v-icon>
              </div>
            </div>

            <div class="w-full pt-3">
              <v-btn variant="outlined" size="large" class="w-full text-capitalize">
                <p class="text-sm md:text-[18px]">Kaufe jetzt</p>
              </v-btn>
            </div>

            <div class="pt-4 pb-8">
              <p class="font-light">30 Tage Geld-zurück-Garantie</p>
            </div>

            <ul class="space-y-1">
              <li class="flex items-center space-x-3">
                <v-icon>mdi-television-play</v-icon>
                <p class="text-sm md:text-base">59,5 Stunden On-Demand-Video</p>
              </li>
              <li class="flex items-center space-x-3">
                <v-icon>mdi-code-tags</v-icon>
                <p class="text-sm md:text-base">12 Codierungsübungen</p>
              </li>
              <li class="flex items-center space-x-3">
                <v-icon>mdi-file-document-check-outline</v-icon>
                <p class="text-sm md:text-base">114 Artikel</p>
              </li>
              <li class="flex items-center space-x-3">
                <v-icon>mdi-folder-arrow-down-outline</v-icon>
                <p class="text-sm md:text-base">12 herunterladbare Ressourcen</p>
              </li>
              <li class="flex items-center space-x-3">
                <v-icon>mdi-all-inclusive</v-icon>
                <p class="text-sm md:text-base">Voller lebenslanger Zugriff</p>
              </li>
              <li class="flex items-center space-x-3">
                <v-icon>mdi-trophy-outline</v-icon>
                <p class="text-sm md:text-base">Abschlusszertifikat</p>
              </li>
            </ul>

            <div class="py-8 text-center">
              <p class="text-sm md:text-base">
                Trainieren Sie 5 oder mehr Personen? Verschaffen Sie Ihrem Team Zugang zu den über 25.000 besten Kursen
                des Intellect Institute.
              </p>
            </div>

            <div class="w-full pb-3">
              <v-btn variant="outlined" size="x-large" class="w-full text-capitalize">
                <p class="text-sm lg:text-[18px] text-wrap">Probieren Sie Business Access aus</p>
              </v-btn>
            </div>
          </article>
          <!-- Course card end -->

          <!-- Course description -->
          <div class="block md:hidden">
            <h3 class="font-semibold text-2xl pt-8 pb-4">Was Sie lernen werden</h3>
            <p class="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quibusdam ratione esse dolor dignissimos
              distinctio maxime fugiat, non possimus odit aspernatur debitis nemo eveniet ex voluptate quaerat dicta
              blanditiis dolores. Impedit ipsam nostrum molestiae veritatis ad animi consequatur explicabo accusantium.
              Vero aperiam molestiae consequatur velit rerum perferendis error, eum molestias sequi, ut enim ex illum
              quisquam temporibus id facilis explicabo odio. Nemo minima doloremque ipsam necessitatibus temporibus!
              Culpa ipsa repudiandae tempora tempore. Non optio voluptas et temporibus dolor, velit reprehenderit, at
              iste minus, repudiandae placeat commodi quae error ipsa labore necessitatibus ad aliquid tempore molestias
              praesentium obcaecati quibusdam impedit expedita!
            </p>
          </div>
        </div>
        <!-- Right column end -->
      </section>
    </section>

    <!-- Top companies section tablet screen start -->
    <section class="hidden md:block lg:hidden container pb-16 px-4 lg:px-0 text-center text-md-left">
      <h3 class="font-bold text-[18px] md:text-2xl pb-2">Top-Unternehmen bieten ihren Mitarbeitern diesen Kurs an</h3>
      <p class="text-[18px] text-[#9F9F9F]">
        Dieser Kurs wurde in unsere Sammlung der am besten bewerteten Kurse aufgenommen, denen Unternehmen weltweit
        vertrauen. Erfahren Sie mehr
      </p>

      <div class="hidden md:grid md:grid-cols-5 gap-14 items-center mt-10">
        <v-img src="/harvard-logo.png" class="filter" width="150"></v-img>
        <v-img src="/microsoft-logo.webp" class="filter" width="150"></v-img>
        <v-img src="/amazon-logo.png" class="filter" width="150"></v-img>
        <v-img src="/samsung-logo.webp" class="filter" width="150"></v-img>
        <v-img src="/google-logo.png" class="filter" width="150"></v-img>
      </div>

      <section class="block md:hidden pt-10">
        <v-img class="w-full" src="/logo-mobile-group.png"></v-img>
      </section>
    </section>
    <!-- Top companies section tablet screen end -->
  </section>

  <!-- Instructor details start -->
  <section class="py-12 px-4 lg:px-0 testimonial-bg">
    <section class="container px-0 grid grid-cols-1 lg:grid-cols-2">
      <!-- Left column start -->
      <div>
        <h2 class="text-[18px] md:text-2xl font-bold pb-8">Lehrerin</h2>
        <h3
          class="font-bold text-sm md:text-xl pb-2 text-primary underline underline-offset-2 text-center text-md-left"
        >
          Dr. Angela Yu
        </h3>
        <p class="text-center text-md-left text-[10px] md:text-base">Developer and Lead Instructor</p>

        <div class="flex items-center space-x-12 py-10">
          <v-avatar image="/sample-avatar.png" class="mx-auto mx-md-0" size="136"></v-avatar>
          <ul class="space-y-5 hidden lg:block">
            <li class="flex items-center space-x-3">
              <v-icon>mdi-star-outline</v-icon>
              <p>4.7 Lehrerbewertung</p>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon>mdi-star-check-outline</v-icon>
              <p>733,251 Bewertungen</p>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon>mdi-account-group</v-icon>
              <p>2,403,377 Studierende</p>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon>mdi-play-box-outline</v-icon>
              <p>7 Kurse</p>
            </li>
          </ul>
        </div>

        <div class="text-center text-md-left">
          <v-btn variant="flat" color="primary" size="large" class="text-capitalize">
            <p class="text-sm md:text-[18px] font-medium">Einen Termin verabreden</p>
          </v-btn>
        </div>
      </div>
      <!-- Left column end -->

      <!-- Right column start -->
      <div class="flex items-center pt-10 lg:pt-0">
        <p class="text-sm leading-6">
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

  <section
    :class="{ 'py-20 px-4 lg:px-0 top-companies-bg': !isMediumScreen, 'py-20 px-4 lg:px-0 bg-black': isMediumScreen }"
  >
    <!-- Top companies section small and large screen start -->
    <section class="block md:hidden lg:block container pb-36 px-4 lg:px-0 text-center text-md-left">
      <h3 class="font-bold text-[18px] md:text-2xl pb-2">Top-Unternehmen bieten ihren Mitarbeitern diesen Kurs an</h3>
      <p class="text-[18px] text-[#9F9F9F]">
        Dieser Kurs wurde in unsere Sammlung der am besten bewerteten Kurse aufgenommen, denen Unternehmen weltweit
        vertrauen. Erfahren Sie mehr
      </p>

      <div class="hidden md:grid md:grid-cols-5 gap-14 items-center mt-10">
        <v-img src="/harvard-logo.png" class="filter" width="150"></v-img>
        <v-img src="/microsoft-logo.webp" class="filter" width="150"></v-img>
        <v-img src="/amazon-logo.png" class="filter" width="150"></v-img>
        <v-img src="/samsung-logo.webp" class="filter" width="150"></v-img>
        <v-img src="/google-logo.png" class="filter" width="150"></v-img>
      </div>

      <section class="block md:hidden pt-10">
        <v-img class="w-full" src="/logo-mobile-group.png"></v-img>
      </section>
    </section>
    <!-- Top companies section small and large screen end -->

    <section class="container px-0">
      <header>
        <h2 class="text-[18px] md:text-2xl font-semibold pb-3">Kursinhalt</h2>

        <div class="md:flex flex-col md:flex-row items-center justify-between">
          <p class="text-sm">36 sections &bull; 542 lectures &bull; 60h 25m total length</p>
          <div class="text-end">
            <v-btn
              variant="text"
              color="primary"
              class="text-capitalize pa-0"
              :ripple="false"
              style="text-decoration: underline"
            >
              <p class="text-sm">Erweitern Sie alle Abschnitte</p>
            </v-btn>
          </div>
        </div>
      </header>

      <!-- Accordion start -->
      <section class="pt-3">
        <v-expansion-panels variant="accordion">
          <v-expansion-panel v-for="(isOpen, index) in isOpenArray" :key="index" @click="toggleIcon(index)" rounded="0">
            <v-expansion-panel-title class="flex items-center" :hide-actions="true">
              <div :class="{ 'transform rotate-180': isOpen }" class="mr-4 transition-transform">
                <v-icon>mdi-chevron-down</v-icon>
              </div>
              <div class="flex-grow">
                <p class="text-sm sm:text-base md:text-[18px] font-semibold">Lorem ipsum dolor sit amet</p>
              </div>
              <v-spacer class="px-2 md:px-0"></v-spacer>
              <div class="ml-auto">
                <p class="text-[10px] sm:text-sm text-nowrap">14 Vorträge | 54 Minuten</p>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </section>
      <!-- Accordion end -->

      <section class="pt-10 pt-md-16">
        <h2 class="text-lg md:text-2xl font-semibold pb-5">Beschreibung</h2>
        <p class="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident sit laboriosam. Quidem ipsa
          corrupti labore assumenda recusandae incidunt illum soluta maxime non quia sit eveniet vitae quae enim, vel
          aliquam nihil deleniti beatae error officia omnis ipsum quaerat. Asperiores est obcaecati provident magnam
          minima beatae perferendis quod eius rem quos iusto eos molestias ducimus aspernatur culpa, tempore at
          corporis? Incidunt, sit veritatis tempora nostrum molestias cupiditate placeat nemo, quo rerum sint autem
          officia quam consequatur vel officiis itaque? Non, quisquam unde consequatur earum qui eius repudiandae rem
          consequuntur nobis laudantium ipsa rerum, dolores praesentium voluptatibus explicabo harum totam porro eum!
          Error nam explicabo esse illo aliquid incidunt nostrum, rerum voluptatum vitae molestiae repellat. Nemo nulla
          quia culpa, laborum delectus nostrum facilis quas aut ad numquam reiciendis neque explicabo tenetur placeat
          eaque esse asperiores, vitae porro vel illum accusamus, nam atque dicta doloremque! A doloribus et incidunt
          quas, eveniet recusandae cumque neque totam quae inventore. Qui et tempora beatae laudantium. Non, quisquam
          unde consequatur earum qui eius repudiandae rem consequuntur nobis laudantium ipsa rerum, dolores praesentium
          voluptatibus explicabo harum totam porro eum! Error nam explicabo esse illo aliquid incidunt nostrum, rerum
          voluptatum vitae molestiae repellat. Nemo nulla quia culpa, laborum delectus nostrum facilis quas aut ad
          numquam reiciendis neque explicabo tenetur placeat eaque esse asperiores, vitae porro vel illum accusamus, nam
          atque dicta doloremque! A doloribus et incidunt quas, eveniet recusandae cumque neque totam quae inventore.
          Qui et tempora beatae laudantium.
        </p>
        <div class="text-end text-md-start">
          <v-btn variant="text" color="primary" class="pa-0 mt-3 text-capitalize"
            >Zeig mehr <v-icon>mdi-chevron-down</v-icon></v-btn
          >
        </div>
      </section>
    </section>
  </section>

  <!-- Testimonial section start -->
  <section class="testimonial-bg py-36">
    <section class="container px-4 lg:px-0">
      <section class="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <v-icon color="primary" class="icon -m-4">mdi-format-quote-open</v-icon>
          <h3 class="font-archivo text-[32px] md:text-4xl lg:text-5xl pb-4 font-bold leading-snug">
            Worüber sie sagen <span class="text-primary">Intellect Institute</span>
          </h3>
          <p class="leading-loose w-full lg:w-4/5 text-sm md:text-base">
            Mehr als 3000 Benutzern wurde durch World Online Course geholfen.
          </p>
        </div>
        <div>
          <v-card theme="light" flat class="rounded-xl relative">
            <v-window v-model="onboarding">
              <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
                <v-card class="d-flex flex-column justify-center pa-5 pa-md-10">
                  <div class="flex items-center justify-between">
                    <span class="text-[#EC000A] font-bold font-archivo">Was sie sagen</span>
                    <v-item-group v-model="onboarding" class="text-center" mandatory>
                      <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ isSelected, toggle }" :value="n">
                        <v-btn
                          class="border-0 dot-btn"
                          :variant="isSelected ? 'outlined' : 'plain'"
                          icon="mdi-record"
                          :ripple="false"
                          @click="toggle"
                        ></v-btn>
                      </v-item>
                    </v-item-group>
                  </div>
                  <p class="text-xs md:text-xl lg:text-2xl font-archivo leading-relaxed pb-5 pt-1 pt-md-4">
                    "Studying at Intellect Institute is fun, the curriculum is complete, the instructors are competent,
                    and the assignments given are also relevant to the current scope of work."
                  </p>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <v-avatar
                        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                        size="70"
                        class="d-none d-md-block mr-4"
                      ></v-avatar>
                      <v-avatar
                        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                        size="58.8"
                        class="block d-md-none mr-2"
                      ></v-avatar>
                      <div class="flex flex-col font-archivo">
                        <span class="text-[10px] sm:text-sm md:text-base pb-1 md:pb-0"
                          >Product Designer at Tokopedia</span
                        >
                        <span class="text-xs sm:text-sm md:text-base font-bold text-nowrap">Resky Fernanda</span>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <v-btn variant="plain" :ripple="false" class="px-0" @click="prev">
                        <v-icon class="border-2 border-black rounded-full" color="black" size="40"
                          >mdi-chevron-left</v-icon
                        >
                      </v-btn>
                      <v-btn variant="plain" :ripple="false" class="px-0" @click="next">
                        <v-icon class="border-2 border-black rounded-full" color="black" size="40"
                          >mdi-chevron-right</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                </v-card>
              </v-window-item>
            </v-window>
          </v-card>
        </div>
      </section>
    </section>
  </section>
  <!-- Testimonial section end -->

  <!-- Certificate section start -->
  <section class="bg-black py-20 px-4 lg:px-0">
    <section class="container px-0 lg:grid lg:grid-cols-12 items-center gap-10">
      <div class="lg:col-span-5">
        <v-img src="/certificate-example.png" cover></v-img>
      </div>
      <div class="lg:col-span-7">
        <h2 class="text-[32px] font-bold pb-5 pt-8 lg:pt-0">Zertifizierung</h2>
        <p class="text-light text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolore et numquam unde tempora quam voluptas
          sed tempore, obcaecati cum neque! Distinctio molestias quis sit sint, labore itaque assumenda rerum ipsa
          deserunt quasi iste inventore.
        </p>
        <div class="text-center text-md-left">
          <v-btn class="mt-5 text-capitalize card-bg" size="large" variant="flat">
            <p class="text-sm md:text-[18px] tracking-[2%]">Jetzt loslegen</p>
          </v-btn>
        </div>
      </div>
    </section>
  </section>
  <!-- Certificate section end -->

  <!-- Reviews section start -->
  <section class="bg-black pb-24 px-4 lg:px-0">
    <section class="container px-0">
      <header class="flex items-center space-x-3 pb-14">
        <v-icon>mdi-star-outline</v-icon>
        <p class="font-semibold text-2xl">4,8 Kursbewertung | 88.000 Bewertungen</p>
      </header>

      <section>
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-x-28">
          <!-- Loop through the reviews and display them here -->
          <article>
            <v-divider :thickness="2" class="border-opacity-50"></v-divider>
            <div class="flex items-center space-x-5 pt-5">
              <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
              <div>
                <h3 class="font-bold text-xl pb-1">Jerwin T.</h3>
                <div class="flex items-center space-x-3">
                  <v-rating readonly :length="5" :size="25" :model-value="5" active-color="#D88B43" />
                  <span>6 days ago</span>
                </div>
              </div>
            </div>
            <p class="py-4 leading-7 font-light text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quod et odit facilis quis aperiam
              distinctio consequuntur esse mollitia excepturi modi nam eligendi nesciunt libero veritatis. Quasi nihil
              aspernatur voluptates?
            </p>
            <div class="flex items-center pb-10">
              <p class="text-gray-400">Hilfreich?</p>
              <div>
                <v-btn icon="mdi-thumb-up-outline" variant="text" color="#BFBFBF"></v-btn>
                <v-btn icon="mdi-thumb-down-outline" variant="text" color="#BFBFBF"></v-btn>
              </div>
            </div>
          </article>

          <article>
            <v-divider :thickness="2" class="border-opacity-50"></v-divider>
            <div class="flex items-center space-x-5 pt-5">
              <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
              <div>
                <h3 class="font-bold text-xl pb-1">Jerwin T.</h3>
                <div class="flex items-center space-x-3">
                  <v-rating readonly :length="5" :size="25" :model-value="5" active-color="#D88B43" />
                  <span>6 days ago</span>
                </div>
              </div>
            </div>
            <p class="py-4 leading-7 font-light text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quod et odit facilis quis aperiam
              distinctio consequuntur esse mollitia excepturi modi nam eligendi nesciunt libero veritatis. Quasi nihil
              aspernatur voluptates?
            </p>
            <div class="flex items-center pb-10">
              <p class="text-gray-400">Hilfreich?</p>
              <div>
                <v-btn icon="mdi-thumb-up-outline" variant="text" color="#BFBFBF"></v-btn>
                <v-btn icon="mdi-thumb-down-outline" variant="text" color="#BFBFBF"></v-btn>
              </div>
            </div>
          </article>

          <article>
            <v-divider :thickness="2" class="border-opacity-50"></v-divider>
            <div class="flex items-center space-x-5 pt-5">
              <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
              <div>
                <h3 class="font-bold text-xl pb-1">Jerwin T.</h3>
                <div class="flex items-center space-x-3">
                  <v-rating readonly :length="5" :size="25" :model-value="5" active-color="#D88B43" />
                  <span>6 days ago</span>
                </div>
              </div>
            </div>
            <p class="py-4 leading-7 font-light text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quod et odit facilis quis aperiam
              distinctio consequuntur esse mollitia excepturi modi nam eligendi nesciunt libero veritatis. Quasi nihil
              aspernatur voluptates?
            </p>
            <div class="flex items-center pb-10">
              <p class="text-gray-400">Hilfreich?</p>
              <div>
                <v-btn icon="mdi-thumb-up-outline" variant="text" color="#BFBFBF"></v-btn>
                <v-btn icon="mdi-thumb-down-outline" variant="text" color="#BFBFBF"></v-btn>
              </div>
            </div>
          </article>

          <article>
            <v-divider :thickness="2" class="border-opacity-50"></v-divider>
            <div class="flex items-center space-x-5 pt-5">
              <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
              <div>
                <h3 class="font-bold text-xl pb-1">Jerwin T.</h3>
                <div class="flex items-center space-x-3">
                  <v-rating readonly :length="5" :size="25" :model-value="5" active-color="#D88B43" />
                  <span>6 days ago</span>
                </div>
              </div>
            </div>
            <p class="py-4 leading-7 font-light text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quod et odit facilis quis aperiam
              distinctio consequuntur esse mollitia excepturi modi nam eligendi nesciunt libero veritatis. Quasi nihil
              aspernatur voluptates?
            </p>
            <div class="flex items-center pb-10">
              <p class="text-gray-400">Hilfreich?</p>
              <div>
                <v-btn icon="mdi-thumb-up-outline" variant="text" color="#BFBFBF"></v-btn>
                <v-btn icon="mdi-thumb-down-outline" variant="text" color="#BFBFBF"></v-btn>
              </div>
            </div>
          </article>

          <article>
            <v-divider :thickness="2" class="border-opacity-50"></v-divider>
            <div class="flex items-center space-x-5 pt-5">
              <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
              <div>
                <h3 class="font-bold text-xl pb-1">Jerwin T.</h3>
                <div class="flex items-center space-x-3">
                  <v-rating readonly :length="5" :size="25" :model-value="5" active-color="#D88B43" />
                  <span>6 days ago</span>
                </div>
              </div>
            </div>
            <p class="py-4 leading-7 font-light text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quod et odit facilis quis aperiam
              distinctio consequuntur esse mollitia excepturi modi nam eligendi nesciunt libero veritatis. Quasi nihil
              aspernatur voluptates?
            </p>
            <div class="flex items-center pb-10">
              <p class="text-gray-400">Hilfreich?</p>
              <div>
                <v-btn icon="mdi-thumb-up-outline" variant="text" color="#BFBFBF"></v-btn>
                <v-btn icon="mdi-thumb-down-outline" variant="text" color="#BFBFBF"></v-btn>
              </div>
            </div>
          </article>

          <article>
            <v-divider :thickness="2" class="border-opacity-50"></v-divider>
            <div class="flex items-center space-x-5 pt-5">
              <v-avatar image="/sample-avatar.png" size="50"></v-avatar>
              <div>
                <h3 class="font-bold text-xl pb-1">Jerwin T.</h3>
                <div class="flex items-center space-x-3">
                  <v-rating readonly :length="5" :size="25" :model-value="5" active-color="#D88B43" />
                  <span>6 days ago</span>
                </div>
              </div>
            </div>
            <p class="py-4 leading-7 font-light text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quod et odit facilis quis aperiam
              distinctio consequuntur esse mollitia excepturi modi nam eligendi nesciunt libero veritatis. Quasi nihil
              aspernatur voluptates?
            </p>
            <div class="flex items-center pb-10">
              <p class="text-gray-400">Hilfreich?</p>
              <div>
                <v-btn icon="mdi-thumb-up-outline" variant="text" color="#BFBFBF"></v-btn>
                <v-btn icon="mdi-thumb-down-outline" variant="text" color="#BFBFBF"></v-btn>
              </div>
            </div>
          </article>
        </section>

        <v-btn variant="outlined" class="text-capitalize" size="x-large">Alle Bewertungen anzeigen</v-btn>
      </section>
    </section>
  </section>
  <!-- Reviews section end -->

  <!-- Further courses section start -->
  <section class="bg-black pb-20 px-4 lg:px-0">
    <section class="container px-0">
      <div class="md:flex items-center flex-col md:flex-row gap-6 md:gap-24">
        <div class="md:flex-1">
          <h2 class="text-2xl md:text-[32px] font-bold pb-4">
            Weitere Kurse von <span class="text-primary font-bold">Dr. Angela Yu</span>
          </h2>
          <p class="text-base md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <div class="md:flex-2 text-end pt-6 md:pt-0">
          <NuxtLink to="/" class="text-capitalize underline underline-offset-4 text-primary" rounded="0"
            >Alle ansehen</NuxtLink
          >
        </div>
      </div>

      <section class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-24">
        <article v-for="course in courses" :key="course.id" class="flex flex-col">
          <v-card class="pa-5 bg-white flex-grow">
            <v-img class="mb-5 w-full h-48" cover :src="course.image"></v-img>

            <v-card-title class="pa-0 text-[#064263] font-weight-bold text-wrap">
              {{ course.courseName }}
            </v-card-title>
            <v-card-subtitle class="pa-0 pt-4">{{ course.author }}</v-card-subtitle>

            <div class="flex items-center space-x-0 pt-3">
              <p class="pr-1">{{ course.rating }}</p>
              <v-rating class="pa-0" :length="5" :size="28" :model-value="course.rating" active-color="#D88B43" />
              <p class="pl-1">({{ course.totalRatings }})</p>
            </div>
            <div class="pb-5">
              <p class="text-[#111010] font-weight-bold text-sm pt-3">
                {{ course.price - course.discount }}€
                <span class="text-gray-400 line-through pl-2">{{ course.price }}€</span>
              </p>
            </div>
            <v-chip v-if="course.bestseller" class="bg-primary mb-2 card-bg px-6" rounded="0">Bestseller</v-chip>
          </v-card>
        </article>
      </section>

      <div class="scroll-container block md:hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-24 scroll-content">
          <article v-for="course in courses" :key="course.id" class="flex flex-col">
            <v-card class="pa-5 bg-white flex-grow">
              <v-img class="mb-5 w-full h-32" cover :src="course.image"></v-img>

              <v-card-title class="pa-0 text-[#064263] font-weight-bold text-wrap">
                {{ course.courseName }}
              </v-card-title>
              <v-card-subtitle class="pa-0 pt-4">{{ course.author }}</v-card-subtitle>

              <div class="flex items-center space-x-0 pt-3">
                <p class="pr-1">{{ course.rating }}</p>
                <v-rating class="pa-0" :length="5" :size="28" :model-value="course.rating" active-color="#D88B43" />
                <p class="pl-1">({{ course.totalRatings }})</p>
              </div>
              <div class="pb-5">
                <p class="text-[#111010] font-weight-bold text-sm pt-3">
                  {{ course.price - course.discount }}€
                  <span class="text-gray-400 line-through pl-2">{{ course.price }}€</span>
                </p>
              </div>
              <v-chip v-if="course.bestseller" class="bg-primary mb-2 card-bg px-6" rounded="0">Bestseller</v-chip>
            </v-card>
          </article>
        </div>
      </div>
    </section>
  </section>
  <!-- Further courses section end -->
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "course",
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

const isOpenArray = ref(Array(8).fill(false));

const toggleIcon = (index) => {
  isOpenArray.value[index] = !isOpenArray.value[index];
};

const length = ref(5);
const onboarding = ref(1);

const next = () => {
  onboarding.value = onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
};

const prev = () => {
  onboarding.value = onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
};

const courses = ref([
  {
    id: 1,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: true,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: true,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 3,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: true,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    courseName: "Scrum Master Certificate 2023 + Agile Scrum Certificate",
    author: "Paul Steve",
    bestseller: true,
    rating: 4.5,
    totalRatings: 32394,
    price: 550,
    discount: 350,
    image:
      "https://images.pexels.com/photos/7437090/pexels-photo-7437090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]);
</script>

<style scoped>
.dot-btn {
  width: 25px !important;
}

.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-content {
  display: inline-flex;
}

.v-card .v-card-title {
  font-size: 1rem !important;
  line-height: normal !important;
}

.testimonial-bg {
  background: rgb(50, 0, 0);
  background: linear-gradient(180deg, rgba(50, 0, 0, 1) 40%, rgba(82, 13, 15, 1) 83%, rgba(113, 0, 5, 1) 100%);
}

.filter {
  filter: brightness(0) invert(1);
}

.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at -20% 60%, rgb(153, 27, 27) 0, transparent 32%);
}

.top-companies-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 125% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at -20% 60%, rgb(153, 27, 27) 0, transparent 32%);
}

.radial-bg-2 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 100%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 0%, rgb(153, 27, 27) 0, transparent 32%);
}

.radial-bg-3 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 0%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.radial-bg-4 {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 100%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 0%, rgb(153, 27, 27) 0, transparent 32%);
}

.card-bg {
  background: rgb(51, 0, 0);
  background: linear-gradient(180deg, rgba(51, 0, 0, 1) 0%, rgba(203, 0, 9, 1) 100%, rgba(236, 0, 10, 1) 100%);
}

.icon {
  font-size: 6rem;
}
</style>
