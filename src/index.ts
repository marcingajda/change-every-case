import * as changeCase from 'change-case';

const isObject = (object: unknown): object is Record<string, unknown> => {
  return object !== null && typeof object === "object";
}

type Formatter<Options> = (input: string, options?: Options) => string;

const changeKeysFactory = <Options extends changeCase.Options = changeCase.Options>(changeCase: Formatter<Options>) => {
  return function changeKeys(input: unknown, options?: Options): unknown {
    if (!isObject(input)) {
      return input;
    }

    if (Array.isArray(input)) {
      return input.map((item) => {
        return changeKeys(item, options);
      });
    }

    const result: Record<string, unknown> = Object.create(
      Object.getPrototypeOf(input),
    );

    Object.keys(input).forEach((key) => {
      const value = (input as Record<string, unknown>)[key];

      const changedKey = changeCase(key, options);
      const changedValue = changeKeys(value, options);

      result[changedKey] = changedValue;
    });

    return result;
  };
};

export const noKeys = changeKeysFactory(changeCase.noCase);
export const camelKeys = changeKeysFactory(changeCase.camelCase);
export const pascalKeys = changeKeysFactory(changeCase.pascalCase);
export const pascalSnakeKeys = changeKeysFactory(changeCase.pascalSnakeCase);
export const capitalKeys = changeKeysFactory(changeCase.capitalCase);
export const constantKeys = changeKeysFactory(changeCase.constantCase);
export const dotKeys = changeKeysFactory(changeCase.dotCase);
export const kebabKeys = changeKeysFactory(changeCase.kebabCase);
export const pathKeys = changeKeysFactory(changeCase.pathCase);
export const sentenceKeys = changeKeysFactory(changeCase.sentenceCase);
export const snakeKeys = changeKeysFactory(changeCase.snakeCase);
export const trainKeys = changeKeysFactory(changeCase.trainCase);

export const noCase = changeCase.noCase;
export const camelCase = changeCase.camelCase;
export const pascalCase = changeCase.pascalCase;
export const pascalSnakeCase = changeCase.pascalSnakeCase;
export const capitalCase = changeCase.capitalCase;
export const constantCase = changeCase.constantCase;
export const dodotCasetKeys = changeCase.dotCase;
export const kebabCase = changeCase.kebabCase;
export const pathCase = changeCase.pathCase;
export const sentenceCase = changeCase.sentenceCase;
export const snakeCase = changeCase.snakeCase;
export const trainCase = changeCase.trainCase;