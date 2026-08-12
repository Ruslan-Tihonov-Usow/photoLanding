<template>
  <section class="bg-stone-50 py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-12">
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-stone-400">Портфолио</p>
        <h2 class="font-display mt-3 text-3xl text-stone-900 sm:text-4xl">Категории съёмок</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="category in categories"
          :key="category.title"
          href="#"
          class="group relative block overflow-hidden"
        >
          <img
            :src="category.image"
            :alt="category.title"
            class="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-stone-900/20 transition group-hover:bg-stone-900/40" />
          <span class="absolute inset-x-0 bottom-6 text-center font-display text-xl text-white">
            {{ category.title }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { title: 'Свадьбы', image: 'https://picsum.photos/seed/weddings/800/1000' },
  { title: 'Love Story', image: 'https://picsum.photos/seed/lovestory/800/1000' },
  { title: 'Портреты', image: 'https://picsum.photos/seed/portraits/800/1000' },
  { title: 'Семейные', image: 'https://picsum.photos/seed/family/800/1000' }
]
</script>
