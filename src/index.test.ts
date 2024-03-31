import test from "node:test";
import { strict as assert } from "node:assert";
import * as changeEveryCase from "./index.js";

test('Format object keys recursively', () => {
  const input = {
    lorem_ipsum: 'lorem_ipsum',
    hello_planets: [
      {
        planet_earth: 'Earth',
        planet_mars: 'Mars',
      }
    ],
    value: 3,
  };

  const output = {
    loremIpsum: 'lorem_ipsum',
    helloPlanets: [
      {
        planetEarth: 'Earth',
        planetMars: 'Mars',
      }
    ],
    value: 3,
  };

  assert.deepEqual(changeEveryCase.camelKeys(input), output);
});

test('Properly handles input of different type', () => {
  const inputArray = [{ hello_world: 3 }, { foo_bar: 3 }];
  const outputArray = [{ helloWorld: 3 }, { fooBar: 3 }];

  assert.deepEqual(changeEveryCase.camelKeys(inputArray), outputArray);
  assert.deepEqual(changeEveryCase.camelKeys('random string'), 'random string');
  assert.deepEqual(changeEveryCase.camelKeys(1337), 1337);
});

test('Works for different format functions', () => {
  const camelKeysInput = { helloWorld: 'Hello World' };
  const snakeCaseInput = { hello_world: 'Hello World' };

  assert.deepEqual(changeEveryCase.noKeys(camelKeysInput), { 'hello world': 'Hello World' });
  assert.deepEqual(changeEveryCase.camelKeys(snakeCaseInput), camelKeysInput);
  assert.deepEqual(changeEveryCase.pascalKeys(camelKeysInput), { HelloWorld: 'Hello World' });
  assert.deepEqual(changeEveryCase.pascalSnakeKeys(camelKeysInput), { Hello_World: 'Hello World' });
  assert.deepEqual(changeEveryCase.capitalKeys(camelKeysInput), { 'Hello World': 'Hello World' });
  assert.deepEqual(changeEveryCase.constantKeys(camelKeysInput), { HELLO_WORLD: 'Hello World' });
  assert.deepEqual(changeEveryCase.dotKeys(camelKeysInput), { 'hello.world': 'Hello World' });
  assert.deepEqual(changeEveryCase.kebabKeys(camelKeysInput), { 'hello-world': 'Hello World' });
  assert.deepEqual(changeEveryCase.pathKeys(camelKeysInput), { 'hello/world': 'Hello World' });
  assert.deepEqual(changeEveryCase.sentenceKeys(camelKeysInput), { 'Hello world': 'Hello World' });
  assert.deepEqual(changeEveryCase.snakeKeys(camelKeysInput), snakeCaseInput);
  assert.deepEqual(changeEveryCase.trainKeys(camelKeysInput), { 'Hello-World': 'Hello World' });
})

test('Does not break date objects', () => {
  const input = {
    dayOfBirth: new Date('1991-09-11'),
  };

  assert.deepEqual(changeEveryCase.camelKeys(input), input);
});

test('Alows to pass custom options', (t) => {
  const input = {
    'lorem:ipsum': 'lorem',
    'hello_world:foo_bar': 'hello',
  };

  const output = {
    'lorem.ipsum': 'lorem',
    'hello_world.foo_bar': 'hello'
  };

  const split = (text: string) => text.split(':');

  assert.deepEqual(changeEveryCase.dotKeys(input, { split }), output);
  assert.notDeepEqual(changeEveryCase.dotKeys(input), output);
});
