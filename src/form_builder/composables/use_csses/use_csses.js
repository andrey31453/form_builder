import { is_var } from '@helpers'

const use_csses = (props) => {
  return Object.keys(props).reduce((css_params, prop_key) => {
    css_params[prop_key] = is_var(props[prop_key])
      ? `var(${props[prop_key]})`
      : props[prop_key]
    return css_params
  }, {})
}

export default use_csses
