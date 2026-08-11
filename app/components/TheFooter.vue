<script setup lang="ts">
const year = new Date().getFullYear()

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'Pinterest', href: '#' }
]
</script>

<template>
  <footer class="border-t border-stone-200 bg-stone-50">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center lg:px-12">
      <p class="font-display text-lg text-stone-900">Анна Морозова</p>

      <div class="flex gap-6">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          class="text-sm uppercase tracking-wider text-stone-500 transition hover:text-stone-900"
        >
          {{ social.label }}
        </a>
      </div>

      <p class="text-sm text-stone-400">© {{ year }} Анна Морозова. Все права защищены.</p>
    </div>
  </footer>
</template>
