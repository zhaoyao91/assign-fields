# Assign Fields

Deeply assign fields to object, where the fields are build by builders.

## Installation

```
npm i assign-fields
```

## Usage

```
const assignFields = reuqire('assign-fields')
const {compose, prop, upperCase} = require('lodash/fp')

const src = {name: 'Bob', age: 20}
const builder = {
  name: compose(upperCase, prop('name')),
  friend: {
    name: 'Alice',
    age: prop('age')
  }
}

const result = assignFields(builder, src)

// result is {name: 'BOB', age: 20, friend: {name: 'Alice', age: 20}}
```

## Curry

`assignFields` is curried, so it can be used as `assignFields(builder)(src)`.

## License

MIT