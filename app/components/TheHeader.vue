<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Портфолио', to: '/portfolio' },
  { label: 'Обо мне', to: '/about' },
  { label: 'Цены', to: '/prices' },
  { label: 'Контакты', to: '/#footer' }
]
</script>

<template>
  <header class="absolute top-0 left-0 right-0 z-30">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
      <NuxtLink to="/" class="font-display text-xl tracking-wide text-white">Анна Морозова</NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm uppercase tracking-wider text-white/90 transition hover:text-white"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <BookingButton
        label="Записаться"
        variant="outline"
        size="sm"
        class="hidden lg:inline-block"
      />

      <button
        class="text-white lg:hidden"
        aria-label="Открыть меню"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="flex flex-col gap-4 bg-stone-900/95 px-6 py-6 lg:hidden"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-sm uppercase tracking-wider text-white/90"
        @click="isMenuOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
      <BookingButton
        label="Записаться"
        variant="light"
        size="sm"
        class="w-fit"
        @click="isMenuOpen = false"
      />
    </div>
  </header>
</template>
