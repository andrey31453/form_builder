import { widget_name } from '@js_assets'

const get_init_dataset = (key) => {
  const scripts = [...document.querySelectorAll(`#${widget_name}`)]
  return scripts.reduce((dataset, script) => {
    dataset = dataset
      ? dataset + '&' + script.dataset[key]
      : script.dataset[key]
    return dataset
  }, '')
}

export default get_init_dataset
