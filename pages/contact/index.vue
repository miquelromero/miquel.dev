<template>
  <div class="flex-grow md:items-center flex flex-col md:flex-row">
    <div class="md:w-1/2 px-4">
      <div class="text-center text-xl">You can contact me in...</div>
    </div>
    <div class="md:w-1/2 px-4">
      <div class="text-center text-xl">...or just fill this form</div>
      <form
        netlify
        name="contact"
        method="post"
        data-netlify-honeypot="bot-field"
        @submit.prevent="submit"
      >
        <input
          v-model="subject"
          name="subject"
          class="font-mono w-full mt-4 bg-primary-100 p-2 resize border rounded focus:outline-none focus:shadow-outline"
          placeholder="Subject"
        />
        <textarea
          v-model="text"
          name="text"
          class="font-mono w-full mt-4 bg-primary-100 p-2 h-64 resize border rounded focus:outline-none focus:shadow-outline"
          placeholder="Add some text here"
        />
        <button
          class="w-full mt-4 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMixin from '@/mixins/page-mixin';

interface Data {
  subject: string;
  text: string;
}

export default Vue.extend({
  mixins: [pageMixin],
  data(): Data {
    return {
      subject: '',
      text: '',
    };
  },
  methods: {
    createFormDataObj(data: any): FormData {
      const formData = new FormData();
      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    async submit() {
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact-us',
            subject: encodeURIComponent(this.subject),
            text: encodeURIComponent(this.text),
          }),
        });
        alert('email sent');
      } catch (e) {
        alert('something went wrong');
      }
    },
  },
  head() {
    return {
      title: 'Contact',
    };
  },
});
</script>
