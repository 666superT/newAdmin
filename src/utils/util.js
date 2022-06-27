// 检测数据类型
function checkDataType(data) {
  const dataType = Object.prototype.toString.call(data)
  const dataTypeOptions = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return dataTypeOptions[dataType]
}

// 深拷贝
function deepCopy(data) {
  const type = checkDataType(data)
  let params = null
  if (type === 'array') {
    params = []
    for (let i = 0; i < data.length; i++) {
      params.push(deepCopy(data[i]))
    }
  } else if (type === 'object') {
    params = {}
    for (const key in data) {
      params[key] = deepCopy(data[key])
    }
  } else {
    return data
  }
  return params
}

export default {
  deepCopy
}
