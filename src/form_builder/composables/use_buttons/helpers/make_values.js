import { type_is } from '@helpers'

const make_values = (elem, func, func_args) => {
  if (type_is(elem, 'array')) {
    return void elem.forEach((elem_children) =>
      make_values(elem_children, func, func_args)
    )
  }

  if (elem.childrens) {
    return void elem.childrens.forEach((elem_children) =>
      make_values(elem_children, func, func_args)
    )
  }

  func(elem, func_args)
}

export default make_values
