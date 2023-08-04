<script setup>
// libs
import { TransitionGroup, Transition } from 'vue'

// composables
import { random } from '@helpers'
import { use_props } from '@composables'

// props
const props = defineProps(
  use_props({
    group: false,
    if: true,
  })
)

const transition_type = props.group ? TransitionGroup : Transition
</script>

<template>
  <component
    :is="transition_type"
    name="fade"
    mode="out-in"
    appear
  >
    <div :key="'transition_' + random()">
      <slot />
    </div>
  </component>
</template>

<style lang="sass" scoped>
@import '@styles/vars'

// fade

.fade-enter-active
.fade-leave-active
	transition: opacity $time ease-in-out

.fade-enter,
.fade-leave-to
	opacity: 0
</style>
