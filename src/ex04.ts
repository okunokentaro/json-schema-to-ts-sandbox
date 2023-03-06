import { JSONSchema7, FromSchema } from 'json-schema-to-ts';
import { assertType } from './assert-type';

const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  items: {
    oneOf: [
      { type: 'string' },
      { type: 'object', properties: { foo: { type: 'number' } } },
    ],
  },
  minItems: 2,
  maxItems: 3
} as const satisfies JSONSchema7;

type T = FromSchema<typeof schema>;

assertType<
  T,
  (
    | string
    | {
        [x: string]: unknown;
        foo?: number;
      }
  )[]
>(true);
