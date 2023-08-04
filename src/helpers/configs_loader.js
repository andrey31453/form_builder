import get_init_dataset from './get_init_dataset'
import deep_merge from './deep_merge'

const config_loader = (config_url) => {
  return fetch(config_url).then((response) => response.json())
}

const split_dataset = (dataset, prefix_path = false) => {
  const dataset_array = dataset.split('&amp;').join('&').split('&')
  if (!prefix_path) return dataset_array

  return dataset_array.map((dataset_elem) => `${prefix_path}/${dataset_elem}`)
}

const configs_loader = async () => {
  const datasets = {
    domen: get_init_dataset('domen'),
    config_paths: get_init_dataset('config_paths'),
    widget_ids: get_init_dataset('widget_ids'),
  }

  datasets.config_paths = split_dataset(datasets.config_paths)
  datasets.widget_ids = split_dataset(datasets.widget_ids)

  const [configs] = [
    await Promise.all(datasets.config_paths.map(config_loader)),
  ]

  return configs.map((_, index) => {
    return deep_merge(
      configs[index].config,
      { widget_id: datasets.widget_ids[index] },
      { domen: datasets.domen }
    )
  })
}

export default configs_loader
