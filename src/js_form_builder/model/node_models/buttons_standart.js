// helpers
import { get_element_model } from '@js_m_helpers'

// export
export default {
  // create_to_standart_mode
  create_to_standart_mode() {
    const buttons_model = get_element_model(
      null,
      { class: 'button_container --single_button' },
      [this.get_button_submit_model(), this.get_button_antibot_model()]
    )

    this.context.windows_model.get()[0].childs.push(buttons_model)
  },
}
