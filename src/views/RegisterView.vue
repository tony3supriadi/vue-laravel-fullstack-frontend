<template>
    <AppLayout>
        <div class="block px-4 md:flex md:justify-center md:items-start md:px-0">
            <div class="w-full mb-5 md:w-1/3">
                <div class="border border-gray-300 px-5 py-7 mt-5 rounded-xl">
                    <h3 class="font-bold text-xl mb-2">Register</h3>
                    <p class="text-gray-400 text-sm">Enter your data to register.</p>

                    <div class="my-3 border-b border-gray-300"></div>

                    <input type="text" v-model="name" placeholder="Full Name" class="w-full border border-gray-300 px-4 py-2 rounded-lg mb-5 focus:border-[#009B4C]" />
                    <input type="text" v-model="username" placeholder="E-Mail" class="w-full border border-gray-300 px-4 py-2 rounded-lg mb-5 focus:border-[#009B4C]" />
                    <input type="password" v-model="password" placeholder="Password" class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-[#009B4C]" />

                    <div class="my-5 border-b border-gray-300"></div>

                    <form action="" :on-submit="loginSubmit" method="post" class="mt-3">
                        <button type="submit" class="flex items-center justify-center w-full bg-[#009B4C] text-white font-bold py-2 px-4 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <span>Register Now!</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue';
export default {
    name: 'RegisterView',
    components: { AppLayout }
}
</script>