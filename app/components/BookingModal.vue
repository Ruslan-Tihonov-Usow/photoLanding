<script setup lang="ts">
const { isOpen, close } = useBookingModal()

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

function handleClose() {
  close()
  isSubmitted.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isOpen.value) handleClose()
}

watch(isOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="booking-modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 px-4 py-8"
        @click.self="handleClose"
      >
        <div class="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-8 sm:p-10">
          <button
            type="button"
            class="absolute right-5 top-5 text-stone-400 transition hover:text-stone-900"
            aria-label="Закрыть"
            @click="handleClose"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="mb-8 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-stone-400">Бронирование</p>
            <h2 class="font-display mt-3 text-3xl text-stone-900">Забронировать дату</h2>
            <p class="mt-4 text-stone-500">
              Расскажите немного о вашей съёмке — отвечу в течение суток.
            </p>
          </div>

          <p v-if="isSubmitted" class="rounded-lg bg-stone-100 px-6 py-8 text-center text-stone-700">
            Спасибо! Заявка отправлена, я свяжусь с вами в ближайшее время.
          </p>

          <form v-else class="grid gap-6 sm:grid-cols-2" @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-2">
              <label for="booking-name" class="text-sm text-stone-500">Имя</label>
              <input
                id="booking-name"
                v-model="form.name"
                type="text"
                required
                class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
              >
            </div>

            <div class="flex flex-col gap-2">
              <label for="booking-email" class="text-sm text-stone-500">Email</label>
              <input
                id="booking-email"
                v-model="form.email"
                type="email"
                required
                class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
              >
            </div>

            <div class="flex flex-col gap-2">
              <label for="booking-phone" class="text-sm text-stone-500">Телефон</label>
              <input
                id="booking-phone"
                v-model="form.phone"
                type="tel"
                class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
              >
            </div>

            <div class="flex flex-col gap-2">
              <label for="booking-shoot-type" class="text-sm text-stone-500">Тип съёмки</label>
              <select
                id="booking-shoot-type"
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
              <label for="booking-event-date" class="text-sm text-stone-500">Дата события</label>
              <input
                id="booking-event-date"
                v-model="form.eventDate"
                type="date"
                class="border-b border-stone-300 bg-transparent py-2 outline-none focus:border-stone-900"
              >
            </div>

            <div class="flex flex-col gap-2 sm:col-span-2">
              <label for="booking-message" class="text-sm text-stone-500">Расскажите о съёмке</label>
              <textarea
                id="booking-message"
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
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.booking-modal-enter-active,
.booking-modal-leave-active {
  transition: opacity 0.2s ease;
}
.booking-modal-enter-from,
.booking-modal-leave-to {
  opacity: 0;
}
</style>
