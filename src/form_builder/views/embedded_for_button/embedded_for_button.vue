<script setup>
import { widget_content, widget_modal } from '@components'

// use_not_vue_button

import { use_not_vue_button } from '@composables'
const { view } = use_not_vue_button()
</script>

<template>
  <widget_modal v-model:view="view">
    <widget_content />
  </widget_modal>
</template>
