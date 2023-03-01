import { Equals } from './equals';

export function assertType<A, B>(v: Equals<A, B>): void {
  console.log(v);
}
