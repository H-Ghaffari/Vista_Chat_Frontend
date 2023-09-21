<template>
    <div class="flex items-center justify-center gap-x-2">
        <div class="bg-gray6 text-gray3 rounded-md p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M16.2 23.347h-13c-.96 0-1.75-.79-1.75-1.75v-13c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v8c0 4.42-2.33 6.75-6.75 6.75Zm-8-20c-3.58 0-5.25 1.67-5.25 5.25v13c0 .14.11.25.25.25h13c3.58 0 5.25-1.67 5.25-5.25v-8c0-3.58-1.67-5.25-5.25-5.25h-8Zm9 7.5h-10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Zm-10 5h7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-7c-.41 0-.75.34-.75.75s.34.75.75.75Z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div class="bg-gray6 text-gray3 rounded-md p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path fill="currentColor"
                    d="M12.22 21.127c-2.33 0-4.66-.37-6.87-1.11-.84-.29-1.48-.88-1.76-1.65-.29-.77-.19-1.62.27-2.38l1.15-1.91c.24-.4.46-1.2.46-1.67v-2.89c0-3.72 3.03-6.75 6.75-6.75s6.75 3.03 6.75 6.75v2.89c0 .46.22 1.27.46 1.68l1.14 1.9c.43.72.51 1.59.22 2.38a2.72 2.72 0 0 1-1.71 1.65c-2.2.74-4.53 1.11-6.86 1.11Zm0-16.86c-2.89 0-5.25 2.35-5.25 5.25v2.89c0 .73-.3 1.81-.67 2.44l-1.15 1.91c-.22.37-.28.76-.15 1.09.12.34.42.6.83.74a20 20 0 0 0 12.79 0c.36-.12.64-.39.77-.75s.1-.75-.1-1.08l-1.15-1.91c-.38-.65-.67-1.72-.67-2.45v-2.88c0-2.9-2.35-5.25-5.25-5.25Z" />
                <path fill="currentColor"
                    d="M14.08 4.538c-.07 0-.14-.01-.21-.03-.29-.08-.57-.14-.84-.18-.85-.11-1.67-.05-2.44.18-.28.09-.58 0-.77-.21a.742.742 0 0 1-.14-.78 2.724 2.724 0 0 1 2.55-1.74c1.14 0 2.14.68 2.55 1.74.1.27.05.57-.14.78-.15.16-.36.24-.56.24ZM12.219 23.407c-.99 0-1.95-.4-2.65-1.1-.7-.7-1.1-1.66-1.1-2.65h1.5c0 .59.24 1.17.66 1.59.42.42 1 .66 1.59.66 1.24 0 2.25-1.01 2.25-2.25h1.5c0 2.07-1.68 3.75-3.75 3.75Z" />
            </svg>
        </div>
        <div class="bg-gray6 text-gray3 rounded-md p-2 pl-3 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                <path fill="currentColor"
                    d="M12.159 12.614h-.08a.543.543 0 0 0-.18 0c-2.9-.09-5.09-2.37-5.09-5.18 0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03Zm-.16-8.87a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68a3.7 3.7 0 0 0-3.69-3.69ZM12.17 23.544c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z" />
            </svg>
            <span class="inline-block text-sm ml-4 mr-1">
                <slot name="userEmail"></slot>
            </span>
            <button class="cursor-pointer relative" @click="showLogout = !showLogout">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                    <path fill="currentColor"
                        d="M7.994 10.333a.667.667 0 0 1-.427-.153l-4-3.334A.668.668 0 1 1 4.42 5.82l3.574 2.986 3.573-2.88a.667.667 0 0 1 .94.1.667.667 0 0 1-.093.974l-4 3.22a.666.666 0 0 1-.42.113Z" />
                </svg>
                <div v-show="showLogout" @click="logout"
                    class="bg-white transition-all rounded border px-10 py-2 text-sm hover:text-red-500 absolute -left-3 top-6">
                    خروج
                </div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const showLogout = ref(false);
const toast = useToast();
const { authUser } = useAuth();
// const { $socket } = useNuxtApp();

async function logout() {
    await useFetch('/api/auth/logout', {
        method: 'POST',
        Headers: {
            Accept: "application/json",
        }
    });
    authUser.value = null;
    // $socket.io.emit('disconnect');
    toast.success('از سیستم خارج شدید');
    return navigateTo('/login');

}
</script>

<style lang="scss" scoped></style>