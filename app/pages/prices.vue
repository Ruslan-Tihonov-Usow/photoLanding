<script setup lang="ts">
const tiers = [
  {
    name: 'Стандарт',
    price: '$1 000',
    features: [
      'Съёмка от 2 часов',
      'Ретушь 300 фотографий',
      'Онлайн-галерея с фото',
      'Фотокнига 15×20 см',
      'Срок передачи — 2 месяца'
    ],
    highlighted: false
  },
  {
    name: 'Расширенный',
    price: '$2 500',
    features: [
      'Съёмка от 5 часов',
      'Ретушь 600 фотографий',
      'Онлайн-галерея с фото',
      'Фотокнига 20×30 см',
      'Срок передачи — 2 месяца'
    ],
    highlighted: true
  },
  {
    name: 'Максимум',
    price: '$4 000',
    features: [
      'Съёмка от 10 часов',
      'Ретушь 900 фотографий',
      'Онлайн-галерея с фото',
      'Фотокнига 30×45 см',
      'Срок передачи — 2 месяца'
    ],
    highlighted: false
  }
]
</script>

<template>
  <div>
    <PageBanner title="Цены" />

    <section class="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
      <div class="grid gap-8 lg:grid-cols-3">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          class="flex flex-col rounded-lg border p-8"
          :class="tier.highlighted ? 'border-stone-900 shadow-lg' : 'border-stone-200'"
        >
          <p v-if="tier.highlighted" class="mb-4 w-fit rounded-full bg-stone-900 px-3 py-1 text-xs uppercase tracking-wider text-white">
            Популярный
          </p>

          <h3 class="font-display text-2xl text-stone-900">{{ tier.name }}</h3>
          <p class="font-display mt-4 text-4xl text-stone-900">{{ tier.price }}</p>

          <ul class="mt-8 flex-1 space-y-3">
            <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-3 text-sm text-stone-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 h-5 w-5 shrink-0 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <BookingButton
            label="Забронировать дату"
            :variant="tier.highlighted ? 'solid' : 'outline-dark'"
            class="mt-8 w-full text-center"
          />
        </div>
      </div>
    </section>

    <section class="bg-stone-50 py-20 lg:py-28">
      <div class="mx-auto max-w-2xl px-6 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-stone-400">Готовы обсудить съёмку?</p>
        <h2 class="font-display mt-3 text-3xl text-stone-900 sm:text-4xl">Забронировать дату</h2>
        <p class="mt-4 text-stone-500">
          Расскажите о своём событии — подберём пакет и обсудим детали.
        </p>
        <BookingButton label="Забронировать дату" class="mt-8" />
      </div>
    </section>
  </div>
</template>
