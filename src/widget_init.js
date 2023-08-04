// import

import { append_script, get_init_dataset, version, is_dev } from '@init_helpers'

// functions

const append_google_captcha_script = () => {
  const recaptcha_public_key = get_init_dataset('recaptcha_public_key')

  append_script('https://www.google.com/recaptcha/api.js', {
    v: version,
    render: recaptcha_public_key,
  })
}

const append_widget_script = () => {
  if (is_dev()) return

  const widget_url = 'js/widget.js'
  const domen = get_init_dataset('domen')
  append_script(`${domen}/${widget_url}`, { v: version })
}

// init

append_google_captcha_script()
append_widget_script()
