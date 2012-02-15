JSON or= {
  stringify: (value) ->
    return (if typeof value is 'object' then (if value.pop then "[#{(JSON.stringify(val) for val in value).join(',')}]" else "{#{("\"#{key}\":#{JSON.stringify(val)}" for key,val of value).join(',')}}") else (if typeof value is 'string' then "\"#{value}\"" else value))

  parse: (obj) -> return eval "(#{obj})"
}