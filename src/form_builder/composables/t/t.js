import use_csses from '../use_csses/use_csses'
import use_classes from '../use_classes/use_classes'

const t = (props) => {
  return {
    css: use_csses(props),
    cls: use_classes(props),
  }
}

export default t
