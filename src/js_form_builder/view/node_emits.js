// helpers
import { get_dynamic_class } from '@js_v_helpers'

// assets
import { classes } from '@js_assets'

// export
export default {
  // on_emits
  on_emits() {
    this.set_emmiters_node()
    this.register_emits()
    this.set_targets()
  },

  // set_emmiters_node
  set_emmiters_node() {
    Object.keys(this.emitters).forEach((key) => {
      // not emitters
      if (!classes[key]) return

      // emitters
      const selector = classes[key]
        .split(' ')
        .map((s) => get_dynamic_class(s))
        .join('')

      this.emitters[key] = document.querySelectorAll(selector)
    })
  },

  // register_emits
  register_emits() {
    Object.keys(this.emitters).forEach((key) => {
      this.emitters[key].forEach((emitter_node) =>
        emitter_node.addEventListener('click', this[`on_${key}`].bind(this))
      )
    })
  },
}
