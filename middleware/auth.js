//صفحاتی که به اهراز هویت نیاز دارند
export default defineNuxtRouteMiddleware(() => {
  const { authUser } = useAuth();
  if (!authUser.value) {
    return navigateTo("/login");
  }
});
