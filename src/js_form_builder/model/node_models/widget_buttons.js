// helpers
import { get_element_model, get_computed_options } from '@js_m_helpers'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.value = {}
    this.context = context
    this.config = config
  }

  //
  // create
  //

  create() {
    this.create_open_button()
    this.create_close_button()
  }

  //
  // open
  //

  create_open_button() {
    // open_button_childs
    let open_button_childs = []
    if (this.config.views.widget_button_open_text) {
      open_button_childs.push(
        get_element_model(
          'span',
          null,
          this.config.views.widget_button_open_text
        )
      )
    }
    if (this.config.views.widget_button_open_icon) {
      open_button_childs.push(
        get_element_model('svg', {
          svg_name: this.config.views.widget_button_open_icon,
          class: '',
        })
      )
    }

    // open_button
    this.value.open = get_element_model(
      null,
      { class: 'widget_button_wrapper' },
      [
        get_element_model(
          null,
          get_computed_options(this.config, 'widget_button', {
            class: `--open`,
          }),
          open_button_childs
        ),
      ]
    )
  }

  //
  // close
  //

  create_close_button() {
    // close_button_childs
    let close_button_childs = []
    if (this.config.views.widget_button_close_text) {
      close_button_childs.push(
        get_element_model(
          'span',
          null,
          this.config.views.widget_button_close_text
        )
      )
    }
    if (this.config.views.widget_button_close_icon) {
      close_button_childs.push(
        get_element_model('svg', {
          svg_name: this.config.views.widget_button_close_icon,
          class: '',
        })
      )
    }

    // close_button
    this.value.close = get_element_model(
      null,
      get_computed_options(this.config, 'widget_button', {
        class: `--close`,
      }),
      close_button_childs
    )
  }

  //
  // get
  //

  get(key) {
    return this.value[key]
  }
}
