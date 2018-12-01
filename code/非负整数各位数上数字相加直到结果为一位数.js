const convertInt = (int) => {
  const temp = ''.split.call(int, '').reduce((prev, cur) => (parseInt(prev) + parseInt(cur)), 0)
  return temp > 10 ? convertInt(temp) : temp
}
console.log(convertInt(22))