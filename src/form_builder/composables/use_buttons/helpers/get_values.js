import make_values from './make_values'
import * as dom_purify from 'dompurify'

const set_value = (elem, values) => {
  values.push({
    name: elem.name,
    value: dom_purify.sanitize(elem.value),
    crm_id: elem.id,
  })
}

const get_values = (forms) => {
  const values = []

  make_values(forms, set_value, values)

  return values
}

export default get_values
