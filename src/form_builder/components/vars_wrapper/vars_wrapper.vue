<script setup>
// components
import { not_ready } from '@components'

// set vars
import { onMounted, ref } from 'vue'
import { make_modifier } from '@helpers'

import { use_config_store } from '@store'
const config = use_config_store()

const not_ready_status = ref(true)

const vars_wrapper = ref(null)

const set_vars = () => {
  // check load config
  if (!config.ready) return void setTimeout(set_vars, 10)

  const { vars } = config

  Object.keys(vars).forEach((var_key) => {
    vars_wrapper.value.style.setProperty(make_modifier(var_key), vars[var_key])
  })

  not_ready_status.value = false
}
onMounted(set_vars)
</script>

<template>
  <div ref="vars_wrapper">
    <not_ready v-if="not_ready_status" />
    <slot v-else />
  </div>
</template>

<style lang="sass" scoped>
@import '@styles/default'
</style>
