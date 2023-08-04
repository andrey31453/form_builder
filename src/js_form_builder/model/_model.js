// modules
import NodeModel from './node'
import CSSVars from './css_vars'

// export
export default class {
  // constructor
  constructor({ modifiers, vars, special, views }) {
    // config
    this.modifiers = modifiers
    this.vars = vars
    this.special = special
    this.views = views

    // modules
    this.node = new NodeModel(this)
    this.css_vars = new CSSVars(this)
  }

  // init
  init() {
    this.node.create()
    this.css_vars.create()
  }
}
