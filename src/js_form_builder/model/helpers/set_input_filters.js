// import
import { filters } from '@js_assets'

// export
export default function (input_config) {
  // set filters value for input
  const filters_value = Object.keys(filters).reduce((acc, filter) => {
    return input_config[filter] ? acc + ' ' + filter : acc
  }, '')

  // not filters
  if (!filters_value) return {}

  // has filters
  return filters_value
    .trim()
    .split(' ')
    .reduce(
      (res, filter) => {
        res[`data-filter_${filter}`] = input_config[filter]
        return res
      },
      { filters: filters_value }
    )
}
