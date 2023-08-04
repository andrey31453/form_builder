<script setup>
// libs

import { computed } from 'vue'

// props

import { use_props } from '@composables'
const props = defineProps(
  use_props({
    text: 'Отправить',
    type: 'submit',
    disable: false,
    variant: false,
    button: {},
  })
)
const emit = defineEmits(['on'])

// store

import { use_config_store } from '@store'

const modifiers = use_config_store().modifiers
const { buttons_variant, shadows } = modifiers

// template
import { make_modifier } from '@helpers'

const button_type = props.button.type ? make_modifier(props.button.type) : ''
const button_variant = make_modifier(props.variant || buttons_variant)

const button_disable = computed(() => {
  if (props.button.is_disable) {
    return props.button.is_disable()
  }

  return props.disable
})
</script>

<template>
  <div
    :class="[
      'button',
      button_type,
      button_variant,
      {
        '--disable': button_disable,
        '--shadow': shadows,
      },
    ]"
    @click="emit('on')"
  >
    <slot v-if="$slots.default"></slot>
    <template v-else>{{ button.text || text }}</template>
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/vars' as *
@use '@styles/utils'
@use '@styles/classes/content'
@use '@styles/modifiers/disable'
@use '@styles/modifiers/shadow'

.button
	@include utils.f('c')
	@include content.active_element
	width: max-content
	min-width: 150px

	cursor: pointer

	&.--prev
		opacity: $op
		&:hover
			opacity: 1

	&.--fill
		background-color: $dc
		color: $bc
		&.--prev
			background-color: $ac
		&.--disable
			background-color: $bcg
		&.--shadow
			@include shadow.d
			&:hover
				@include shadow.l

	&.--outline
		border: 1px solid $dc
		color: $dc
		&.--prev
			border-color: $ac
			color: $ac
		&.--disable
			border-color: $bcg
			color: $bcg
		&.--shadow
			@include shadow.s
			&:hover
				@include shadow.d
</style>
