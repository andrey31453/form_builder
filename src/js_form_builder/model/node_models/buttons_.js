// Buttons
const Buttons = class {
  // constructor
  constructor(context, config) {
    this.value = []
    this.context = context
    this.config = config

    this.set_create_method()
  }

  // set_create_method
  set_create_method() {
    this.create = this[`create_to_${this.config.modifiers.mode}_mode`]
  }

  // get
  get() {
    return this.value
  }
}

// mixins
import buttons_standart from './buttons_standart'
import buttons_quiz from './buttons_quiz'
import buttons_tree from './buttons_tree'
import buttons_templates from './buttons_templates'

Object.assign(
  Buttons.prototype,
  buttons_standart,
  buttons_quiz,
  buttons_tree,
  buttons_templates
)

// export
export default Buttons
