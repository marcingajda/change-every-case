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
```

You can also work with nested objects containing arrays and other values:

```ts
import { camelKeys } from 'change-every-case';

const input = {
  lorem_ipsum: 'lorem_ipsum',
  hello_planets: [
    {
      planet_earth: 'Hello c',
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
//       planetEarth: 'Hello Hello ',
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
  { hello_world: 3 },
  { foo_bar: 3 }
];

const result = camelKeys(inputArray);

// [
//   { helloWorld: 3 },
//   { fooBar: 3 }
// ];
```

## Supported formats

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

## Options

The functions are similar to those in `change-case`, but they accept any
type of input as the first parameter. The options for the second parameter
are exactly the same as those for [`change-case`][1].

## Heads up!

- The passed object or array can be deep up to 1000 levels.
- If you would pass string or number it will be returned as is.
- Date objects are not changed.

## LICENSE

[MIT](./LICENSE) of course :)

[1]: https://www.npmjs.com/package/change-case