<template>
    <nav class="bg-white shadow">
        <div class="mx-auto px-4 py-2 max-w-6xl xxl:max-w-7xl sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <router-link to="/" class="font-bold text-lg">
                            <img alt="Vue logo" src="../assets/logo.png" class="h-10 w-10">
                        </router-link>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <div class="relative ml-3">
                            <router-link to="/register" class="rounded-md bg-transparent text-sm text-[#009B4C] border-2 border-[#009B4C] px-4 py-2 mr-2">Register</router-link>
                            <router-link to="/login" class="rounded-md bg-[#009B4C] text-sm text-white border-2 border-[#009B4C] focus:outline-none focus:ring-2 focus:ring-[#009B4C] focus:ring-offset-2 focus:ring-offset-white px-4 py-2">Login</router-link>
                        </div>
                    </div>
                </div>

                <div class="-mr-2 flex md:hidden">
                    <button type="button" class="inline-flex items-center justify-center rounded-md bg-[#009B4C] p-2 text-white hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#009B4C]" data-dropdown-toggle="mobile-menu" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>

                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="w-100 bg-[#009B4C] shadow-md hidden rounded-bl-lg" id="mobile-menu">
            <div class="pb-3 pt-4 px-3">
                <router-link to="/register" class="rounded-md bg-transparent text-sm text-white border-2 border-white px-4 py-2 mr-2">Register</router-link>
                <router-link to="/login" class="rounded-md bg-white text-sm text-gray-800 border-2 border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-4 py-2">Login</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>
