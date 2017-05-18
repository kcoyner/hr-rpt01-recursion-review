// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


  if (typeof obj === 'boolean' && obj === true) {
    return 'true';
  } else if (typeof obj === 'boolean' && obj === false) {
    return 'false';
  }

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
    var result = '';
    for (var key in obj) {
      // result[key] = stringifyJSON(key);
      // result[obj[key]] = stringifyJSON(obj[key]);
      result += stringifyJSON(key) + ': ' + stringifyJSON(obj[key]);
      console.log(result);
    }
    return '{' + result[key] + ':' + result[obj[key]] + '}';
  }

  return '' + obj;

};

var val = {'a': 'apple', 'b': 'bowl'};
console.log(stringifyJSON(val));
console.log(JSON.stringify(val));
