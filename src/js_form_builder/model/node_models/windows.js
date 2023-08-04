// helpers
import {
  get_element_model,
  get_computed_options,
  get_unic_id,
} from '@js_m_helpers'

// assets
import { classes } from '@js_assets'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.value = []
    this.context = context
    this.config = config
  }

  // create
  create() {
    this.create_standart_model()

    if (this.config.modifiers.mode === 'tree') {
      this.update_model_to_tree_mode()
    }
  }

  // create_standart_model
  create_standart_model() {
    this.config.views.windows.forEach((window, window_idx) => {
      // fix if window mode === standart but windows length > 1
      if (this.config.modifiers.mode === 'standart' && window_idx) return

      const window_model = get_element_model(
        null,
        get_computed_options(this.config, 'window')
      )

      window.forEach((window_elem, window_elem_idx) => {
        const input_id = get_unic_id(window_idx, window_elem_idx)
        const input_model_array = this.context.input_model.get(
          window_elem,
          input_id
        )

        input_model_array.forEach((input_model) =>
          window_model.childs.push(input_model)
        )
      })

      // add anti-bot input
      window_model.childs.push(...this.context.input_model.get(false, 0))

      this.value.push(window_model)
    })
  }

  //
  // tree_mode
  //

  // update_model_to_tree_mode
  update_model_to_tree_mode() {
    this.value = this.value.map(this.add_wrapper_to_window)
  }

  // add_wrapper_to_window
  add_wrapper_to_window = (window_model, window_index) => {
    const window_wrapper_model = get_element_model(
      null,
      {
        class: classes.window_wrapper,
        active_classes: classes.active,
      },
      [
        get_element_model(
          null,
          {
            class: `
							${classes.tree_label}
							tree_label
						`,
          },
          [this.config.views.tree_labels[window_index]]
        ),

        window_model,
      ]
    )

    return window_wrapper_model
  }

  // get
  get() {
    return this.value
  }
}
