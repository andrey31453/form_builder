export default {
  // required
  required: {
    valid_method: (val) => {
      return val ? true : false
    },
    error_text: () => {
      return 'Поле обязательно для заполнения'
    },
  },

  // min
  min: {
    valid_method: (val, param) => {
      return val.length >= param
    },
    error_text: (param) => {
      return 'Должно быть больше ' + param + ' символов'
    },
  },

  // max
  max: {
    valid_method: (val, param) => {
      return val.length <= param
    },
    error_text: (param) => {
      return 'Должно быть меньше ' + param + ' символов'
    },
  },
}
