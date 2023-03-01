import { JSONSchema7, FromSchema } from 'json-schema-to-ts';
import { assertType } from './assert-type';

const schema1 = {
  $schema: 'https://json-schema.org/draft-2020-12/schema',
  type: 'string',
} as const satisfies JSONSchema7;

const schema2 = {
  $schema: 'https://json-schema.org/draft-2020-12/schema',
  type: 'boolean',
} as const satisfies JSONSchema7;

const schema3 = {
  $schema: 'https://json-schema.org/draft-2020-12/schema',
  type: 'null',
} as const satisfies JSONSchema7;

type T1 = FromSchema<typeof schema1>;
type T2 = FromSchema<typeof schema2>;
type T3 = FromSchema<typeof schema3>;

assertType<T1, string>(true);
assertType<T2, boolean>(true);
assertType<T3, null>(true);
