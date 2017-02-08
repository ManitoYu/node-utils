const encode = (head, body) => {
  return _.reduce(_.concat([head], body), (str, line) => str += `\t${_.join(line, ',\t')}\n`, '')
}

const decode = data => {
  return _(_.split(data, '\r\n'))
    .filter(_.identity)
    .map(line => _.split(line.replace(/\t/g, ''), ','))
    .value()
}

export { encode, decode }