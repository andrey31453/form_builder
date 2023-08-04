// helpers
import { get_element_model, add_options } from '@js_m_helpers'

// assets
import { classes } from '@js_assets'

// Buttons
export default {
  // quiz_mode
  create_to_quiz_mode() {
    this.context.windows_model.value = this.context.windows_model
      .get()
      .map((window_model, window_index) => {
        window_model.active_classes = `
					${window_model.active_classes}
					${classes.active}
				`

        // first window
        if (!window_index) {
          return this.get_first_buttons_for_quiz_mode(window_model)
        }

        // last window
        if (window_index === this.context.windows_model.get().length - 1) {
          return this.get_last_buttons_for_quiz_mode(window_model)
        }

        // other windows
        return this.get_standart_buttons_for_quiz_mode(window_model)
      })
  },

  // first windows
  get_first_buttons_for_quiz_mode(window_model) {
    window_model = add_options(window_model, {
      class: classes.active,
    })

    const buttons_wrapper = get_element_model(
      null,
      { class: 'button_container --single_button' },
      [this.get_button_next_model(), this.get_button_antibot_model()]
    )
    window_model.childs.push(buttons_wrapper)

    return window_model
  },

  // other windows
  get_standart_buttons_for_quiz_mode(window_model) {
    window_model.childs.push(
      get_element_model(null, { class: 'button_container' }, [
        this.get_button_prev_model(),
        this.get_button_next_model(),
        this.get_button_antibot_model(),
      ])
    )

    return window_model
  },

  // last windows
  get_last_buttons_for_quiz_mode(window_model) {
    window_model.childs.push(
      get_element_model(null, { class: 'button_container' }, [
        this.get_button_prev_model(),
        this.get_button_submit_model(),
        this.get_button_antibot_model(),
      ])
    )

    return window_model
  },
}
