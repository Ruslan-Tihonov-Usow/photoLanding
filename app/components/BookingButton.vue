<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    variant?: 'solid' | 'outline' | 'outline-dark' | 'light'
    size?: 'sm' | 'md'
  }>(),
  {
    label: 'Забронировать дату',
    variant: 'solid',
    size: 'md'
  }
)

const { open } = useBookingModal()

const variantClasses = {
  solid: 'bg-stone-900 text-white hover:bg-stone-700',
  outline: 'border border-white/70 text-white hover:bg-white hover:text-stone-900',
  'outline-dark': 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white',
  light: 'bg-white text-stone-900 hover:bg-white/90'
}

const sizeClasses = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-sm'
}
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-block rounded-full uppercase tracking-wider transition',
      variantClasses[variant],
      sizeClasses[size]
    ]"
    @click="open"
  >
    {{ label }}
  </button>
</template>
