<script setup>
// props
import { use_props, t } from '@composables'
const props = defineProps(
  use_props({
    container: false,
    vertical: false,
    horizontal: true,
    size: false,
    background: false,
  })
)
const { css, cls } = t(props)

// size full working
if (props.size === 'full') cls.container = null
</script>

<template>
  <div
    :class="[
      'wrapper',
      cls.container,
      cls.vertical,
      cls.horizontal,
      cls.background,
    ]"
  >
    <div
      v-if="size"
      :class="[cls.size]"
    >
      <slot />
    </div>

    <slot v-else />
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/classes/color'
@use '@styles/classes/container'
</style>
