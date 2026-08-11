<script setup lang="ts">
const projects = [
  {
    title: 'Мария & Иван',
    subtitle: 'Свадьба на берегу озера',
    image: 'https://picsum.photos/seed/maria-ivan/1000/1200'
  },
  {
    title: 'Есения & Игорь',
    subtitle: 'Love story в городе',
    image: 'https://picsum.photos/seed/esenia-igor/1000/1200'
  }
]
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
    <div class="mb-12 text-center">
      <p class="text-sm uppercase tracking-[0.3em] text-stone-400">Избранное</p>
      <h2 class="font-display mt-3 text-3xl text-stone-900 sm:text-4xl">Последние истории</h2>
    </div>

    <div class="grid gap-8 sm:grid-cols-2">
      <NuxtLink
        v-for="project in projects"
        :key="project.title"
        to="/portfolio"
        class="group relative block overflow-hidden"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
        <div class="absolute bottom-0 left-0 p-8 text-white">
          <h3 class="font-display text-2xl">{{ project.title }}</h3>
          <p class="mt-1 text-sm text-white/80">{{ project.subtitle }}</p>
          <span class="mt-4 inline-block text-sm uppercase tracking-wider underline underline-offset-4">
            Смотреть фото →
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
