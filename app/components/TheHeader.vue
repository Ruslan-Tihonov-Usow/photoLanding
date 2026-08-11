<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contact' }
]
</script>

<template>
  <header class="absolute top-0 left-0 right-0 z-30">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
      <a href="#" class="font-display text-xl tracking-wide text-white">Анна Морозова</a>

      <nav class="hidden items-center gap-8 lg:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm uppercase tracking-wider text-white/90 transition hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        href="#contact"
        class="hidden rounded-full border border-white/70 px-5 py-2 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-stone-900 lg:inline-block"
      >
        Записаться
      </a>

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
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-sm uppercase tracking-wider text-white/90"
        @click="isMenuOpen = false"
      >
        {{ link.label }}
      </a>
      <a href="#contact" class="text-sm uppercase tracking-wider text-white" @click="isMenuOpen = false">
        Записаться
      </a>
    </div>
  </header>
</template>
