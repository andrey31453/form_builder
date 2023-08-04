// assets
import { widget_name, icons } from '@js_assets'

// export
export default function (tag, props, childs) {
  // init value
  if (!tag) tag = 'div'
  if (!props) props = {}
  if (!childs) childs = []

  //
  // create element
  //

  let element = document.createElement(tag)

  // svg treatment
  if (tag === 'svg') element = create_scg(props)

  //
  // write props
  //

  Object.keys(props).forEach((key) => {
    // string treatment
    if (typeof props[key] === 'string') {
      props[key] = props[key].trim()
    }

    // null values
    if (!props[key]) {
      return
    }

    if (key === 'class') {
      // class
      const classes_list = props[key]
        .replace(/[\t|\r|\n]+/g, ' ')
        .replace(/[\s\s]+/g, ' ')
        .split(' ')
      classes_list.forEach((c) => {
        element.classList.add(widget_name + '__' + c)
      })

      return
    }

    // class
    if (key === 'for') {
      element.htmlFor = props[key]
      return
    }

    // data active
    if (key.includes('active_classes')) {
      element.setAttribute(
        'data-' + key,
        props[key].replace(/[\t|\r|\n]+/g, ' ').replace(/[\s\s]+/g, ' ')
      )
      return
    }

    // data
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key])
      return
    }

    // general
    else {
      element[key] = props[key]
      element.dataset[key] = props[key]
    }
  })

  //
  // add childs
  //

  childs.forEach((child) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }

    element.appendChild(child)
  })

  // return
  return element
}

// create_scg
const create_scg = ({ svg_name }) => {
  const element = document.createElement('div')
  element.innerHTML = icons[svg_name]
  return element.querySelector('svg')
}
