(function() {

  JSON.stringify = JSON.stringify || function(value) {
    var key, val;
    switch (typeof value) {
      case "string":
        return "\"" + value + "\"";
      case "object":
        if (value.pop) {
          return "[" + (((function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              val = value[_i];
              _results.push(JSON.stringify(val));
            }
            return _results;
          })()).join(',')) + "]";
        }
        return "{" + (((function() {
          var _results;
          _results = [];
          for (key in value) {
            val = value[key];
            _results.push("\"" + key + "\":" + (JSON.stringify(val)));
          }
          return _results;
        })()).join(',')) + "}";
      default:
        return value;
    }
  };

}).call(this);
