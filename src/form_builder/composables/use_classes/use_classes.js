const use_classes = (props) => {
  return Object.keys(props).reduce((cls, prop_key) => {
    cls[prop_key] = `${props[prop_key]}:${prop_key}`

    return cls
  }, {})
}

export default use_classes
