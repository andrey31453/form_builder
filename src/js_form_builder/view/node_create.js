// helpers
import { create_node_element, is_creatable } from '@js_v_helpers'

// export
export default {
  // create_node
  create_node(node_model) {
    // create
    if (is_creatable(node_model)) {
      return create_node_element(
        node_model.tag,
        node_model.options,
        node_model.childs
      )
    }

    // recursio
    else {
      node_model.childs = node_model.childs.map(this.create_node.bind(this))
      return create_node_element(
        node_model.tag,
        node_model.options,
        node_model.childs
      )
    }
  },

  // add_node
  add_node(nodes, target) {
    if (!Array.isArray(nodes)) nodes = [nodes]
    if (!target) target = document.body

    nodes.forEach((node) => target.append(node))
  },
}
