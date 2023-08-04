<script setup>
// components

import { fit_button, fit_label } from '@ui'

// props

import { use_props } from '@composables'

const props = defineProps(
  use_props({
    unic_id: null,
  })
)

// data

import { use_config_data, use_template_data } from '@composables'
import { ref } from 'vue'

const data =
  use_config_data(props.unic_id, []) || use_template_data('Файлы', [])

// template

const filenames = ref('')

const set_file = (file) => {
  const form_data = new FormData()
  form_data.append(`${file.name}`, file)
  data.value.push(form_data)
}

const set_files = (files) => {
  data.value = []
  files.forEach(set_file)
}

const set_filename = (file) => {
  filenames.value = filenames.value
    ? filenames.value + '; ' + file.name
    : file.name
}

const set_filenames = (files) => {
  filenames.value = ''
  files.forEach(set_filename)
}

const on_input = (v) => {
  const files = [...v.target.files]

  set_files(files)
  set_filenames(files)
}
</script>

<template>
  <fit_label :label="data.name">
    <template #default="{ id }">
      <fit_button
        variant="outline"
        :text="
          data.value.length
            ? `Файлы прикреплены (${data.value.length})`
            : 'Выберите файлы'
        "
      />
    </template>

    <template #hide="{ id }">
      <input
        :id="id"
        type="file"
        multiple
        @input="on_input"
      />
    </template>
  </fit_label>
</template>
