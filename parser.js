export const xml = xmlString => new Promise((resolve, reject) => {
  xml2js.parseString(xmlString, { explicitArray: false }, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})