import JSFormBuilder from './js_form_builder/form_builder'
import init_vue from './init_vue'
import { configs_loader } from '@init_helpers'

const init_form = (config) => {
  if (config.embed.type === 'body') return void new JSFormBuilder(config)
  else init_vue(config)
}

configs_loader().then((configs) => {
  configs.forEach(init_form)
})
