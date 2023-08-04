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

  // create
  create() {
    this.value = get_element_model(null, { class: 'widget_form_wrapper' }, [
      this.context.widget_buttons_model.get('close'),
      get_element_model(
        null,
        get_computed_options(this.config, 'widget_form'),
        this.context.windows_model.get()
      ),
    ])
  }

  // get
  get() {
    return this.value
  }
}
