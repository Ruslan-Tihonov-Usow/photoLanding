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
</script>

<template>
  <section id="contact" class="mx-auto max-w-4xl px-6 py-20 lg:py-28">
    <div class="mb-12 text-center">
      <p class="text-sm uppercase tracking-[0.3em] text-stone-400">Бронирование</p>
      <h2 class="font-display mt-3 text-3xl text-stone-900 sm:text-4xl">Забронировать дату</h2>
      <p class="mt-4 text-stone-500">
        Расскажите немного о вашей съёмке — отвечу в течение суток.
      </p>
    </div>

    <p v-if="isSubmitted" class="rounded-lg bg-stone-100 px-6 py-8 text-center text-stone-700">
      Спасибо! Заявка отправлена, я свяжусь с вами в ближайшее время.
    </p>

    <form v-else class="grid gap-6 sm:grid-cols-2" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm text-stone-500">Имя</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm text-stone-500">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="phone" class="text-sm text-stone-500">Телефон</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="shootType" class="text-sm text-stone-500">Тип съёмки</label>
        <select
          id="shootType"
          v-model="form.shootType"
          class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
        >
          <option value="wedding">Свадьба</option>
          <option value="lovestory">Love story</option>
          <option value="family">Семейная</option>
          <option value="portrait">Портрет</option>
          <option value="other">Другое</option>
        </select>
      </div>

      <div class="flex flex-col gap-2">
        <label for="eventDate" class="text-sm text-stone-500">Дата события</label>
        <input
          id="eventDate"
          v-model="form.eventDate"
          type="date"
          class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
        >
      </div>

      <div class="flex flex-col gap-2 sm:col-span-2">
        <label for="message" class="text-sm text-stone-500">Расскажите о съёмке</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
        />
      </div>

      <button
        type="submit"
        class="mt-2 rounded-full bg-stone-900 px-8 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-stone-700 sm:col-span-2 sm:w-fit"
      >
        Отправить заявку
      </button>
    </form>
  </section>
</template>
