// helpers
import { get_dynamic_class } from '@js_v_helpers'

// assets
import { classes } from '@js_assets'

// export
export default class {
  // add vars
  add(widget_vars) {
    widget_vars.forEach(this.add_var)
  }

  // add_var
  add_var(single_var) {
    document
      .querySelector(get_dynamic_class(classes.widget))
      .style.setProperty(single_var.key, single_var.value)
  }
}
