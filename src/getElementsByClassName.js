var getElementsByClassName = function(className) {
  var results = [];
  var body = document.body;

  (function checkNode (node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }

    if (node.childNodes) {
      _.each(node.childNodes, checkNode);
    }
  })(body);
  return results;
};
