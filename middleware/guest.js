//اگر کاربر از قبل لاگین بود
export default defineNuxtRouteMiddleware(() => {
  const { authUser } = useAuth();
  if (authUser.value) {
    return navigateTo("/");
  }
});
