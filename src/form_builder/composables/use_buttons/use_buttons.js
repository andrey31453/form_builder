// store

import { use_config_store, use_view_state_store } from '@store'

// helpers

import h from './helpers/_helpers'

// use_buttons

const use_buttons = () => {
  const config = use_config_store()
  const forms = config.forms
  const template_forms = config.template_forms
  const view_state = use_view_state_store()

  // template
  const buttons = {
    prev: {
      type: 'prev',
      text: 'Назад',
      is: () => {
        return forms.length > 1
      },
      is_disable: () => {
        return !view_state.active_window
      },
      on: () => {
        view_state.active_window--
      },
    },

    next: {
      type: 'next',
      text: 'Дальше',
      is: () => {
        return forms.length && view_state.active_window < forms.length - 1
      },
      is_disable: () => {
        return false
      },
      on: () => {
        view_state.active_window++
      },
    },

    submit: {
      type: 'submit',
      text: 'Отправить',
      is: () => {
        return !forms.length || view_state.active_window === forms.length - 1
      },
      is_disable: () => {
        return false
      },
      on: () => {
        const values = [...h.get_values(forms), ...h.get_values(template_forms)]
        h.on_submit(config, values)
        h.reset_values(forms)
        h.reset_values(template_forms)
      },
    },
  }

  return buttons
}

// export
export default use_buttons
