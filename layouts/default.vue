<template>
  <div class="flex h-screen w-screen">
    <div
      class="max-w-xs bg-primary h-screen shadow-md flex-grow flex flex-col items-center"
    >
      <div
        class="border-8 rounded-full border-secondary border-solid m-12 overflow-hidden"
      >
        <img src="~/assets/images/profile.jpg" />
      </div>
      <div class="w-full text-center font-bold mb-12">
        <div class="text-white text-2xl">Miquel Romero Sanfeliu</div>
        <div class="text-secondary text-xl">Frontend Developer</div>
      </div>
      <NavigationMenu />
      <div class="flex-grow"></div>
      <div class="w-full flex">
        <a
          href="/resume.pdf"
          target="_blank"
          class="text-center bg-transparent flex-grow m-6 hover:bg-white text-white font-semibold hover:text-primary py-2 px-4 border border-white hover:border-transparent rounded"
        >
          Open resume in PDF
        </a>
      </div>
    </div>
    <div class="bg-gray-200 flex-grow">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationMenu from '@/components/NavigationMenu.vue'

export default Vue.extend({
  components: {
    NavigationMenu,
  },
})
</script>
