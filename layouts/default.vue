<template>
  <div
    v-touch:swipe.left="closeDrawer"
    v-touch:swipe.right="openDrawer"
    v-touch:swipe.bottom="onSwipeBottom"
    v-touch:swipe.top="onSwipeTop"
    v-touch:start="onTouchStart"
    class="font-body transition-colors duration-1000"
    :class="`bg-${currentPage.color}-300 text-${currentPage.color}-900`"
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
        [`bg-${currentPage.color}-300`]: true,
        'shadow-none bg-opacity-0': isAtTop,
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
        <main class="flex-grow flex flex-col justify-center overflow-hidden">
          <Nuxt class="m-4 sm:m-8" />
        </main>
        <div class="h-20">
          <transition
            enter-active-class="transition-all duration-500 ease-out"
            leave-active-class="transition-all duration-500 ease-in"
            enter-class="opacity-0"
            leave-to-class="opacity-0"
            mode="out-in"
          >
            <div v-if="nextPage" :key="nextPage.index" class="flex h-full">
              <NoSsr>
                <NuxtLink
                  :to="{ name: nextPage.routeName }"
                  class="flex flex-grow items-center transition-colors duration-500"
                  :class="`text-${currentPage.color}-900`"
                >
                  <div
                    class="w-full flex flex-col items-center text-xl text-center lowercase"
                  >
                    <font-awesome-icon icon="chevron-up" />
                    {{ nextPage.longTitle }}
                  </div>
                </NuxtLink>
              </NoSsr>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pages, { Page } from '@/assets/pages';

interface Data {
  isDrawerVisible: Boolean;
  isAtTop: Boolean;
  isAtBottom: Boolean;
  wasAtTop?: Boolean;
  wasAtBottom?: Boolean;
  pages: Page[];
  ongoingWheel: Boolean;
  ongoingWheelTimeout?: NodeJS.Timeout;
}

export default Vue.extend({
  data(): Data {
    return {
      isDrawerVisible: false,
      isAtTop: true,
      isAtBottom: false,
      wasAtTop: undefined,
      wasAtBottom: undefined,
      pages,
      ongoingWheel: false,
      ongoingWheelTimeout: undefined,
    };
  },
  computed: {
    firstPage(): Page {
      return pages[0];
    },
    currentPage(): Page {
      return this.$store.state.pageMeta;
    },
    previousPage(): Page {
      return pages[this.$store.state.pageMeta.index - 1];
    },
    nextPage(): Page {
      return pages[this.$store.state.pageMeta.index + 1];
    },
    isLastPage(): boolean {
      return this.currentPage.index === pages.length - 1;
    },
  },
  watch: {
    $route() {
      this.handleScroll();
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
    window.addEventListener('wheel', this.handleWheel);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.handleWheel);
  },
  methods: {
    closeDrawer() {
      this.isDrawerVisible = false;
    },
    openDrawer() {
      this.isDrawerVisible = true;
    },
    onTouchStart() {
      this.wasAtTop = this.getIsAtTop();
      this.wasAtBottom = this.getIsAtBottom();
    },
    onSwipeTop() {
      this.handleScroll();
      if (this.isAtBottom && this.wasAtBottom) {
        this.navigateToNextPage();
      }
    },
    onSwipeBottom() {
      this.handleScroll();
      if (this.isAtTop && this.wasAtTop) {
        this.navigateToPreviousPage();
      }
    },
    navigateToNextPage() {
      if (this.nextPage) {
        this.$router.push({ name: this.nextPage.routeName });
      }
    },
    navigateToPreviousPage() {
      if (this.previousPage) {
        this.$router.push({ name: this.previousPage.routeName });
      }
    },
    getIsAtTop(): boolean {
      return window.scrollY === 0;
    },
    getIsAtBottom(): boolean {
      return (
        Math.ceil(window.pageYOffset) + window.innerHeight >=
        document.body.scrollHeight
      );
    },
    handleScroll() {
      const isAtTop = this.getIsAtTop();
      if (isAtTop && !this.isAtTop) {
        this.isAtTop = true;
      } else if (!isAtTop && this.isAtTop) {
        this.isAtTop = false;
      }
      const isAtBottom = this.getIsAtBottom();

      if (isAtBottom && !this.isAtBottom) {
        this.isAtBottom = true;
      } else if (!isAtBottom && this.isAtBottom) {
        this.isAtBottom = false;
      }
    },
    preventMultipleWheelEvents() {
      if (this.ongoingWheelTimeout !== undefined) {
        clearTimeout(this.ongoingWheelTimeout);
      }
      this.ongoingWheelTimeout = setTimeout(() => {
        this.ongoingWheel = false;
      }, 200);
    },
    handleWheel(event: WheelEvent) {
      this.handleScroll();
      if (event.ctrlKey || (event.deltaY < 30 && event.deltaY > -30)) {
        return;
      }
      this.preventMultipleWheelEvents();
      if (this.ongoingWheel) {
        return;
      } else {
        this.ongoingWheel = true;
      }
      if (event.deltaY < 0 && this.isAtTop && this.previousPage) {
        this.$router.push({ name: this.previousPage.routeName });
      } else if (event.deltaY > 0 && this.nextPage && this.isAtBottom) {
        this.$router.push({ name: this.nextPage.routeName });
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
