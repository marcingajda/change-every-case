// src/index.test.ts

import test from "node:test";
import { strict as assert } from "node:assert";
import { camelKeys, snakeKeys } from "./index.js";

test('Format object keys recursively', (t) => {
  const input = {
    lorem_ipsum: 'lorem_ipsum',
    hello_planets: [
      {
        planet_world: 'Earth',
        planet_mars: 'Mars',
      }
    ]
  };

  const output = {
    loremIpsum: 'lorem_ipsum',
    helloPlanets: [
      {
        planetWorld: 'Earth',
        planetMars: 'Mars',
      }
    ]
  };

  assert.deepEqual(camelKeys(input), output);
});

test('Alows to pass custom split function', (t) => {
  const input = {
    'lorem:ipsum': 'lorem',
    'hello:world': 'hello',
  };

  const output = {
    lorem_ipsum: 'lorem',
    hello_world: 'hello'
  };

  const split = (text: string) => text.split(':');

  assert.deepEqual(snakeKeys(input, { split }), output);
});
