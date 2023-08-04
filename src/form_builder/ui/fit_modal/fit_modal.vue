<script setup>
// components

import { fit_wrapper } from '@ui'

// props

import { use_props } from '@composables'
const props = defineProps(
  use_props({
    size: 'md',
  })
)
</script>

<template>
  <div class="overlay_wrapper">
    <div
      class="overlay"
      @click="$emit('close')"
    />
    <fit_wrapper
      container
      :background="false"
      :size="size"
    >
      <div class="modal">
        <slot />
      </div>
    </fit_wrapper>
  </div>
</template>

<style lang="sass" scoped>
@import '@styles/classes/overlay'
</style>
