// TODO on then refactor node_emits_methods

// export
export default class {
  // constructor
  constructor() {
    this.emits = {}
  }

  // on
  on(type, callback) {
    if (!this.emits[type]) this.emits[type] = []

    this.emits[type].push(callback)
  }

  // emit
  emit(type, ...args) {
    if (!this.emits[type]) return
    this.emits[type].forEach((callback) => callback(...args))
  }
}

// register_emits(active_nodes) {
//     Object.keys(active_nodes).forEach((key) => {
//       active_nodes[key].nodes.forEach((active_node) =>
//         active_node.addEventListener('click', (event) => {
//           this.emit(key, event)
//         })
//       )
//     })
//   },

// register_callbacks() {
//     Object.keys(this.active_nodes).forEach((key) => {
//       this.view.node.on(key, this[`on_${key}`])
//     })
//   }
