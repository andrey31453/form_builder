<script setup>
// components

import { vars_wrapper } from '@components'
import { embedded_in_id, embedded_for_button } from '@views'

// store
import { use_config_store } from '@store'
import { computed } from 'vue'

const config = use_config_store()
const embed_views = {
  id: embedded_in_id,
  button: embedded_for_button,
}

const component_is = computed(() => {
  return embed_views[config.embed.type]
})
</script>

<template>
  <vars_wrapper>
    <component :is="component_is" />
  </vars_wrapper>
</template>
