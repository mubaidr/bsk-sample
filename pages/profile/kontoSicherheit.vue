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
            <h2 class="font-bold text-2xl">Konto Sicherheit</h2>
            <p class="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, odit.</p>
          </div>

          <form action="" class="py-10">
            <div>
              <h3 class="pb-7">Email</h3>
              <v-text-field
                placeholder="admin@gmail.com"
                variant="outlined"
                type="email"
                append-inner-icon="mdi-pencil-outline"
              ></v-text-field>

              <h3 class="pt-4">Password</h3>
              <v-text-field
                type="password"
                class="pt-6"
                placeholder="Enter current password"
                variant="outlined"
              ></v-text-field>
              <v-text-field type="password" placeholder="Enter new password" variant="outlined"></v-text-field>
              <v-text-field type="password" placeholder="Re-type new password" variant="outlined"></v-text-field>
            </div>

            <div class="w-full">
              <v-btn color="primary w-full text-capitalize" size="large">Kennwort ändern</v-btn>
            </div>
          </form>
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
