<script setup>
// props
import { use_props } from '@composables'
const props = defineProps(
  use_props({
    options: {},
  })
)

// сomponents

import * as components from '@components'
import {
  fit_transition,
  fit_window,
  fit_form_group,
  fit_row,
  fit_col,
} from '@ui'

import { fit_buttons_wrapper, fit_button } from '@ui'
import { use_buttons } from '@composables'
const buttons = use_buttons()

// store

import { use_config_store, use_view_state_store } from '@store'

const config = use_config_store()
const windows = config.views.windows
const view_state = use_view_state_store()
</script>

<template>
  <div class="exhibition">
    <fit_window
      v-for="(window, window_index) in windows"
      :key="window_index"
      :class="`child-${window_index}`"
    >
      <h2 class="title">Ждём вас на бесплатную онлайн консультацию!</h2>
      <h2 class="title doc">Запись на приём!</h2>
      <fit_transition>
        <fit_form_group
          v-for="(group, group_index) in window"
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

        <template v-if="window_index">
          <fit_buttons_wrapper
            style="
              display: flex;
              justify-content: flex-start;
              width: 100%;
              padding-right: 40px;
            "
          >
            <fit_button
              :button="buttons.submit"
              @on="buttons.submit.on"
            />
          </fit_buttons_wrapper>
        </template>
      </fit_transition>
    </fit_window>
  </div>
</template>

<style lang="sass">

.exhibition
	display: flex

	&.bacsdgjdkfjbkl
		position: relative
		&::before
			position: absolute
			z-index: 0
			content: ''
			left: 55%
			right: -22px
			top: -22px
			bottom: -22px

			background-color: #399
			opacity: 0.05
		.child-1
			padding: 5px
	.child-0
		width: 55%
		margin-top: 50px
		.title
			display: none
	.child-1
		position: relative
		z-index: 1
		width: 42%
		margin-left: 3%
		.title
			font-weight: 600 !important
			color: rgb(3, 153, 153) !important
			font-size: 32px !important
		&>div
			align-items: flex-start
.doctors
	.title:not(.doc)
			display: none
	.child-0
		width: 45%
	.child-1
		width: 52%

	.bacsdgjdkfjbkl
		&::before
			left: 46.5%
			opacity: 0.05
</style>
