const type_is = (target, type) =>
  Object.prototype.toString
    .call(target)
    .split(' ')[1]
    .toLowerCase()
    .includes(type)

export default type_is
