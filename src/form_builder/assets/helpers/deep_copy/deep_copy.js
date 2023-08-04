// deep_copy
const deep_copy = (target) => {
  // primitive and function
  if (typeof target !== 'object') {
    return target
  }

  // array
  if (Array.isArray(target)) {
    return target.map(deep_copy)
  }

  // null
  if (!target) {
    return target
  }

  // object
  return Object.keys(target).reduce((result, key) => {
    result[key] = deep_copy(target[key])
    return result
  }, {})
}

// export
export default deep_copy
