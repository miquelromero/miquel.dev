<template>
  <div
    ref="container"
    v-touch:swipe.left="closeDrawer"
    v-touch:swipe.right="openDrawer"
    v-touch:swipe.bottom="onSwipeBottom"
    v-touch:swipe.top="onSwipeTop"
    v-touch:start="onTouchStart"
    :style="containerStyle"
    class="font-body bg-primary-200 text-primary-900 overflow-y-scroll h-screen w-screen transition-colors duration-600"
  >
    <Transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isDrawerVisible"
        class="md:hidden z-30 w-screen h-screen fixed"
        @click="closeDrawer"
      >
        <div class="w-full h-full bg-black opacity-50"></div>
      </div>
    </Transition>
    <div
      class="transition-transform md:transform-none duration-300 ease-in-out transform -translate-x-56 fixed z-30 shadow-2xl md:shadow-none top-0 w-56 md:w-64 bg-gray-800 h-screen flex flex-col overflow-y-auto"
      :style="{ backgroundImage: `url(${pattern})` }"
      :class="{ 'transform-none': isDrawerVisible }"
    >
      <NuxtLink
        :to="{ name: 'index' }"
        class="w-56 h-56 md:w-64 md:h-64 flex-shrink-0"
      >
        <img
          class="w-full h-full"
          width="100%"
          height="100%"
          alt="Miquel in the office"
          src="~/assets/images/miquel.jpg"
        />
      </NuxtLink>
      <div class="w-full h-px bg-gray-400"></div>
      <div class="w-full text-center p-2">
        <h1 class="text-gray-200">Miquel Romero Sanfeliu</h1>
        <h2 class="text-gray-400 lowercase font-mono">Frontend Developer</h2>
      </div>
      <nav class="mt-6 lg:mt-8">
        <ul class="w-full flex flex-col space-y-2">
          <li v-for="page in pages" :key="page.index">
            <NuxtLink
              class="transition-shadow duration-300 ease-in-out font-mono  flex h-10 items-center text-gray-200"
              :class="`hover:bg-${page.colorClass}-200 hover:text-${page.colorClass}-900`"
              :active-class="`bg-${page.colorClass}-200 text-${page.colorClass}-900 shadow-sm hover:shadow-none`"
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
      <div class="flex-grow" />
      <div
        class="py-4 px-2 md:px-4 flex justify-between items-center text-sm font-mono"
      >
        <a
          v-for="(link, index) in bottomLinks"
          :key="index"
          class="p-2 text-gray-400 hover:text-white flex items-center"
          :href="link.href"
          target="_blank"
          rel="noopener"
        >
          <AppIcon class="mr-2" width="20" height="20" :icon="link.icon" />{{
            link.text
          }}
        </a>
      </div>
    </div>
    <header
      :class="isAtTop ? 'shadow-none bg-transparent' : 'bg-primary-100'"
      class="w-full z-20 shadow-lg h-20 md:hidden fixed top-0 left-0 transition-all duration-600"
    >
      <div class="h-full px-4 flex justify-between items-center">
        <Transition
          enter-active-class="transition-all duration-300 ease-in-out"
          leave-active-class="transition-all duration-300 ease-in-out"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <h1
            :key="currentPage.index"
            class="text-primary-900 px-2 flex-grow text-2xl font-bold lowercase"
          >
            {{ currentPage.title }}
          </h1>
        </Transition>
        <button
          class="transition-colors duration-600 text-primary-900 text-lg p-2 lowercase focus:outline-none"
          @click="openDrawer"
        >
          Menu
        </button>
      </div>
    </header>
    <div
      class="min-h-screen overflow-x-hidden md:ml-64 flex-grow flex flex-col"
    >
      <div class="pt-20 md:pt-0 flex flex-col flex-grow overflow-hidden">
        <main class="p-4 sm:p-8 flex-grow flex flex-col">
          <Nuxt class="container mx-auto" />
        </main>

        <div class="h-20">
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-class="opacity-0"
            leave-to-class="opacity-0"
            mode="out-in"
          >
            <div v-if="nextPage" :key="nextPage.index" class="flex h-full">
              <NoSsr>
                <NuxtLink
                  :to="{ name: nextPage.routeName }"
                  class="flex text-primary-900 flex-grow items-center transition-colors duration-300"
                >
                  <div
                    class="w-full flex flex-col items-center text-xl lowercase"
                  >
                    {{ nextPage.longTitle }}
                    <font-awesome-icon icon="chevron-down" />
                  </div>
                </NuxtLink>
              </NoSsr>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import pages, { Page } from '@/assets/pages';
import AppIcon from '@/components/ui/AppIcon.vue';
import LinkedinIcon from '@/assets/icons/linkedin.svg?inline';
import GithubIcon from '@/assets/icons/github.svg?inline';
import pattern from '@/assets/patterns/pattern.svg?data';
const colors = require('tailwindcss/colors');
console.log(colors)

interface BottomLink {
  href: string;
  text: string;
  icon: VueConstructor<Vue>;
}

interface Data {
  isDrawerVisible: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
  wasAtTop?: boolean;
  wasAtBottom?: boolean;
  pages: Page[];
  ongoingWheel: boolean;
  ongoingWheelTimeout?: NodeJS.Timeout;
  bottomLinks: BottomLink[];
  pattern: string;
}

export default Vue.extend({
  components: {
    AppIcon,
  },
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
      bottomLinks: [
        {
          text: 'LinkedIn',
          icon: LinkedinIcon,
          href: process.env.linkedinProfileUrl || '',
        },
        {
          text: 'GitHub',
          icon: GithubIcon,
          href: process.env.githubProfileUrl || '',
        },
      ],
      pattern,
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
    containerStyle(): any {
      const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
      return shades.reduce(
        (acc: any, shade: number) => ({
          ...acc,
          [`--color-primary-${shade}`]: colors[this.currentPage.colorName][shade],
        }),
        {}
      );
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
    this.$refs.container.addEventListener('scroll', this.handleScroll, {
      passive: true,
    });
    this.$refs.container.addEventListener('wheel', this.handleWheel, {
      passive: true,
    });
    this.handleScroll();
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('scroll', this.handleScroll);
    this.$refs.container.removeEventListener('wheel', this.handleWheel);
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
      return this.$refs.container.scrollTop === 0;
    },
    getIsAtBottom(): boolean {
      return (
        Math.ceil(this.$refs.container.scrollTop) +
          this.$refs.container.offsetHeight >=
        this.$refs.container.scrollHeight
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
        this.navigateToPreviousPage();
      } else if (event.deltaY > 0 && this.nextPage && this.isAtBottom) {
        this.navigateToNextPage();
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
