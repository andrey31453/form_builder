// helpers
import { get_element_model } from '@js_m_helpers'

// export
export default {
  // create
  create_to_tree_mode() {
    const buttons_wrapper = get_element_model(
      null,
      { class: 'button_container --single_button' },
      [this.get_button_submit_model(), this.get_button_antibot_model()]
    )

    this.context.windows_model.value.push(buttons_wrapper)
  },
}
