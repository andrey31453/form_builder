<script setup>
// components

import { fit_input } from '@ui'

// props

import { use_props } from '@composables'
const props = defineProps(
  use_props({
    unic_id: null,
  })
)

// data

import { use_config_data } from '@composables'
const data = use_config_data(props.unic_id)
const on_input = (v) => {
  data.value = v
}
</script>

<template>
  <fit_input
    :value="data.value"
    :type="data.type"
    :placeholder="data.name"
    @input="on_input"
  />
</template>
