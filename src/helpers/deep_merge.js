// helpers

import type_of from './type_of'
import type_is from './type_is'

const is_mergeable_type = (...args) => {
  return type_is(args[0], 'object') || type_is(args[0], 'array')
}

const get_last_believable_value = (...values) => {
  return values.reduceRight((believable_value, arg) => {
    return believable_value || arg
  }, false)
}

const get_keys = (...args) => {
  const keys = new Set()
  args.forEach((arg) => {
    Object.keys(arg).forEach(keys.add, keys)
  })
  return [...keys]
}

const get_init_result = (...args) => {
  return type_is(args[0], 'object') ? {} : []
}

const merge_values = (...values) => {
  const last_believable_value = get_last_believable_value(...values)

  // is not merged type
  if (!is_mergeable_type(last_believable_value)) return last_believable_value

  const filtered_values = values.filter(
    (v) => type_of(last_believable_value) === type_of(v)
  )

  // not any merged value
  if (filtered_values.length === 1) return last_believable_value

  return deep_merge(...filtered_values)
}

// deep_merge

const deep_merge = (...args) => {
  return get_keys(...args).reduce((result, key) => {
    const values = args.map((arg) => arg[key])
    result[key] = merge_values(...values)
    // console.log(`${key}: `, result[key])

    return result
  }, get_init_result(...args))
}

// export

export default deep_merge
