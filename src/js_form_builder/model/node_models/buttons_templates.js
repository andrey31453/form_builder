// assets
import { classes } from '@js_assets'

// helpers
import { get_element_model } from '@js_m_helpers'

// Buttons
export default {
  // next
  get_button_next_model() {
    return get_element_model(
      null,
      {
        class: classes.next,
        disable_classes: classes.disable,
      },
      ['Дальше']
    )
  },

  // prev
  get_button_prev_model() {
    return get_element_model(
      null,
      {
        class: classes.prev,
      },
      ['Назад']
    )
  },

  // submit
  get_button_submit_model() {
    return get_element_model(
      null,
      {
        class: classes.submit,
        disable_classes: classes.disable,
      },
      ['Отправить']
    )
  },

  // antibot
  get_button_antibot_model() {
    return get_element_model(
      null,
      {
        class: classes.antibot,
      },
      ['Отправить']
    )
  },
}
