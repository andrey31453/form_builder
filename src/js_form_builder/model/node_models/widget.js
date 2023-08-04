// helpers
import { get_element_model, get_computed_options } from '@js_m_helpers'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.value = null
    this.context = context
    this.config = config
  }

  //
  // create
  //

  create() {
    this.value = get_element_model(
      null,
      get_computed_options(this.config, 'widget_wrapper', {
        class: this.get_config_modifications(),
      }),
      [
        get_element_model(
          null,
          get_computed_options(this.config, 'widget', {
            class: this.get_config_modifications(),
          }),
          [
            this.context.overlay.get(),
            this.context.form_model.get(),

            this.context.widget_buttons_model.get('open'),
          ]
        ),
      ]
    )
  }

  //
  // get config classes modifications
  //

  get_config_modifications() {
    // no_style
    if (this.config.special.no_style) return ''

    return Object.keys(this.config.modifiers).reduce(
      this.get_config_modification,
      ''
    )
  }

  get_config_modification = (modifications, style_key) => {
    if (typeof this.config.modifiers[style_key] === 'string') {
      return `
				${modifications}
				--${style_key}__${this.config.modifiers[style_key]}
			`
    } else {
      return `
				${modifications}
				--${this.config.modifiers[style_key] ? 'has_' : 'not_'}${style_key}
			`
    }
  }

  //
  // get
  //

  get() {
    return this.value
  }
}
