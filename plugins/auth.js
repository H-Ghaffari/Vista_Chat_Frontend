//وقتی صفحه را رفرش می کنیم محتویات آث یوزر پاک می شود
//پس این پلاگین را نوشتیم تا دوباره به ای پی آی درخواست بزنیم و آث یوزر را پر کنیم
export default defineNuxtPlugin(async (nuxtApp) => {
  const { authUser } = useAuth();
  try {
    //به سرور داخلی ناکست رکوئست می زنیم
    //ما وقتی به سرور داخلی ناکست درخواست را می زنیم کوکی به صورت خودکار ارسال نمی شود
    const user = await $fetch("/api/auth/me", {
      headers: useRequestHeaders(["cookie"]),
    });
    authUser.value = user;
  } catch (error) {
    authUser.value = null;
  }
});
