<template>
    <div class="min-h-full">
        <HeaderComponent />
        <main class="min-h-screen">
            <div class="mx-auto py-3 max-w-6xl xxl:max-w-7xl md:py-6 sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    name: 'AppLayout',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>