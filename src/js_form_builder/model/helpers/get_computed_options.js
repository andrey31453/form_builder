// import
import { classes } from '@js_assets'

// export
export default (context, option_name, add_option = {}) => {
  // computed
  const computed_id = `
		${context.special[`${option_name}__ids`] ?? ''}
		
	`

  const computed_class = `
		${option_name}
		${classes[option_name] ?? ''} 
		${context.special[`${option_name}__classes`] ?? ''}
		${add_option.class ?? ''}
	`

  const computed_active_classes = `
		${classes.active} 
		${context.special[`${option_name}__active_classes`] ?? ''} 
		${add_option.active_classes ?? ''}
	`

  const computed_disable_classes = `
		${classes.disable} 
		${context.special[`${option_name}__disable_classes`] ?? ''} 
		${add_option.disable_classes ?? ''}
		`

  // return
  return {
    ...add_option,
    ...{
      id: computed_id,
      class: computed_class,
      active_classes: computed_active_classes,
      disable_classes: computed_disable_classes,
    },
  }
}
