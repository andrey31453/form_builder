<script setup>
// props

import { use_props, t } from '@composables'
const props = defineProps(
  use_props({
    single: false,
  })
)
const { cls } = t(props)
</script>

<template>
  <div :class="['form_group', cls.single]">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/utils/f' as *
.form_group
	@include f()
</style>

<style lang="sass">
$single: ('true': 100%, 'false': auto)
@each $key, $value in $single
	.#{$key}\:single
		width: $value
	.#{$key}\:single > *
		width: $value
</style>
