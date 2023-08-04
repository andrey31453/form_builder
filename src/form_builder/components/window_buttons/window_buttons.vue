<script setup>
// сomponents

import { fit_buttons_wrapper, fit_transition, fit_button } from '@ui'

// buttons

import { use_buttons } from '@composables'
const buttons = use_buttons()
</script>

<template>
  <fit_buttons_wrapper>
    <template
      v-for="(button, button_name) in buttons"
      :key="button_name"
    >
      <fit_transition>
        <template v-if="button.is()">
          <fit_button
            :button="button"
            @on="button.on"
          />
        </template>
      </fit_transition>
    </template>
  </fit_buttons_wrapper>
</template>
