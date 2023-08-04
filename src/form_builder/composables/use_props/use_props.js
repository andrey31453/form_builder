import { type_is, type_of } from '@helpers'

const types = {
  string: String,
  number: Number,
  array: Array,
  object: Object,
  boolean: Boolean,
  null: null,
  undefined: undefined,
}

const create_prop = (value) => {
  // array
  if (type_is(value, 'array')) {
    return {
      default: value[0],
      type: types[type_of(value[0])],
      validator: (v) => value.includes(v),
    }
  }

  // other
  return {
    default: value,
    type: types[type_of(value)],
  }
}

const use_props = (props) => {
  return Object.keys(props).reduce((acc, prop_key) => {
    acc[prop_key] = create_prop(props[prop_key])
    return acc
  }, {})
}

export default use_props
