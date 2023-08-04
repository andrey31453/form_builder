const ids = {}

export default function (first, second) {
  if (!ids[first]) ids[first] = {}
  if (!ids[first][second])
    ids[first][second] = 'id_' + Math.round(10 ** 6 * Math.random())

  return ids[first][second]
}
