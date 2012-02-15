
JSON || (JSON = {
  stringify: function(value) {
    var key, val;
    switch (typeof value) {
      case "string":
        return "\"" + value + "\"";
      case "object":
        return (value.pop ? "[" + (((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = value.length; _i < _len; _i++) {
            val = value[_i];
            _results.push(JSON.stringify(val));
          }
          return _results;
        })()).join(',')) + "]" : "{" + (((function() {
          var _results;
          _results = [];
          for (key in value) {
            val = value[key];
            _results.push("\"" + key + "\":" + (JSON.stringify(val)));
          }
          return _results;
        })()).join(',')) + "}");
      default:
        return value;
    }
  },
  parse: function(obj) {
    return eval("(" + obj + ")");
  }
});
