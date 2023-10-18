<template>
    <AppLayout>
        <div class="block px-4 md:flex md:justify-center md:items-start md:px-0">
            <div class="w-full mb-5 md:w-1/3">
                <div class="border border-gray-300 px-5 py-7 mt-5 rounded-xl">
                    <h3 class="font-bold text-xl mb-2">Login</h3>
                    <p class="text-gray-400 text-sm">Enter your username and password to login.</p>

                    <div class="my-3 border-b border-gray-300"></div>
                    <form @submit.prevent="handleSubmit" method="post" class="mt-3">
                        <div class="block mb-5">
                            <input type="text" v-model="email" placeholder="E-Mail" class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-[#009B4C]" />
                            <div v-show="submitted && !email" class="text-red-500 text-sm mt-1">E-mail is required.</div>
                        </div>

                        <div class="block">
                            <input type="password" v-model="password" placeholder="Password" class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-[#009B4C]" />
                            <div v-show="submitted && !password" class="text-red-500 text-sm mt-1">Password is required.</div>
                        </div>

                        <div class="my-5 border-b border-gray-300"></div>

                        <button type="submit" class="flex items-center justify-center w-full bg-[#009B4C] text-white font-bold py-2 px-4 rounded-xl disabled:bg-green-400 disabled:opacity-30">
                            <span>Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue';
import { userService } from '@/services';
export default {
    name: 'LoginView',
    components: { AppLayout },
    data() {
        return {
            email: '',
            password: '',
            submitted: false,
            errors: null,
            response: {}
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
        console.log(process.env.VUE_APP_API_URL);     
    },
    methods: {
        handleSubmit() {
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                userService.login({ email, password })
                    .then(
                        () => this.$router.push({ name: 'HomeView' }),
                        error => this.errors = error.data
                    )
            }
        }
    }
}
</script>