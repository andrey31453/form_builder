// assets
import { widget_name } from '@js_assets'

// export
export default function (tag, options, childs) {
  // computed
  const computed_tag = tag ?? null

  const computed_options = options
    ? {
        ...options,
        ...{ [widget_name]: 'true' },
      }
    : {}

  let computed_childs = childs ? childs : []
  if (typeof computed_childs === 'string') computed_childs = [computed_childs]

  // return
  return {
    tag: computed_tag,
    options: computed_options,
    childs: computed_childs,
  }
}
