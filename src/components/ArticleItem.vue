<template>
    <div>
        <router-link :to="'/blog/' + article.slug" class="block static w-full bg-white rounded-lg mb-6 md:mb-4 md:p-4 md:-mx-4 md:hover:bg-gray-50">
            <p class="text-gray-400 text-sm border-l-2 leading-4 border-gray-300 pl-4 mb-3">{{ article.date }}</p>
            <h3 class="font-semibold line-clamp-1 mb-2">{{ article.title }}</h3>

            <div v-html="article.content" class="text-sm line-clamp-2 text-gray-500 leading-6 mb-3"></div>
            <p class="text-sm text-[#009B4C]">Read more...</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'ArticleItem',
        props: {
            article: {
                slug: String,
                title: String,
                date: String,
                content: String,
            }
        }
    }
</script>
