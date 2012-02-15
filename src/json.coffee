JSON or= {
  stringify: (value) ->
    switch typeof value
      when "string"
        return "\"#{value}\""
      when "object"
        return (if value.pop then "[#{(JSON.stringify(val) for val in value).join(',')}]" else "{#{("\"#{key}\":#{JSON.stringify(val)}" for key,val of value).join(',')}}")
      else
        return value

  parse: (obj) -> return eval "(#{obj})"
}