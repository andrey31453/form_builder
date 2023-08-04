// imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './form_builder/app.vue'
import { use_config_store } from '@store'
import { random } from '@helpers'

// set_config_store
const set_config_store = (config) => {
  const config_store = use_config_store()
  config_store.set_config(config)
}

// init vue in id
const init_vue_in_id = (config) => {
  if (!document.querySelector(config.embed.id)) {
    return void console.info(`don't have ${config.embed.id} in document`)
  }

  createApp(App).use(createPinia()).mount(config.embed.id)
  set_config_store(config)
}

// init vue for button
const create_node = () => {
  const random_id = `random_id__${random()}`

  const vue_container = document.createElement('div')
  vue_container.id = random_id
  document.body.appendChild(vue_container)

  return `#${random_id}`
}

const init_vue_for_button = (config) => {
  const vue_mount_id = create_node('fddf')
  createApp(App).use(createPinia()).mount(vue_mount_id)
  set_config_store(config)
}

// init vue
const embed_types = {
  id: init_vue_in_id,
  button: init_vue_for_button,
}

const init_vue = (config) => {
  embed_types[config.embed.type](config)
}

// export
export default init_vue
