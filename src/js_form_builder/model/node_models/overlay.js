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
      get_computed_options(this.config, 'widget_button', {
        class: `overlay`,
      })
    )
  }

  //
  // get
  //

  get() {
    return this.value
  }
}
