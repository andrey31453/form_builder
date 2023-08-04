// assets
import { widget_name } from '@js_assets'

// export
export default class {
  // constructor
  constructor(context) {
    this.context = context
    this.value = []
  }

  //
  // create
  //

  create() {
    // no_style
    if (this.context.special.no_style) return

    this.add_vars()
    this.add_computed_vars()
  }

  //
  // add_vars
  //

  add_vars() {
    Object.keys(this.context.vars).forEach((var_key) =>
      this.add_var(var_key, this.context.vars[var_key])
    )
  }

  add_var(key, value) {
    this.value.push({
      key: this.create_css_vars_key(key),
      value: value,
    })
  }

  //
  // add_computed_vars
  //

  add_computed_vars() {
    // add_opacity_colors
    if (
      this.context.vars.font_color &&
      this.context.vars.background_color &&
      this.context.vars.base_opacity
    ) {
      this.add_opacity_colors()
    }

    // add_rgb_colors
    if (this.context.vars.font_color && this.context.vars.background_color) {
      this.add_rgb_colors()
    }
  }

  //  add_opacity_colors
  add_opacity_colors() {
    // font_color_rgb
    const font_color_opacity = this.get_opacity_color(
      this.context.vars.font_color,
      '#00000070'
    )
    this.value.push({
      key: this.create_css_vars_key('font_color_opacity'),
      value: font_color_opacity,
    })

    // background_color_rgb
    const background_color_opacity = this.get_opacity_color(
      this.context.vars.background_color,
      '#ffffff70'
    )
    this.value.push({
      key: this.create_css_vars_key('background_color_opacity'),
      value: background_color_opacity,
    })
  }

  // add_rgb_colors
  add_rgb_colors() {
    // font_color_rgb
    const font_color_rgb = this.get_rgb_color(
      this.context.vars.font_color,
      '00, 00, 00'
    )
    this.value.push({
      key: this.create_css_vars_key('font_color_rgb'),
      value: font_color_rgb,
    })

    // background_color_rgb
    const background_color_rgb = this.get_rgb_color(
      this.context.vars.background_color,
      '256, 256, 256'
    )
    this.value.push({
      key: this.create_css_vars_key('background_color_rgb'),
      value: background_color_rgb,
    })
  }

  //
  // helpers
  //

  // get_opacity_color
  get_opacity_color(color, default_value) {
    if (!color.match(/#/g)) return default_value

    const opacity_procent = `${100 * this.context.vars.base_opacity}`.match(
      /\d\d$/
    )[0]
    return `${color}${opacity_procent}`
  }

  // get_rgb_color
  get_rgb_color(color, default_value) {
    if (!color.match(/#/g)) return default_value

    return color
      .match(/[^#]{2}/g)
      .map((color) => parseInt(color, 16))
      .join(', ')
  }

  create_css_vars_key(key) {
    return `--${widget_name}__` + key
  }

  // get
  get() {
    return this.value
  }
}
