<script setup>
// сomponents

import { widget_form, form_elems } from '@components'
import {
  fit_row,
  fit_col,
  fit_buttons_wrapper,
  fit_button,
  fit_title,
  fit_delimeter,
} from '@ui'

// buttons

import { use_buttons } from '@composables'
const buttons = use_buttons()

// store

import { use_config_store } from '@store'
const config = use_config_store()
const options = config.template.options
</script>

<template>
  <fit_row>
    <fit_col
      cols="12"
      md="7"
    >
      <form_elems.teeths />
    </fit_col>
    <fit_col
      cols="12"
      md="5"
      window
    >
      <fit_title
        :title="options.title || 'Ждём вас на бесплатную онлайн консультацию!'"
      />
      <widget_form />
      <form_elems.file />

      <fit_delimeter />
      <fit_buttons_wrapper>
        <fit_button
          :button="buttons.submit"
          @on="buttons.submit.on"
        />
      </fit_buttons_wrapper>
    </fit_col>
  </fit_row>
</template>
