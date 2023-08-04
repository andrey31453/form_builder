export default function (view_model) {
  if (!view_model.childs.length) return true

  let only_string_childs = true
  view_model.childs.forEach((child) => {
    if (typeof child !== 'string') {
      only_string_childs = false
    }
  })

  return only_string_childs
}
