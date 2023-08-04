import { ref } from 'vue'
import { use_config_store, use_view_state_store } from '@store'

const use_not_vue_button = () => {
  const view = ref(false)

  const config = use_config_store()
  const button_id = config.embed.id
  const toggle = () => {
    view.value = !view.value
  }
  document.querySelector(button_id).addEventListener('click', toggle)

  return {
    view,
  }
}

export default use_not_vue_button
