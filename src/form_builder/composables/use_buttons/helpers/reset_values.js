import make_values from './make_values'

const reset_value = (elem) => {
  elem.value = elem.default_value
}

const reset_values = (forms, default_value_key) => {
  make_values(forms, reset_value, default_value_key)
}

export default reset_values
