# Change Every Case

A simple library inspired by [`change-case`][1] and its _keys_ functions,
designed to change the casing of object keys. It is useful, for example,
for converting objects from the REST standard to JavaScript best practices,
and vice versa.

## Install

```
npm i change-every-case
```

## Examples

You can use this library to change object keys:

```ts
import { dotKeys } from 'change-every-case';

const result = dotKeys({ hello_world: 'Lorem Ipsum' });

// { 'hello.world': 'Lorem Ipsum }
//---------^
```

You can also work with nested objects containing arrays and other values:

```ts
import { camelKeys } from 'change-every-case';

const input = {
  lorem_ipsum: 'lorem_ipsum',
  hello_planets: [
    {
      planet_earth: 'Hello World',
      planet_mars: 'Hello Mars',
    }
  ],
  value: 3,
};

const result = camelKeys(input);

// {
//   loremIpsum: 'lorem_ipsum',
//   helloPlanets: [
//     {
//       planetEarth: 'Hello World ',
//       planetMars: 'Hello Mars',
//     }
//   ],
//   value: 3,
// };
```

You can also pass arrays:

```ts
import { camelKeys } from 'change-every-case';

const inputArray = [
  { 'hello-world': 3 },
  { 'foo-bar': 3 }
];

const result = camelKeys(inputArray);

// [
//   { helloWorld: 3 },
//   { fooBar: 3 }
// ];
```

## Supported formats

This library provides a handfull of `...Keys` formatters:

| **Funtion**     | **Key example** |
|-----------------|-----------------|
| noKeys          | hello world     |
| camelKeys       | helloWorld      |
| pascalKeys      | HelloWorld      |
| pascalSnakeKeys | Hello_World     |
| capitalKeys     | Hello World     |
| constantKeys    | HELLO_WORLD     |
| dotKeys         | hello.world     |
| kebabKeys       | hello-world     |
| pathKeys        | hello/world     |
| sentenceKeys    | Hello world     |
| snakeKeys       | hello_world     |
| trainKeys       | Hello-World     |

Additonaly, `change-every-case` re-exports all of the `...Case` functions
from `change-case`, so it can be treated as drop-in replacement.

## Options

The `change-every-case` functions are similar to those from `change-case`,
but they accept any type of input as the first parameter.

The `options` parameters accepts all the options supported by
[`change-case`][2] with addition of `maxDeep`.

* `maxDeep? number` – sets maximum deep of recursion. Defaults to 1000.

## Heads up!

* The function will throw an error when the passed object or array will
have more levels that the mmaximal configured deepness.
* If you would pass string or number it will be returned as is.
* Date objects are not changed.

## LICENSE

[MIT](./LICENSE) of course :)

[1]: https://www.npmjs.com/package/change-case
[2]: https://www.npmjs.com/package/change-case#usage