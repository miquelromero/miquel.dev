<template>
  <div
    class="font-body transition-colors duration-300 ease-in-out"
    :class="`bg-${color}-200`"
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
      <img
        class="w-56 h-56 md:w-64 md:h-64"
        alt="Miquel in the office"
        src="~/assets/images/miquel.jpg"
      />
      <div class="w-full h-px bg-gray-400"></div>
      <div class="font-display w-full text-center p-2">
        <h1 class="text-gray-200">
          Miquel Romero Sanfeliu
        </h1>
        <h2 class="text-gray-400 lowercase font-mono">
          Frontend Developer
        </h2>
      </div>
      <nav class="mt-6 lg:mt-8">
        <ul class="w-full flex flex-col space-y-2">
          <li v-for="(page, itemIndex) in pages" :key="itemIndex">
            <NuxtLink
              class="transition-shadow duration-300 ease-in-out font-mono shadow-inline flex h-10 items-center text-gray-200 hover:shadow-inner"
              :class="`hover:bg-${page.color}-200 hover:text-${page.color}-800`"
              :active-class="`bg-${page.color}-200 text-${page.color}-800 shadow-sm hover:shadow-none`"
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
        [`bg-${color}-100 text-${color}-800`]: true,
        'shadow-none bg-opacity-0': atTopOfPage,
      }"
      class="w-full z-10 shadow-lg h-20 md:hidden fixed top-0 left-0 transition-all duration-300 ease-in-out"
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
        <main class="flex-grow">
          <transition
            enter-active-class="transition-all duration-300 ease-in-out"
            leave-active-class="transition-all duration-300 ease-in-out"
            enter-class="opacity-0 transform translate-y-64"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform translate-y-64"
            mode="out-in"
          >
            <Nuxt
              class="m-4 p-8 rounded-lg shadow-md"
              :class="`bg-${color}-100`"
            />
          </transition>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pages from '@/assets/pages';

export default Vue.extend({
  data() {
    return {
      isDrawerVisible: false,
      atTopOfPage: true,
      pages,
    };
  },
  computed: {
    title() {
      return this.$store.state.pageMeta.title;
    },
    color() {
      return this.$store.state.pageMeta.color;
    },
  },
  watch: {
    $route() {
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
});
</script>
