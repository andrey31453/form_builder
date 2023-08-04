// configs
import './assets/configs/button1.json'
import './assets/configs/button2.json'
import './assets/configs/body.json'
import './assets/configs/id1.json'
import './assets/configs/id2.json'

// teeths
import '../../public/images/teeths/bbr.png'
import '../../public/images/teeths/bcr.png'
import '../../public/images/teeths/bk.png'
import '../../public/images/teeths/bm-1.png'
import '../../public/images/teeths/bm-2.png'
import '../../public/images/teeths/bm-3.png'
import '../../public/images/teeths/bp-1.png'
import '../../public/images/teeths/bp-2.png'
import '../../public/images/teeths/tbr.png'
import '../../public/images/teeths/tcr.png'
import '../../public/images/teeths/tk.png'
import '../../public/images/teeths/tm-1.png'
import '../../public/images/teeths/tm-2.png'
import '../../public/images/teeths/tm-3.png'
import '../../public/images/teeths/tp-1.png'
import '../../public/images/teeths/tp-2.png'

// images
import '../../public/images/polina.webp'

// styles
import './dev.sass'

// assets
import { widget_name } from '@js_assets'

const scripts = document.getElementsByTagName('script')
const script = [...scripts].find((s) => s.src.includes('widget_init.js'))

script.id = widget_name
script.dataset.domen = 'http://localhost:8080'
script.dataset.config_paths =
  'id1.json&id2.json&body.json&button1.json&button2.json'
script.dataset.widget_ids = '1&2&3&4&5'
script.dataset.recaptcha_public_key = '6Lcdn4MkAAAAAJYBnm_96JzVMXpDYQbFL5EnMQSG'
