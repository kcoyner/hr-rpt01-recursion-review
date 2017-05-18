// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
//

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
    if (typeof obj === 'function' || typeof obj === undefined){
      return '';
    }

      // if (!obj){
      // return 'undefined';

    if (Object.keys(obj).length === 0){
      return '{}';
    } else {
      var result = "";
      for (var key in obj){
        if (typeof key === 'function' || typeof obj[key]=== 'function'){
          return '';
        }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','
    }
      result = result.slice(0, -1);
      return '{' + result + '}';
    }
  }

  return '' + obj;


};

var test = function(){};
console.log(stringifyJSON(test));
console.log(JSON.stringify(test));


