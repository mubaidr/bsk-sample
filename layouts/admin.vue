<template>
  <section>
    <sidebar
      :class="{ fixed: !collapsed, absolute: collapsed }"
      :style="{ width: collapsed ? '154px' : '330px' }"
      class="bg-black h-full transition-width duration-100 ease-in-out"
    >
      <div class="flex justify-center pt-10">
        <v-img :width="50.19" :height="56" src="/logo.svg"></v-img>
      </div>
      <nav class="p-10">
        <ul class="space-y-3">
          <li v-for="sidebarLink in sidebarLinks" :key="sidebarLink.id">
            <NuxtLink :to="sidebarLink.path" class="admin-sidebar">
              <v-icon :size="24">{{ sidebarLink.icon }}</v-icon>
              <p :class="{ 'text-sm font-medium tracking-[-1%]': !collapsed, 'sr-only': collapsed }">
                {{ sidebarLink.name }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </sidebar>

    <main
      :class="{ 'ml-[330px]': !collapsed, 'ml-[154px]': collapsed }"
      class="min-h-screen bg-white transition-margin"
    >
      <header class="bg-white shadow-md p-10">
        <div class="flex items-center space-x-6 w-full">
          <v-icon :size="24" class="hover:cursor-pointer" role="button" @click="collapseSidebar">mdi-menu</v-icon>
          <p class="text-2xl font-medium text-capitalize">{{ computedRouteName }}</p>
        </div>
      </header>
      <!-- Main content -->
      <slot />
      <!-- Main content -->
    </main>
  </section>
</template>

<script setup>
const route = useRoute();
const collapsed = ref(false);

// Dynamically get the route name
const computedRouteName = computed(() => {
  return route.path.split("/").pop();
});

const collapseSidebar = () => {
  collapsed.value = !collapsed.value;
};

const sidebarLinks = ref([
  {
    id: 1,
    name: "Kurse",
    path: "/instructor/kurse",
    icon: "mdi-book-open-outline",
  },
  {
    id: 2,
    name: "Benutzer",
    path: "/instructor/benutzer",
    icon: "mdi-account",
  },
  {
    id: 3,
    name: "Firma",
    path: "/instructor/firma",
    icon: "mdi-domain",
  },
]);
</script>

<style scoped>
.router-link-active {
  background: #ec000a;
}

.sidebar {
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 154px;
}

.collapsed nav {
  display: none;
}

.collapsed .admin-sidebar p {
  display: none;
}

.collapsed .v-img {
  margin: 0 auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
