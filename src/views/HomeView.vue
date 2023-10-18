<template>
  <AppLayout>
    <div class="block px-4 md:flex md:justify-center md:items-start md:px-0">
        <div class="w-full mb-5 md:w-2/3 md:pr-6">
          <h2 class="text-xl font-bold mb-4">Latest Articles:</h2>
          <ArticleItem 
            v-for="(article, index) in articles" 
            :key="index" 
            :article="article" 
          />

          <div v-if="articles.length === 0" class="text-gray-400 italic text-sm">
            No articles found.
          </div>

          <div v-if="articles.length > 0" class="flex items-center justify-between">
            <router-link to="/blog" class="flex text-sm text-gray-400 px-6 py-2 border border-gray-400 rounded-full hover:border-[#009B4C] hover:text-[#009B4C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
              <span>Previous</span>
            </router-link>

            <router-link to="/blog" class="flex text-sm text-gray-400 px-6 py-2 border border-gray-400 rounded-full hover:border-[#009B4C] hover:text-[#009B4C]">
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="w-full md:w-1/3"></div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue';
import ArticleItem from '@/components/ArticleItem.vue';
export default {
  name: 'HomeView',
  components: {
    AppLayout,
    ArticleItem
  },
  data() {
    return {
      articles: [
        {
          slug: 'lorem-ipsum',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: '2023-01-01',
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec viverra dolor. Proin gravida hendrerit nisl. Duis gravida varius scelerisque. Cras facilisis quam quis ligula vulputate, id molestie orci feugiat. Nulla aliquet nisl diam, cursus dignissim purus ultricies eu. Donec sit amet tempus velit. Maecenas facilisis, ex in gravida fermentum, tortor augue consequat lacus, id consequat velit diam vel lectus. Curabitur luctus sollicitudin faucibus. Nam egestas diam ex. Curabitur vitae porttitor sem. Etiam quis eros in lacus viverra dignissim eget sed dolor. Nullam rhoncus imperdiet nulla, sit amet rhoncus metus placerat ac.</p><p>Donec laoreet, nunc ac facilisis ullamcorper, ipsum nulla dignissim augue, at suscipit turpis arcu ut massa.Proin mattis dolor eget augue maximus euismod.Nunc tempor lorem vel ornare aliquet.Curabitur pulvinar sodales lectus, at cursus mi fermentum ut.Integer aliquet, justo a vulputate suscipit, nulla orci fringilla sapien, id feugiat quam eros nec turpis.Phasellus faucibus commodo augue.Nullam bibendum nibh non dolor luctus, ut dignissim sapien maximus.Suspendisse maximus bibendum ornare.Ut imperdiet, mi lobortis vehicula sollicitudin, justo quam viverra massa, sagittis tempor nibh diam in neque.Fusce sodales, nulla nec tempus rhoncus, arcu lacus pretium ipsum, et dignissim dolor sapien at neque.</p><p>Pellentesque at nunc fermentum, iaculis nibh nec, finibus purus.Proin dolor libero, tempor accumsan ultrices sit amet, pharetra commodo ante.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas molestie cursus orci, quis interdum erat maximus et.Duis vulputate metus vel lacus imperdiet, vitae venenatis lacus vestibulum.Quisque pulvinar eget metus vitae vehicula.Integer laoreet dignissim sapien a ultricies.Ut tempor interdum ex sed efficitur.In in condimentum erat.Pellentesque cursus, augue at mattis fringilla, diam libero suscipit elit, vitae imperdiet quam dolor eget odio.</p>'
        }
      ]
    }
  }
}
</script>
