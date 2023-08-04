// helpers
import { get_dynamic_class } from '@js_v_helpers'

const do_classlist_method = (node, method, active_class) => {
  node.classList[method](get_dynamic_class(active_class, true))
  return node.className.includes(active_class)
}

// export
export default function (node, method = 'toggle', type = 'active_classes') {
  const active_classes = node.dataset[type]

  // simple active class
  if (!active_classes.includes(' ')) {
    return do_classlist_method(node, method, active_classes)
  }

  // multy active class
  return active_classes.split(' ').map((active_class) => {
    return do_classlist_method(node, method, active_class)
  })
}
