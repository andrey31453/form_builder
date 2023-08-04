// helpers
import { get_dynamic_class, classList_change } from '@js_v_helpers'
import * as dom_purify from 'dompurify'
import { get_init_dataset } from '@init_helpers'

// assets
import { classes, form_active_min_time } from '@js_assets'

// export
export default {
  //
  // widget_button
  //

  // TODO change to vue model
  // TODO add error class to input

  on_widget_button() {
    const widget_active = classList_change(this.targets.widget)

    if (widget_active) {
      // TODO delete extra '.' in the end
      this.set_recaptcha_token()
      this.set_init_time()
    }
  },

  set_init_time() {
    this.form_active_start_time = Date.now()
  },

  set_recaptcha_token() {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(this.recaptcha_public_key, {
          action: 'submit',
        })
        .then((token) => {
          this.token = token
        })
    })
  },

  //
  // tree_label
  //

  on_tree_label(e) {
    const closest_window_wrapper = e.target.closest(
      get_dynamic_class(classes.window_wrapper)
    )
    classList_change(closest_window_wrapper)
  },

  //
  // submit prev next
  //

  // on_submit
  on_submit() {
    this.next_step(this.submit, null)
  },

  // submit
  submit() {
    this.bot_check()

    // TODO вывести сообщение о том что включилась антибот защита
    if (this.is_bot) return

    this.reset_windows_state()
    const input_values = this.get_input_values()
    this.send_input_values(input_values)
    // TODO add submit tree working method
    this.on_widget_button()
  },

  bot_check() {
    this.is_bot =
      this.is_bot ||
      this.has_value_in_antibot_inputs() ||
      // this.not_success_google_recaptcha() ||
      this.not_correct_work_time()
  },

  not_correct_work_time() {
    return Date.now() - this.form_active_start_time < form_active_min_time
  },

  has_value_in_antibot_inputs() {
    return this.targets.antibot_inputs.reduce((result, antibot_input) => {
      return result || antibot_input.value
    }, false)
  },

  async not_success_google_recaptcha() {
    const recaptcha_data = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=6Lcdn4MkAAAAAANpA8-wVqv7y9U1B4mxnQ_TWf6l&response=${this.token}`,
      {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => response.json())
    const success_google_recaptcha =
      recaptcha_data.success && recaptcha_data.score > 0.5
    return !success_google_recaptcha
  },

  // reset windows state
  reset_windows_state() {
    // reset active window
    this.active_window = 0

    // reset window active classes
    this.targets.windows.forEach((window) => {
      // tree mode
      const closest_window_wrapper = window.closest(
        get_dynamic_class(classes.window_wrapper)
      )
      if (closest_window_wrapper) {
        classList_change(closest_window_wrapper, 'remove')
      }

      // other modes
      classList_change(window, 'remove')
    })

    // on window 0
    classList_change(this.targets.windows[0], 'add')
  },

  // get_input_values
  get_input_values() {
    return this.targets.inputs
      .map((window_inputs) => {
        return window_inputs.map((input_object) => {
          const v = input_object.node.value
          input_object.node.value = ''

          return {
            name: input_object.node.placeholder,
            value: dom_purify.sanitize(v),
            crm_id: input_object.crm_id,
          }
        })
      })
      .flat()
  },

  // send_input_values
  send_input_values(input_values) {
    fetch(`${this.domen}/widget/event`, {
      method: 'post',
      body: JSON.stringify({
        data: input_values,
        widget_id: get_init_dataset('widget_id'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },

  // prev
  on_prev() {
    this.change_active(-1)
  },

  // next
  on_next() {
    this.next_step(this.change_active, 1)
  },

  // antibot
  on_antibot() {
    this.is_bot = true
  },

  // change active
  change_active(value) {
    classList_change(this.targets.windows[this.active_window])
    this.active_window += value
    classList_change(this.targets.windows[this.active_window])
  },

  //
  // next_step
  //

  next_step(next_step_method, next_step_args) {
    //
    // not first click
    //

    if (this.targets.inputs_listeners[this.active_window]) {
      next_step_method.call(this, next_step_args)
      return
    }

    //
    // first click
    //

    const current_inputs = this.targets.inputs[this.active_window]

    this.add_listener_to_inputs(current_inputs)
    this.set_valid_data_to_inputs(current_inputs)

    // do next method if values is valid
    if (this.targets.window_valids[this.active_window]) {
      next_step_method.call(this, next_step_args)
    }
  },

  //
  // on check valid
  //

  // add_listener_to_inputs
  add_listener_to_inputs(inputs) {
    const window_index = this.active_window

    inputs.forEach((input, input_index) => {
      input.node.addEventListener('input', () => {
        this.check_valid(window_index, input_index)
        // TODO add debounce
      })
    })

    this.targets.inputs_listeners[this.active_window] = true
  },

  // check_valid_to_inputs
  set_valid_data_to_inputs(inputs) {
    const window_index = this.active_window

    inputs.forEach((input, input_index) => {
      this.check_valid(window_index, input_index)
    })
  },

  //
  // check_valid
  //

  // check_valid
  check_valid(window_index, input_index) {
    const current_input = this.targets.inputs[window_index][input_index]
    const current_value = current_input.node.value

    // count is valid
    let is_valid = true
    if (current_input.filters) {
      current_input.filters.forEach((filter, filter_index) => {
        const current_valid = filter.valid_method(current_value, filter.param)

        // set false validation
        if (!current_valid) {
          is_valid = false
        }

        // change error class if need
        classList_change(
          current_input.errors[filter_index],
          current_valid ? 'remove' : 'add'
        )
        current_input.valids[filter_index] = current_valid
      })
    }

    // set current input valid
    current_input.valid = is_valid

    // set disable to button
    const window_valid = this.get_window_valid()
    const current_next_button = this.get_current_next_button()

    classList_change(
      current_next_button,
      window_valid ? 'remove' : 'add',
      'disable_classes'
    )

    this.targets.window_valids[this.active_window] = window_valid
  },

  // get_window_valid
  get_window_valid() {
    let window_valid = true

    this.targets.inputs[this.active_window].forEach((input) => {
      if (!input.valid) {
        window_valid = false
      }
    })

    return window_valid
  },

  // get_current_next_button
  get_current_next_button() {
    return this.emitters.next[this.active_window] || this.emitters.submit[0]
  },
}
