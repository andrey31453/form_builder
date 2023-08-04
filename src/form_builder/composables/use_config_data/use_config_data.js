import { use_config_store } from '@store'

const use_config_data = (unic_id, value = null) => {
  if (unic_id === null || unic_id === undefined) return unic_id

  const config = use_config_store()
  const forms = config.forms

  let data = null
  forms.forEach((form) =>
    form.forEach((group) =>
      group.forEach((elem) => {
        if (elem.unic_id !== unic_id) return

        data = elem
        data.value = value
        data.default_value = value
      })
    )
  )

  return data
}

export default use_config_data
