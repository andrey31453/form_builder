<script setup>
// components

import { fit_label } from '@ui'

// props
import { use_props } from '@composables'

const props = defineProps(
  use_props({
    id: 0,
    value: null,
    type: '',
    placeholder: '',
  })
)
const emit = defineEmits(['input'])

// template
import { computed } from 'vue'

const loc_value = computed({
  get: () => {
    return props.value
  },
  set: (v) => {
    emit('input', v)
  },
})
const show_picker = (e) => {
  try {
    e.target.showPicker()
  } catch (_) {}
}
</script>

<template>
  <fit_label :label="placeholder">
    <template #default="{ id }">
      <input
        :id="id"
        v-model="loc_value"
        :type="type"
        :placeholder="placeholder"
        class="input"
        @click="show_picker"
      />
    </template>
  </fit_label>
</template>

<style lang="sass" scoped>
@use '@styles/classes/content'
@import '@styles/modifiers/t'
@import '@styles/vars'
@import '@styles/modifiers/shadow'
@import '@styles/utils/distance'

.input
	@include content.active_element
	width: 100%
	outline: none
	border: 1px solid $dc
	background-color: $dco
	color: $fc

input[type="date"]::-webkit-calendar-picker-indicator
	display: none
	background: transparent
	bottom: 0
	color: transparent
	cursor: pointer
	height: auto
	left: 0
	position: absolute
	right: 0
	top: 0
	width: auto
</style>
