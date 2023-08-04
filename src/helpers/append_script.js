const get_string_params = (params) => {
  return Object.keys(params).reduce((string_params, key) => {
    if (!string_params.length) return `${key}=${params[key]}`

    return `${string_params}&${key}=${params[key]}`
  }, ``)
}

const append_script = (src, params) => {
  const script_node = document.createElement('script')
  const string_params = get_string_params(params)
  script_node.src = `${src}?${string_params}`
  script_node.type = 'text/javascript'

  document.body.append(script_node)
}

export default append_script
