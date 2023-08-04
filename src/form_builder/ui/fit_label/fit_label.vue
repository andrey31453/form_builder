<script setup>
// props

import { use_props } from '@composables'

const props = defineProps(
  use_props({
    label: null,
  })
)

// store

import { use_config_store } from '@store'
const config = use_config_store()
const { labels, labels_position } = config.modifiers
const { label_size, input_size } = config.vars

// template

import { random } from '@helpers'
const id = random()
</script>

<template>
  <label :for="id">
    <div class="hide">
      <slot
        :id="id"
        name="hide"
      />
    </div>

    <div
      class="label_container"
      :class="{
        '--has_labels': labels,
        '--top_labels': labels_position === 'top',
      }"
    >
      <span
        v-if="labels"
        class="label"
      >
        {{ label }}
      </span>

      <span class="label_target">
        <slot :id="id" />
      </span>
    </div>
  </label>
</template>

<style lang="sass" scoped>
@use '@styles/utils/f' as *
@import '@styles/modifiers/t'
@import '@styles/utils/distance'

.hide
	@extend .--hide

.label
	@include f()

.label_container
	// has_labels
	&.--has_labels
		@extend ._gap
		display: grid
		grid-template-columns: repeat(calc(v-bind(label_size) + v-bind(input_size)), 1fr)

		.label
			grid-column: span v-bind(label_size)
		.label_target
			grid-column: span v-bind(input_size)

	// top_labels
	&.--top_labels
		@extend ._gap
		display: grid
		grid-template-columns: repeat(1, 1fr)
		.label
			grid-column: span 1
		.label_target
			grid-column: span 1
</style>
