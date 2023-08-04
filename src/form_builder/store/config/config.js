import { type_is, deep_copy } from '@helpers'

export default {
  // state
  state: () => {
    return {
      vars: null,
      views: null,
      forms: null,
      special: null,
      scrypts: null,
      modifiers: null,
      embed: null,

      ready: false,
      current_unic_id: 0,
    }
  },

  // actions
  actions: {
    set_config(config) {
      Object.keys(config).forEach(
        (config_key) => (this[config_key] = config[config_key])
      )
      this.ready = true

      this.correct_config()
    },

    // correct_config

    correct_config() {
      this.forms = this.forms.map((form) => {
        return form.map(this.correct_config_to_form)
      })

      this.make_hidden_window()
    },

    correct_config_to_form(window_elem) {
      if (!type_is(window_elem, 'array')) {
        window_elem = [deep_copy(window_elem)]
      }

      return window_elem.map(this.correct_config_to_elem)
    },

    make_hidden_window() {
      this.template_forms = []
    },

    make_hidden_elem(new_elem) {
      const template_forms_length = this.template_forms.push(new_elem)

      return this.template_forms[template_forms_length - 1]
    },

    correct_config_to_elem(form_elem) {
      this.set_component_default(form_elem)
      this.set_value(form_elem)
      this.set_unic_id(form_elem)
      this.set_filters(form_elem)

      return form_elem
    },

    set_component_default(form_elem) {
      if (form_elem.component) return
      form_elem.component = 'input'
    },

    set_value(form_elem) {
      if (form_elem.value) return
      form_elem.value = null
    },

    set_unic_id(form_elem) {
      form_elem.unic_id = this.current_unic_id++
    },

    set_filters(form_elem) {
      if (form_elem.filters) return

      const filter_keys = ['required', 'min', 'max']
      const filters = {}

      Object.keys(form_elem).forEach((form_elem_key) => {
        if (!filter_keys.includes(form_elem_key)) return

        filters[form_elem_key] = form_elem[form_elem_key]
      })

      form_elem.filters = filters
    },
  },
}
