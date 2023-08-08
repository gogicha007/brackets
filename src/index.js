module.exports = function check(str, bracketsConfig) {
  let strArray = str.split('')
  let i = strArray.length
  let closed = false

  const objConfig = bracketsConfig.reduce((object, value) => {
      return { ...object, [value[0]]: value[1] }
  }, {})

  while (i--) {
      if (i > 0) {
          // console.log(`${strArray[i - 1]} : ${strArray[i]} : ${strArray[i] === objConfig[strArray[i - 1]]}`)
          if (strArray[i] === objConfig[strArray[i - 1]]) {
              strArray.splice(i - 1, 2, '')
              strArray = strArray.filter((item) => item)
              i = strArray.length
              closed = true
          } else {
              closed = false
          }
      } else { closed = false }
  }
  return closed
}
