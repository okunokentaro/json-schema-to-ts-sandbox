import { JSONSchema7, FromSchema } from 'json-schema-to-ts';
import { assertType } from './assert-type';

const schema1 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'string',
} as const satisfies JSONSchema7;

const schema2 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'null',
} as const satisfies JSONSchema7;

type T1 = FromSchema<typeof schema1>;
type T2 = FromSchema<typeof schema2>;

assertType<T1, string>(true);
assertType<T2, null>(true);
