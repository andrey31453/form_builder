// assets
import { widget_name } from '@js_assets'

// TODO добавить в конфиг возможность отключать

const callback = function (s, is_classList) {
  return is_classList ? widget_name + '__' + s : '.' + widget_name + '__' + s
}

// export
export default function (s, is_classList = false) {
  // simple class name
  if (!s.includes(' ')) {
    return callback(s, is_classList)
  }

  // complex class name
  return s
    .split(' ')
    .map((s_s) => {
      return callback(s_s, is_classList)
    })
    .join('')
}
