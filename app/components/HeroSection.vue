<template>
  <section class="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden bg-stone-900">
    <img
      src="https://picsum.photos/seed/anna-hero/1600/2000"
      alt="Свадебная фотография"
      class="absolute inset-0 h-full w-full object-cover opacity-70"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/50" />

    <div class="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
      <p class="mb-4 text-sm uppercase tracking-[0.3em] text-white/80">Фотограф</p>
      <h1 class="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
        Настоящие эмоции<br class="hidden sm:block"> в естественном свете
      </h1>
      <p class="mx-auto mt-6 max-w-xl text-base text-white/85 sm:text-lg">
        Снимаю свадьбы, love story и портреты так, чтобы вам было легко
        быть собой — а после остались фотографии, к которым хочется возвращаться.
      </p>
      <a
        href="#contact"
        class="mt-10 inline-block rounded-full bg-white px-8 py-3 text-sm uppercase tracking-wider text-stone-900 transition hover:bg-white/90"
      >
        Забронировать съёмку
      </a>
    </div>

    <a
      href="#portfolio"
      class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white"
      aria-label="Прокрутить вниз"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </section>
</template>
