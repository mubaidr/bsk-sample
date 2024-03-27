<template>
  <section class="bg-black">
    <div class="my-24 container px-4 lg:px-0">
      <h3 class="text-center text-4xl lg:text-5xl xl:text-6xl pb-14">Häufig gestellte Fragen</h3>

      <v-card class="bg-black w-full lg:w-[835px] lg:mx-auto" hide-slider>
        <v-tabs v-model="tab" show-arrows="false" align-tabs="center" height="70">
          <div class="bg-white text-black">
            <v-tab value="one" class="text-capitalize h-28" hide-slider="true">
              <p class="text-base">Alle</p>
            </v-tab>
            <v-tab value="two" class="text-capitalize h-28" hide-slider="true">
              <p class="text-base">Erste Schritte</p>
            </v-tab>
            <v-tab value="three" class="text-capitalize h-28" hide-slider="true">
              <p class="text-base">Preisgestaltung</p>
            </v-tab>
          </div>
        </v-tabs>

        <v-card-text class="mt-7">
          <v-window v-model="tab">
            <v-window-item value="one">
              <div v-for="faqItem in faqItems" :key="faqItem.title">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-close">
                      <h4 class="text-[12px] leading-5 md:leading-7 md:text-[20px] pr-6">{{ faqItem.title }}</h4>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <p class="text-[10px] md:text-base pt-4 pb-6 font-light leading-4">
                        {{ faqItem.text }}
                      </p>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-divider :thickness="3" class="border-opacity-100"></v-divider></div
            ></v-window-item>

            <v-window-item value="two">
              <div v-for="faqItem in faqItems" :key="faqItem.title">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-close">
                      <h4 class="text-[12px] leading-5 md:leading-7 md:text-[20px] pr-6">{{ faqItem.title }}</h4>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <p class="text-[10px] md:text-base pt-4 pb-6 font-light leading-4">{{ faqItem.text }}</p>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-divider :thickness="3" class="border-opacity-100"></v-divider>
              </div>
            </v-window-item>

            <v-window-item value="three">
              <div v-for="faqItem in faqItems" :key="faqItem.title">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-close">
                      <h4 class="text-[12px] leading-5 md:leading-7 md:text-[20px] pr-6">{{ faqItem.title }}</h4>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <p class="text-[10px] md:text-base pt-4 pb-6 font-light leading-4">{{ faqItem.text }}</p>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-divider :thickness="3" class="border-opacity-100"></v-divider>
              </div>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(null);

const faqItems = ref([
  {
    title: "Wie hilft mir die Kontaktverwaltungsfunktion, den Überblick über Kundenund Partner zu behalten?",
    text: "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
  },
  {
    title:
      "Kann ich die Dashboards und die Berichtsfunktion anpassen, um die Kennzahlen anzuzeigen, die für mein Unternehmen am wichtigsten sind?",
    text: "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
  },
  {
    title:
      "Wie hilft mir die Aufgabenverwaltungsfunktion, Aufgaben an mein Team zu delegieren und den Fortschritt zu verfolgen?",
    text: "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
  },
  {
    title: "Kann ich mit meinem Team in Echtzeit mit allen Tools zusammenarbeiten?",
    text: "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
  },
  {
    title: "Kann ich mit meinem Team in Echtzeit mit allen Tools zusammenarbeiten?",
    text: "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
  },
  {
    title:
      "Wie hilft mir die App, bei der Zusammenarbeit mit Freiberuflern und Auftragnehmern die Vorschriften einzuhalten?",
    text: "Behalten Sie den Überblick über Ihre Kontakte, gewinnen Sie wertvolle Erkenntnisse, analysieren Sie Live-Daten und Leistungskennzahlen.",
  },
]);
</script>

<style scoped>
.v-card-text {
  padding: 0 !important;
}

.v-expansion-panel-title {
  @apply bg-black p-6 md:text-xl lg:text-2xl;
}

.v-slide-group-item--active {
  @apply bg-primary text-gray-50;
}

.v-tab.v-tab.v-btn {
  border: 7px solid white;
}
</style>
