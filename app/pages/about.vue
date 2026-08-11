<template>
  <div>
    <PageBanner title="Обо мне" subtitle="Пусть свет вдохновляет" />

    <section class="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
      <img
        src="https://picsum.photos/seed/anna-portrait/900/1100"
        alt="Анна Морозова"
        class="aspect-[4/5] w-full rounded-lg object-cover"
      >

      <div class="flex flex-col justify-center">
        <p class="text-sm uppercase tracking-[0.3em] text-stone-400">Фотограф</p>
        <h2 class="font-display mt-3 text-3xl text-stone-900 sm:text-4xl">Анна Морозова</h2>

        <p class="mt-6 text-stone-600">
          Я фотографирую свадьбы, love story и портреты уже больше семи лет.
          Для меня съёмка — это не постановка, а способ поймать настоящий момент:
          взгляд, улыбку, тишину между двумя людьми. Работаю в основном
          с естественным светом — он честнее любой студийной вспышки.
        </p>
        <p class="mt-4 text-stone-600">
          Перед каждой съёмкой мы созваниваемся или встречаемся, чтобы
          познакомиться и снять напряжение — так на кадрах остаётесь вы настоящие,
          а не позирующие для камеры.
        </p>
        <p class="mt-4 text-stone-600">
          Базируюсь в Москве, но часто уезжаю на съёмки по России и за границу.
        </p>

        <div class="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
          <div>
            <p class="font-display text-3xl text-stone-900">7+</p>
            <p class="mt-1 text-sm text-stone-500">лет в профессии</p>
          </div>
          <div>
            <p class="font-display text-3xl text-stone-900">150+</p>
            <p class="mt-1 text-sm text-stone-500">свадеб снято</p>
          </div>
          <div>
            <p class="font-display text-3xl text-stone-900">12</p>
            <p class="mt-1 text-sm text-stone-500">стран</p>
          </div>
        </div>

        <BookingButton label="Забронировать съёмку" class="mt-10 w-fit" />
      </div>
    </section>
  </div>
</template>
