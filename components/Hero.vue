<template>
  <main :class="{ 'hero-bg': !isMediumScreen, 'bg-black': isMediumScreen }">
    <section
      class="container px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-14 md:h-screen md:max-h-[772px] items-center py-10 lg:py-0"
    >
      <div>
        <h1
          class="text-2xl md:text-[32px] lg:text-[50px] font-archivo font-weight-bold pb-6 md:pb-8 lg:pb-10 leading-none"
        >
          <span class="text-primary">Online-Lernen</span> ist jetzt viel einfacher
        </h1>
        <p class="font-weight-regular pb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptas debitis reprehenderit ut dignissimos
          mollitia, praesentium id ratione recusandae? Quos, aperiam. Facilis doloremque tenetur aliquam.
        </p>

        <div class="d-flex flex-wrap justify-center justify-md-start w-full">
          <v-btn
            size="large"
            variant="outlined"
            class="text-capitalize w-full sm:w-auto font-weight-light mb-3 mb-sm-0 mr-sm-2 mr-md-3"
            >Kontaktiere uns</v-btn
          >
          <v-btn
            color="primary"
            class="text-capitalize w-full sm:w-auto font-weight-light"
            size="large"
            background-color="primary"
            >Kontaktiere uns</v-btn
          >
        </div>
      </div>
      <div class="pt-10 pt-sm-0">
        <v-img :src="imageLink"></v-img>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

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

const imageLink = ref(
  "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
</script>

<style scoped>
.hero-bg {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 100% 10%, rgb(127, 29, 29) 0, transparent 32%),
    radial-gradient(at 0% 100%, rgb(153, 27, 27) 0, transparent 32%);
}

.v-btn--size-large {
  --v-btn-size: 18px;
  --v-btn-height: 44px;
  font-size: var(--v-btn-size);
  min-width: 78px;
  padding: 0 20px;
}
</style>
