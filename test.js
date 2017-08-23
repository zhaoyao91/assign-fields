const {compose, prop, upperCase} = require('lodash/fp')

const assignFields = require('./index')

describe('buildFields', function () {
  const src = {name: 'Bob', age: 20}
  describe('2 args', function () {
    test('basic usage', () => {
      const result = assignFields({
        bigName: compose(upperCase, prop('name'))
      }, src)
      expect(result).toEqual({bigName: 'BOB', name: 'Bob', age: 20})
    })

    test('initial value', () => {
      const result = assignFields({
        bigName: compose(upperCase, prop('name')),
        friend: 'Alice'
      }, src)
      expect(result).toEqual({bigName: 'BOB', friend: 'Alice', name: 'Bob', age: 20})
    })

    test('deep build and value', () => {
      const result = assignFields({
        bigName: compose(upperCase, prop('name')),
        friend: {
          name: 'Alice',
          age: prop('age')
        }
      }, src)
      expect(result).toEqual({name: 'Bob', age: 20, bigName: 'BOB', friend: {name: 'Alice', age: 20}})
    })
  })

  describe('1 args', function () {
    test('basic usage', () => {
      const result = assignFields({
        bigName: compose(upperCase, prop('name')),
        friend: {
          name: 'Alice',
          age: prop('age')
        }
      })(src)
      expect(result).toEqual({name: 'Bob', age: 20, bigName: 'BOB', friend: {name: 'Alice', age: 20}})
    })
  })
})