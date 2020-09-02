<template>
  <div
    class="font-body transition-colors duration-1000"
    :class="`bg-${currentPage.color}-300`"
  >
    <transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isDrawerVisible"
        class="md:hidden z-20 w-screen h-screen fixed"
        @click="closeDrawer"
      >
        <div class="w-full h-full bg-black opacity-50"></div>
      </div>
    </transition>
    <div
      class="transition-transform md:transform-none duration-300 ease-in-out transform -translate-x-56 fixed z-30 shadow-2xl md:shadow-none top-0 w-56 md:w-64 bg-gray-800 h-screen flex flex-col overflow-y-auto"
      :class="{ 'transform-none': isDrawerVisible }"
    >
      <NuxtLink :to="{ name: 'index' }">
        <img
          class="w-56 h-56 md:w-64 md:h-64"
          alt="Miquel in the office"
          src="~/assets/images/miquel.jpg"
        />
      </NuxtLink>
      <div class="w-full h-px bg-gray-400"></div>
      <div class="font-display w-full text-center p-2">
        <h1 class="text-gray-200">Miquel Romero Sanfeliu</h1>
        <h2 class="text-gray-400 lowercase font-mono">Frontend Developer</h2>
      </div>
      <nav class="mt-6 lg:mt-8">
        <ul class="w-full flex flex-col space-y-2">
          <li v-for="page in pages" :key="page.index">
            <NuxtLink
              class="transition-shadow duration-300 ease-in-out font-mono shadow-inline flex h-10 items-center text-gray-200"
              :class="`hover:bg-${page.color}-300 hover:text-${page.color}-900`"
              :active-class="`bg-${page.color}-300 text-${page.color}-900 shadow-sm hover:shadow-none`"
              exact
              :to="{ name: page.routeName }"
            >
              <div class="mx-4 text-right lowercase flex-grow text-lg">
                {{ page.title }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <header
      :class="{
        [`bg-${currentPage.color}-300 text-${currentPage.color}-900`]: true,
        'shadow-none bg-opacity-0': atTopOfPage,
      }"
      class="w-full z-10 shadow-lg h-20 md:hidden fixed top-0 left-0 transition-all duration-1000"
    >
      <div class="h-full px-4 flex justify-between items-center">
        <h1 class="px-2 flex-grow">
          <span class="text-2xl font-display font-bold">miquel</span>
          <span class="font-mono font-light text-lg">.dev</span>
        </h1>
        <button
          class="font-display text-lg p-2 lowercase focus:outline-none"
          @click="openDrawer"
        >
          Menu
        </button>
      </div>
    </header>
    <div
      class="min-h-screen overflow-x-hidden md:ml-64 flex-grow flex flex-col"
    >
      <div class="pt-20 md:pt-0 flex flex-col flex-grow">
        <main class="flex-grow flex flex-col justify-center">
          <Nuxt class="m-4 p-8 rounded-lg shadow-md bg-white bg-opacity-75" />
        </main>
        <transition
          enter-active-class="transition-all duration-500 ease-out"
          leave-active-class="transition-all duration-500 ease-in"
          enter-class="opacity-0"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <div :key="nextPageNavigation.index" class="h-20 flex">
            <NuxtLink
              :to="{ name: nextPageNavigation.routeName }"
              class="flex flex-grow items-center transition-colors duration-500"
              :class="`md:hover:bg-${currentPage.color}-200 text-${currentPage.color}-900`"
            >
              <div class="w-full font-display text-xl text-center lowercase">
                {{ nextPageNavigation.longTitle }}
              </div>
            </NuxtLink>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pages, { Page } from '@/assets/pages';

export default Vue.extend({
  data() {
    return {
      isDrawerVisible: false,
      atTopOfPage: true,
      pages,
    };
  },
  computed: {
    firstPage(): Page {
      return pages[0];
    },
    currentPage(): Page {
      return this.$store.state.pageMeta;
    },
    nextPage(): Page {
      return pages[this.$store.state.pageMeta.index + 1];
    },
    nextPageNavigation(): Page {
      return this.nextPage || this.firstPage;
    },
  },
  watch: {
    $route() {
      if (!this.atTopOfPage) {
        this.atTopOfPage = true;
      }
      if (this.isDrawerVisible) {
        this.isDrawerVisible = false;
      }
    },
    isDrawerVisible(isDrawerVisible) {
      if (isDrawerVisible) {
        document.body.classList.add('overflow-y-hidden');
      } else {
        document.body.classList.remove('overflow-y-hidden');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    closeDrawer() {
      this.isDrawerVisible = false;
    },
    openDrawer() {
      this.isDrawerVisible = true;
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.atTopOfPage) this.atTopOfPage = false;
      } else if (!this.atTopOfPage) {
        this.atTopOfPage = true;
      }
    },
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://miquel.dev${
            this.$route.path === '/' ? '' : this.$route.path
          }`,
        },
      ],
    };
  },
});
</script>
