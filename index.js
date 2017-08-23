const defaultsDeep = require('lodash.defaultsdeep')
const buildFields = require('build-fields')

module.exports = function (builder, object) {
  if (arguments.length > 1) return assignFields(builder, object)
  else return (object) => assignFields(builder, object)
}

function assignFields (builder, object) {
  return defaultsDeep(buildFields(builder, object), object)
}
