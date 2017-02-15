const encode = (head, body) => {
  return _.reduce(_.concat([head], body), (str, line) => str += `\t${_.join(line, ',\t')}\r\n`, '')
}

const decode = data => {
  return _(data)
    .split('\n')
    .compact()
    .map(line => _.trimEnd(line, '\r'))
    .map(line => _.split(line.replace(/\t/g, ''), ','))
    .value()
}

export { encode, decode }