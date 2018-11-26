const buffer = new ArrayBuffer(8)
const view = new DataView(buffer)
const mask = 0x80

function negateNumber (number) {
  if (typeof number !== 'number') throw TypeError('only numbers are allowed to be negative') // sorry electron users

  view.setFloat64(0, number)

  const head = view.getUint8(0)
  view.setUint8(0, (~head & mask) | (head & ~mask))

  return view.getFloat64(0)
}

module.exports = negateNumber
