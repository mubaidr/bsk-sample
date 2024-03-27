<template>
  <div class="testimonial-bg py-36">
    <div class="container px-4 lg:px-0">
      <section class="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <v-icon color="primary" class="icon -m-4">mdi-format-quote-open</v-icon>
          <h3 class="font-archivo text-3xl md:text-4xl lg:text-5xl pb-4 font-bold leading-snug">
            Worüber sie sagen <span class="text-primary">Intellect Institute</span>
          </h3>
          <p class="leading-loose w-full lg:w-4/5 text-[18px]">
            Mehr als 3000 Benutzern wurde durch World Online Course geholfen.
          </p>
        </div>
        <div>
          <v-card theme="light" flat class="rounded-xl relative">
            <v-window v-model="onboarding">
              <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
                <v-card class="d-flex flex-column justify-center card-content">
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
                  <p class="text-lg md:text-xl lg:text-2xl font-archivo leading-relaxed py-8">
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
                        size="50"
                        class="block d-md-none mr-2"
                      ></v-avatar>
                      <div class="flex flex-col font-archivo">
                        <span class="text-[10px] md:text-base pb-1 md:pb-0">Product Designer at Tokopedia</span>
                        <span class="text-xs sm:text-sm md:text-base font-bold">Resky Fernanda</span>
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const length = ref(5);
const onboarding = ref(1);

const next = () => {
  onboarding.value = onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
};

const prev = () => {
  onboarding.value = onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
};
</script>

<style scoped>
.dot-btn {
  width: 30px !important;
}

.testimonial-bg {
  background: rgb(50, 0, 0);
  background: linear-gradient(180deg, rgba(50, 0, 0, 1) 40%, rgba(82, 13, 15, 1) 83%, rgba(113, 0, 5, 1) 100%);
}

.card-content {
  padding: 2rem !important;
}

.icon {
  font-size: 6rem;
}
</style>
