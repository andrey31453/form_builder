<script setup>
// сomponents

import { form_elems } from '@components'
import { fit_form_group } from '@ui'

// store

import { use_config_store, use_view_state_store } from '@store'

const config = use_config_store()
const forms = config.forms
</script>

<template>
  <fit_form_group
    v-for="(group, group_index) in forms[0]"
    :key="group_index"
    :single="group.length === 1"
  >
    <!-- form elem -->
    <component
      v-for="(elem, elem_index) in group"
      :key="elem_index"
      :is="form_elems[elem.component]"
      :unic_id="elem.unic_id"
    />
    <!-- /form elem -->
  </fit_form_group>
</template>
