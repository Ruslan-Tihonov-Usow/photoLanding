<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  phone: '',
  shootType: 'wedding',
  eventDate: '',
  message: ''
})

const isSubmitted = ref(false)

function handleSubmit() {
  // TODO: подключить отправку формы (email-сервис или backend-эндпоинт)
  isSubmitted.value = true
}

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'Pinterest', href: '#' }
]
</script>

<template>
  <div>
    <PageBanner title="Контакты" />

    <section class="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
      <div>
        <p class="text-stone-600">
          Я всегда открыта новым идеям и готова обсудить даже самую смелую
          задумку. Расскажите о своей истории — и мы придумаем, как её снять.
        </p>

        <div class="mt-8 space-y-2">
          <a href="mailto:anna@example.com" class="block text-lg text-stone-900 hover:underline">
            anna@example.com
          </a>
          <a href="tel:+79990000000" class="block text-lg text-stone-900 hover:underline">
            +7 999 000-00-00
          </a>
        </div>

        <div class="mt-8 flex gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            class="text-sm uppercase tracking-wider text-stone-500 transition hover:text-stone-900"
          >
            {{ social.label }}
          </a>
        </div>
      </div>

      <p v-if="isSubmitted" class="rounded-lg bg-stone-100 px-6 py-8 text-center text-stone-700">
        Спасибо! Сообщение отправлено, я свяжусь с вами в ближайшее время.
      </p>

      <form v-else class="grid gap-6 sm:grid-cols-2" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-2">
          <label for="contact-name" class="text-sm text-stone-500">Ваше имя</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            required
            class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
          >
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-email" class="text-sm text-stone-500">Эл. почта</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            required
            class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
          >
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-phone" class="text-sm text-stone-500">Ваш телефон</label>
          <input
            id="contact-phone"
            v-model="form.phone"
            type="tel"
            class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
          >
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-shoot-type" class="text-sm text-stone-500">Тип съёмки</label>
          <select
            id="contact-shoot-type"
            v-model="form.shootType"
            class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
          >
            <option value="wedding">Свадьба</option>
            <option value="lovestory">Love story</option>
            <option value="family">Семейная</option>
            <option value="portrait">Портретная</option>
            <option value="other">Другое</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-event-date" class="text-sm text-stone-500">Дата события</label>
          <input
            id="contact-event-date"
            v-model="form.eventDate"
            type="date"
            required
            class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
          >
        </div>

        <div class="flex flex-col gap-2 sm:col-span-2">
          <label for="contact-message" class="text-sm text-stone-500">Ваше сообщение</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            rows="4"
            required
            class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
          />
        </div>

        <button
          type="submit"
          class="mt-2 rounded-full bg-stone-900 px-8 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-stone-700 sm:col-span-2 sm:w-fit"
        >
          Отправить форму
        </button>
      </form>
    </section>
  </div>
</template>
