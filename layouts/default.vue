<template>
  <div class="font-body" :class="`bg-${color}-200`">
    <transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="visible"
        class="md:hidden z-10 w-screen h-screen fixed"
        @click="visible = false"
      >
        <div class="w-full h-full bg-black opacity-50"></div>
      </div>
    </transition>
    <div
      class="transition-transform md:transform-none duration-300 ease-in-out transform -translate-x-64 fixed z-20 shadow-2xl md:shadow-none top-0 w-64 bg-gray-800 h-screen flex flex-col overflow-y-auto"
      :class="{ 'transform-none': visible }"
    >
      <div class="my-4 sm:my-8 md:my-12">
        <div class="rounded-full flex-shrink-0 mx-12 overflow-hidden">
          <img
            class="object-cover"
            alt="Miquel in the office"
            src="~/assets/images/profile.jpg"
          />
        </div>
        <div class="font-display w-full text-center mt-4">
          <div class="text-gray-200 text-lg">
            Miquel Romero Sanfeliu
          </div>
          <div class="text-gray-400 text-lg lowercase font-light">
            Frontend Developer
          </div>
        </div>
      </div>
      <NavigationMenu />
    </div>
    <div
      class="min-h-screen overflow-x-hidden md:ml-64 flex-grow flex flex-col"
    >
      <div
        :class="`text-${color}-800`"
        class="w-full h-16 md:hidden fixed top-0 left-0 transition-colors duration-300 ease-in-out"
      >
        <div class="flex justify-between items-center px-4 h-16">
          <h1 class="text-2xl px-2 font-bold font-display flex-grow">
            miquel.dev
          </h1>
          <button
            class="font-display px-2 py-2 focus:outline-none"
            @click="visible = true"
          >
            menu
          </button>
        </div>
      </div>
      <div class="pt-16 md:pt-0 flex flex-col flex-grow">
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
        <div class="text-center m-4" :class="`text-${color}-800`">
          Scroll down for more
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationMenu from '@/components/NavigationMenu.vue';

export default Vue.extend({
  components: {
    NavigationMenu,
  },
  data() {
    return {
      visible: false,
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
      if (this.visible) {
        this.visible = false;
      }
    },
    visible(visible) {
      if (visible) {
        document.body.classList.add('overflow-y-hidden');
      } else {
        document.body.classList.remove('overflow-y-hidden');
      }
    },
  },
});
</script>
