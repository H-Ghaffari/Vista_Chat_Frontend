<template>
    <div class="container mx-auto flex justify-between items-center py-2">
        <div>
            <ul class="flex items-center gap-x-4">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
                        <path fill="#FD2F70" fill-rule="evenodd"
                            d="M7 3.333a1 1 0 0 1 1-1h40a1 1 0 0 1 1 1v40a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-40Zm8.608 18.681.014-9.613c2.518-.166 9.426 0 12.523-.022 4.584-.032 7.734-.49 9.88 2.67 2.108 3.108.855 6.992-1.818 8.634-1.375.844-2.312.9-3.848.912-.756.006-.742.057-1.138-.363-.626-.664-2.8-2.689-3.113-3.2.241-.482 2.707-2.534 3.051-3.22l-10.066.006V27.88c.465-.207 3.195-3.158 3.228-3.202.77.765 4.86 4.78 5.43 5.324-.756.766-2.667 2.613-3.337 3.214-1.173-1.145-9.793-10.185-10.806-11.203ZM10.51 40.075l9.112-.02c-.39-.417-8.698-8.828-9.107-9.078l-.005 9.098ZM29.75 30.003c.593.454 1.22 1.172 1.764 1.72.583.588 1.09 1.096 1.678 1.679l5.127 5.148c.314.313.56.551.868.863.318.322.426.618.958.665l6.85-.01c-.202-.413-4.514-4.664-5.31-5.425l-2.74-2.67c-.639-.655-2.327-2.186-2.616-2.72l.385-.192c1.772-.757 3.08-1.336 4.5-2.965 2.85-3.273 3.899-7.808 2.088-11.996-.876-2.025-2.034-3.334-3.434-4.466-3.707-2.998-8.017-2.346-13.562-2.343-5.25.002-10.555.075-15.797-.005.069 5.213-.064 10.52.01 15.693.027 1.929-.397 1.192 1.795 3.39 3.497 3.506 6.891 6.986 10.43 10.456-.153.335-1.21 1.31-1.527 1.618-.493.478-1.198 1.082-1.545 1.63l10.095-.005-.017-10.065Z"
                            clip-rule="evenodd" />
                    </svg>
                </li>
                <li>
                    <a class="block p-2 text-sm text-gray2 cursor-pointer">معامله P2P</a>
                </li>
                <li>
                    <a class="block p-2 text-sm text-gray2 cursor-pointer">معامله سریع</a>
                </li>
                <li>
                    <a class="block p-2 text-gray2 text-sm cursor-pointer">ثبت درخواست معامله</a>
                </li>
                <li>
                    <a class="block p-2 text-gray2 text-sm cursor-pointer">درباره ما</a>
                </li>
                <li>
                    <a class="block p-2 text-gray2 text-sm cursor-pointer">تماس با ما</a>
                </li>
                <li>
                    <a class="block p-2 text-gray2 text-sm cursor-pointer">وبلاگ</a>
                </li>
            </ul>
        </div>

        <ClientOnly>
            <HeaderUserInfo v-if="authUser">
                <template #userEmail>
                    {{ authUser.email }}
                </template>
            </HeaderUserInfo>
            <HeaderAuthButtons v-else />
        </ClientOnly>

    </div>
</template>

<script setup>
const { authUser } = useAuth();


</script>

<style scoped></style>