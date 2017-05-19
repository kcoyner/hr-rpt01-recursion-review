var stringifyJSON = function(obj) {

  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)){
    var result = [];
    for (var i = 0; i < obj.length; i++){
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }

  if (typeof obj === 'object'){
      if (obj === null){
        return 'null';
      }

    if (Object.keys(obj).length === 0){
      return '{}';
    } else {
      var result = [];
      for (var key in obj){
        if (typeof obj[key] === 'function' || obj[key] === undefined){
          continue;
        }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
      return '{' + result.join(',') + '}';
    }
  }
  return '' + obj;
};

var test = function(){};
console.log(stringifyJSON(test));
console.log(JSON.stringify(test));

