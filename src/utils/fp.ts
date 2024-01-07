export type Option<T> = T | null | undefined;

export function Some<T>(value: T): Option<T> {
  return value;
}

export function None<T>(): Option<T> {
  return null;
}

export function IsNone<T>(value: Option<T>): boolean {
  return value === null || value === undefined;
}

export function map<T, U>(value: Option<T>, fn: (val: T) => U): Option<U> {
  if (IsNone(value)) {
    return null;
  }
  return fn(value!);
}

export function flatMap<T, U>(
  value: Option<T>,
  fn: (val: T) => Option<U>,
): Option<U> {
  if (IsNone(value)) {
    return null;
  }
  return fn(value!);
}

export function getOrElse<T>(value: Option<T>, defaultValue: T): T {
  return IsNone(value) ? defaultValue : value!;
}

export function match<T, U>(
  value: Option<T>,
  pattern: { Some: (val: T) => U; None: () => U },
): U {
  if (IsNone(value)) {
    return pattern.None();
  }
  return pattern.Some(value!);
}

/**
 * @example
 * const optionValue: Option<number> = Some(10);
 *
 * const result = flatMap(optionValue, (value) => {
 *   if (value !== 0) {
 *     return Some(100 / value);
 *   }
 *   return None<number>();
 * });
 *
 * const finalResult = map(result, (value) => value * 5);
 * const finalValue = getOrElse(finalResult, 0);
 *
 * console.log(finalValue); // Output: 50
 */
