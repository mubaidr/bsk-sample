import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // config here
    theme: {
      defaultTheme: "dark",
      variations: false,
      themes: {
        dark: {
          colors: {
            primary: "#EC000A",
            secondary: "#b0bec5",
            accent: "#8c9eff",
            error: "#b71c1c",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
