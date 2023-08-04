// libs
import { defineStore } from 'pinia'

// stores
import config_store from './config/config'
import view_state_store from './view_state/view_state'

// define stores
const use_config_store = defineStore('config', config_store)
const use_view_state_store = defineStore('view_state', view_state_store)

// export
export { use_config_store, use_view_state_store }
