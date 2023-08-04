const change_case = function (type, case_type) {
  if (case_type === 'lower') return type.toLowerCase()
  if (case_type === 'upper') return type.toUpperCase()

  return type
}

// type_of
const type_of = (target, case_type = 'lower') => {
  const type = Object.prototype.toString.call(target).split(' ')[1].slice(0, -1)

  return change_case(type, case_type)
}

// export
export default type_of
