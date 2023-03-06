import { JSONSchema7, FromSchema } from 'json-schema-to-ts';
import { assertType } from './assert-type';

const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    foo: { type: 'number' },
    bar: { type: 'boolean' },
  },
} as const satisfies JSONSchema7;

type T = FromSchema<typeof schema>;

assertType<
  T,
  {
    [x: string]: unknown;
    foo?: number;
    bar?: boolean;
  }
>(true);
