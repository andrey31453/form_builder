<script setup>
// сomponents

import * as components from '@components'
import { fit_transition, fit_window, fit_form_group } from '@ui'

// store

import { use_config_store, use_view_state_store } from '@store'

const config = use_config_store()
const windows = config.views.windows
const view_state = use_view_state_store()
</script>

<template>
  <fit_window>
    <fit_transition>
      <fit_form_group
        v-for="(group, group_index) in windows[view_state.active_window]"
        :key="group_index"
      >
        <template
          v-for="(elem, elem_index) in group"
          :key="elem_index"
        >
          <!-- form elem -->
          <component
            :is="components[elem.component]"
            :unic_id="elem.unic_id"
          />
          <!-- /form elem -->
        </template>
      </fit_form_group>
    </fit_transition>
  </fit_window>

  <window_buttons />
</template>
