<script setup>
// props

import { use_props, t } from '@composables'

const props = defineProps(
  use_props({
    overflow: false,
  })
)
const { cls, css } = t(props)
</script>

<template>
  <div :class="['card', cls.overflow]">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/utils/f' as *
@use '@styles/modifiers/overflow' as *
@import '@styles/vars'
@import '@styles/utils/distance'
@import '@styles/modifiers/shadow'


// card

.card
	@extend .shadow_xl
	@extend ._padding_xl
	@extend ._gap_l
	@extend ._brad_l
	@include f('col')
	@include overflow('y')
	background-color: $bc
	color: $fc

	&:deep > *
		width: 100%
</style>
