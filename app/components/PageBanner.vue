<template>
  <section class="relative flex h-[45vh] min-h-[360px] items-center justify-center overflow-hidden bg-stone-900">
    <img
      :src="image"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-60"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-stone-900/50" />

    <div class="relative z-10 text-center">
      <h1 class="font-display text-4xl uppercase tracking-[0.2em] text-white sm:text-5xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-4 text-sm uppercase tracking-[0.3em] text-white/80">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    image?: string
  }>(),
  {
    subtitle: undefined,
    image: 'https://picsum.photos/seed/anna-banner/1600/900'
  }
)
</script>
