JSON.stringify = JSON.stringify ||  (value) ->
  switch typeof value
    when "string"
      "\"#{value}\""
    when "object"
      return "[#{(JSON.stringify(val) for val in value).join(',')}]" if value.pop
      return "{#{("\"#{key}\":#{JSON.stringify(val)}" for key,val of value).join(',')}}"
    else value