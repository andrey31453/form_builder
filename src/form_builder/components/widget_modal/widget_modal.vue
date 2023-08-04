<script setup>
// components

import { fit_card, fit_modal, fit_transition } from '@ui'

// props

import { use_props } from '@composables'
const props = defineProps(
  use_props({
    view: false,
  })
)
const emits = defineEmits(['update:view'])

// view

const close = () => {
  emits('update:view', !props.view)
}

// store

import { use_config_store } from '@store'

const config = use_config_store()
const modal_size = config.modifiers.modal_size
</script>

<template>
  <fit_transition>
    <fit_modal
      v-if="view"
      :size="modal_size"
      @close="close"
    >
      <fit_card overflow="y">
        <slot />
      </fit_card>
    </fit_modal>
  </fit_transition>
</template>
