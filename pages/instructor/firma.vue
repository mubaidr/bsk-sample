<template>
  <section class="pt-10">
    <section class="pb-10 px-10 flex items-center justify-between">
      <div>
        <p class="text-[18px]">Alle ({{ firma.length }})</p>
      </div>
      <div class="flex items-center space-x-6">
        <!-- <v-btn color="primary" variant="outlined" size="large" append-icon="mdi-import" text>
          <p class="text-capitalize text-[18px] font-medium">Importieren</p>
        </v-btn> -->
        <button class="admin-add-btn">
          <v-icon>mdi-plus</v-icon>
          <p class="text-[18px]">Neue hinzufügen</p>
        </button>

        <div class="w-[257px]">
          <v-text-field
            type="search"
            v-model="searchQuery"
            label="Suchen"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            bg-color="grey-lighten-3"
            size="small"
            flat
            hide-details
          ></v-text-field>
        </div>
      </div>
    </section>

    <v-data-table
      theme="light"
      v-model="selected"
      :items="displayedFirma"
      :loading="loading"
      :search="searchQuery"
      item-value="firma"
      show-select
    >
      <!-- Loading component -->
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>
      <!-- Loading component -->

      <!-- Status row -->
      <template v-slot:item.status="{ item }">
        <v-chip variant="flat" class="text-white" :color="getColor(item.status)">
          <p class="text-center w-24">{{ item.status }}</p>
        </v-chip>
      </template>
      <!-- Status row -->

      <!-- Aktion row -->
      <template v-slot:item.aktion="{ item }">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-horizontal" variant="text" v-bind="props"></v-btn>
          </template>

          <v-list :width="100">
            <v-list-item class="hover:bg-primary hover:text-white cursor-pointer transition duration-100">
              <v-list-item-title>
                <p>Edit</p>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="hover:bg-primary hover:text-white cursor-pointer transition duration-100">
              <v-list-item-title>
                <p>Delete</p>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <!-- Aktion row -->

      <!-- Bottom slot for pagination -->
      <template v-slot:bottom>
        <div class="flex justify-end px-10 pt-4">
          <v-pagination
            v-model="currentPage"
            active-color="#EC000A"
            variant="elevated"
            size="small"
            :length="pageCount"
            :total-visible="pageCount"
            @input="fetchData"
          ></v-pagination>
        </div>
      </template>
      <!-- Bottom slot for pagination -->
    </v-data-table>
  </section>
</template>

<script setup>
import mockData from "../../data/firmaSample.json";

const firma = ref(mockData);
const loading = ref(false);
const selected = ref([]);
const searchQuery = ref("");
const perPage = 10; // Items per page

// Pagination
const currentPage = ref(1);

// Computed property to calculate the displayed items based on pagination
const displayedFirma = computed(() => {
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return firma.value.slice(startIndex, endIndex);
});

// Calculate the total number of pages
const pageCount = computed(() => Math.ceil(firma.value.length / perPage));

// Fetch data based on pagination
const fetchData = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1500);
};

// Simulate initial data fetch
onMounted(fetchData);

// Set the color of the chip component based on the status
const getColor = (status) => {
  switch (status) {
    case "Aktiv":
      return "#A5B600";
    case "Im Gange":
      return "#D4AC53";
    case "Entwurf":
      return "#0271B0";
    default: // Inaktiv
      return "#7F7F7F";
  }
};

// Simulate loading for 1.5 seconds
onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});

definePageMeta({
  layout: "admin",
});
</script>

<style scoped></style>
