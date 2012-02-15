
JSON || (JSON = {
  stringify: function(value) {
    var key, val;
    if (typeof value === 'object') {
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
    }
    return (typeof value === 'string' ? value : "\"" + value + "\"");
  },
  parse: function(obj) {
    return eval("(" + obj + ")");
  }
});
