// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

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
    return '[' + result + ']';
  }

  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var result = {};
    for (var key in obj) {
      result[key] = stringifyJSON([key]);
      result[obj[key]] = stringifyJSON(obj[key]);
      console.log('result[key]: ', result[key]);
      console.log('result[obj[key]]: ', result[obj[key]]);
    }
    return '{' + result + '}';
  }

  return '' + obj;

};

var val = {'a': 'apple'};
console.log(stringifyJSON(val));
console.log(JSON.stringify(val));
