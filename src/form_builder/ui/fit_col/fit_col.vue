<script>
// breadcrumbs props
import { breadcrumbs } from '@consts'
const breadcrumb_props = { cols: false }
Object.keys(breadcrumbs).forEach(
  (breadcrumb) => (breadcrumb_props[breadcrumb] = false)
)
</script>

<script setup>
// components
import { fit_window } from '@ui'

// props
import { use_props } from '@composables'
import { ref } from 'vue'

const props = defineProps(use_props({ window: false, ...breadcrumb_props }))

const col_classes = ref('col')
const cols = Object.keys(props).forEach((prop_key) => {
  if (!props[prop_key]) return
  const breadcrumb_key = prop_key === 'cols' ? 'true' : prop_key
  col_classes.value = `${col_classes.value} ${breadcrumb_key}:col_${props[prop_key]}`
})
</script>

<template>
  <div :class="col_classes">
    <template v-if="!window">
      <slot />
    </template>
    <template v-else>
      <fit_window>
        <slot />
      </fit_window>
    </template>
  </div>
</template>

<style lang="sass" scoped>
@import '@styles/utils/row_col'
</style>
