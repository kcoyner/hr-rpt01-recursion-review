
var stringifyJSON = function(obj) {

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var result = [];
    for (let i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    // return result;
    return '[' + result + ']';    // this works just as well as the next line. why?
    // return '[' + result.join(',') + ']';
  }

  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var result = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    // return '{' + result.join(',') + '}';
    return '{' + result + '}';
  }

  return '' + obj;
};

var val = {'a': 'apple', 'b': 'bowl', 'c': {'x': 345}};
var val = [1, 2, 3, 4, 'b', 'c', {'a': 'alpha'}];
console.log(stringifyJSON(val));
console.log(JSON.stringify(val));
