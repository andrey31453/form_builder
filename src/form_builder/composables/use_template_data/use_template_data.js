import { use_config_store } from '@store'

const use_config_data = (name, default_value) => {
  const config = use_config_store()

  return config.make_hidden_elem({
    name,
    default_value,
    value: default_value,
    id: 0,
  })
}

export default use_config_data
