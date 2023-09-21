import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: "top-right",
    timeout: 5000,
    rtl: true,
  });
});
