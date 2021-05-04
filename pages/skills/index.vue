<template>
  <div class="flex-grow flex flex-col justify-center text-center">
    <DrawingsSkills
      class="sm:w-1/2 md:w-1/3 h-auto text-primary-500 mb-8 mx-auto transition-colors duration-600"
    />
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(skill, index) in skills" :key="index" class="pt-6">
            <div
              class="flow-root bg-primary-50 transition-colors duration-600 rounded-lg px-6 pb-8"
            >
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center p-3 bg-primary-500 transition-colors duration-600 rounded-md shadow-lg"
                  >
                    <Component
                      :is="skill.icon"
                      class="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                >
                  {{ skill.name }}
                </h3>
                <p
                  class="mt-5 text-base text-gray-500"
                  v-html="marked(skill.text)"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';
import DrawingsSkills from '@/assets/images/drawings/skills.svg?inline';
import marked from 'marked';
import { skills } from '@/assets/profile/skills';

export default Vue.extend({
  components: {
    DrawingsSkills,
  },
  mixins: [pageMixin],
  data() {
    return {
      marked,
      skills,
    };
  },
  head() {
    return {
      title: 'Skills',
      description:
        'See my skills as a developer, languages and frameworks I have experience with, education I received',
    };
  },
});
</script>
