export default function (model, options) {
  Object.keys(options).forEach((option_key) => {
    options[option_key] = `
			${model.options[option_key] ?? ''}
			${options[option_key]}
		`
  })

  Object.assign(model.options, options)

  return model
}
