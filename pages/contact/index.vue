<template>
  <div class="flex-grow xl:items-center flex flex-col xl:flex-row">
    <div class="mb-8 xl:mb-0 xl:w-1/2 xl:px-8">
      <DrawingsContact
        class="w-full h-full text-primary-500 transition-colors duration-600"
      />
    </div>
    <div class="xl:w-1/2 xl:px-8">
      <div class="text-center text-xl">Fill this form to contact me</div>
      <form
        netlify
        :name="formName"
        method="post"
        data-netlify-honeypot="bot-field"
        @submit.prevent="submit"
      >
        <div class="pt-4">
          <label for="email">Email address</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            required
            class="mt-1 font-mono w-full bg-white bg-opacity-75 p-2 resize border rounded focus:outline-none focus:shadow-outline"
            placeholder="your@email.com"
          />
        </div>
        <div class="pt-4">
          <label for="text">How can I help you?</label>
          <textarea
            id="text"
            v-model="text"
            required
            name="text"
            class="mt-1 font-mono w-full bg-white bg-opacity-75 p-2 h-64 resize border rounded focus:outline-none focus:shadow-outline"
            placeholder="Add some text here"
          />
        </div>
        <button
          class="w-full mt-4 transition-colors duration-600 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
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
import DrawingsContact from '@/assets/images/drawings/contact.svg?inline';

interface Data {
  formName: string;
  email: string;
  text: string;
}

export default Vue.extend({
  components: {
    DrawingsContact,
  },
  mixins: [pageMixin],
  data(): Data {
    return {
      formName: 'contact',
      email: '',
      text: '',
    };
  },
  head() {
    return {
      title: 'Contact me',
      description:
        'Send me an email at miquelromero@outlook.com or fill this form to contact me',
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
            'form-name': this.formName,
            email: encodeURIComponent(this.email),
            text: encodeURIComponent(this.text),
          }),
        });
        alert('email sent');
      } catch (e) {
        alert('something went wrong');
      }
    },
  },
});
</script>
