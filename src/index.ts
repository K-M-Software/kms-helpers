/**
 * @param source - The string containing placeholders in the format {0}, {1}, etc.
 * @param parameters - An array of parameters to replace the placeholders.
 * @returns The string with placeholders replaced by the corresponding parameters.
 * @throws Will throw a console error if the source string is not valid or if the number of parameters does not match the number of placeholders.
 * @example
 * const source = "Hello, {0}! You have {1} new messages.";
 * const parameters = ["Alice", 5];
 * const result = addParametersToString(source, parameters);
 * console.log(result); // Output: "Hello, Alice! You have 5 new messages."
 */
export const addParametersToString = (
  source: string,
  parameters: (string | number)[]
): string => {
  const invalid = "addParametersToString INVALID";
  if (parameters.length === 0) {
    console.error(
      "addParametersToString: No parameters to replace in the source string.",
      source,
      parameters
    );
    return invalid;
  }
  if (typeof source !== "string") {
    console.error(
      "addParametersToString: Source is not a string.",
      source,
      parameters
    );
    return invalid;
  }

  if (!source.includes("{")) {
    console.error(
      "addParametersToString: No placeholders found in the source string.",
      source,
      parameters
    );
    return invalid;
  }

  if (
    parameters.some(
      (param) => typeof param !== "string" && typeof param !== "number"
    )
  ) {
    console.error(
      "addParametersToString: Some parameters are not strings or numbers.",
      source,
      parameters
    );
    return invalid;
  }

  const placeholderCount = (source.match(/{\d+}/g) || []).length;
  if (placeholderCount > parameters.length) {
    console.error(
      "addParametersToString: More placeholders than parameters.",
      source,
      parameters
    );
    return invalid;
  }
  const parameterCount = parameters.length;
  if (placeholderCount < parameterCount) {
    console.error(
      "addParametersToString: More parameters than placeholders.",
      source,
      parameters
    );
    return invalid;
  }

  return source.replace(/{(\d+)}/g, (match, index) => {
    const replacement = parameters[Number(index)];
    return replacement !== undefined ? String(replacement) : match;
  });
};
/**
 * @param value - The value to be cloned.
 * @returns A deep clone of the input value.
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = cloneDeep(original);
 * console.log(clone); // Output: { a: 1, b: { c: 2 } }
 */
export const cloneDeep = (value: any): any => {
  if (value === null || value === undefined) {
    return value; // null or undefined is returned as is
  }

  // Handle primitive types: string, number, boolean, etc.
  if (typeof value !== "object") {
    return value;
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const arrCopy = [];
    for (let i = 0; i < value.length; i++) {
      arrCopy[i] = cloneDeep(value[i]); // Recursively clone each element
    }
    return arrCopy;
  }

  // Handle objects (including Date, RegExp, etc.)

  // Handle special cases for Date, RegExp, and other types
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  // Clone ordinary objects
  const objCopy: Record<string, any> = {};

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      objCopy[key] = cloneDeep(value[key]); // Recursively clone each property
    }
  }

  return objCopy;
};

/**
 * @param min - The minimum length of the generated password.
 * @param max - The maximum length of the generated password.
 * @returns A randomly generated password with a length between min and max.
 * @example
 * const password = generatePassword(8, 12);
 * console.log(password); // Output: A random password with a length between 8 and 12 characters.
 */
export const generatePassword = (min: number, max: number): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

/**
 * @param array - The array to check.
 * @returns True if the array is null or empty, false otherwise.
 * @example
 * const arr = [];
 * console.log(isArrayNullOrEmpty(arr)); // Output: true
 */
export const isArrayNullOrEmpty = (array: any[]): boolean => {
  return array == null || array.length === 0;
};

/**
 * @param arg - The argument to check.
 * @returns True if the argument is defined (not null or undefined), false otherwise.
 * @example
 * const value = null;
 * console.log(isDefined(value)); // Output: false
 */
export const isDefined = (arg: any): boolean => {
  return arg !== null && arg !== undefined;
};

/**
 * @param param - The number to check.
 * @returns True if the number is null or zero, false otherwise.
 * @example
 * const num = 0;
 * console.log(isNumberNullOrZero(num)); // Output: true
 */
export const isNumberNullOrZero = (param: number): boolean => {
  return param == null || param === 0;
};

/**
 * @param param - The string to check.
 * @returns True if the string is null or empty, false otherwise.
 * @example
 * const str = "";
 * console.log(isStringNullOrEmpty(str)); // Output: true
 */
export const isStringNullOrEmpty = (param: string): boolean => {
  return param == null || param === "";
};

/**
 * @param param - The string to check.
 * @returns True if the string is null, empty, or undefined, false otherwise.
 * @example
 * const str = undefined;
 * console.log(isStringNullOrEmptyOrUndefined(str)); // Output: true
 */
export const isStringNullOrEmptyOrUndefined = (param: any): boolean => {
  return param == null || param === "" || param === undefined;
};

/**
 * @param hex - The hex color code to mute.
 * @param factor - The factor by which to mute the color (default is 0.5).
 * @param grayFactor - The factor by which to add gray to the color (default is 0.1).
 * @returns The muted hex color code.
 * @throws Will throw an error if the hex code is invalid.
 * @example
 * const mutedColor = muteColor("#FF5733", 0.5, 0.1);
 * console.log(mutedColor); // Output: A muted version of the input color.
 */
export const muteColor = (
  hex: string,
  factor: number = 0.5,
  grayFactor: number = 0.1
): string => {
  // Validate the hex code
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
    throw new Error("Invalid HEX code");
  }

  // Convert shorthand hex codes (e.g., #123) to full format (e.g., #112233)
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }

  // Extract RGB values
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  // Calculate muted color by blending with white (lighter tone)
  const mutedR = Math.round(r + (255 - r) * factor + (128 - r) * grayFactor);
  const mutedG = Math.round(g + (255 - g) * factor + (128 - g) * grayFactor);
  const mutedB = Math.round(b + (255 - b) * factor + (128 - b) * grayFactor);

  // Convert back to hex and return
  return `#${mutedR.toString(16).padStart(2, "0")}${mutedG
    .toString(16)
    .padStart(2, "0")}${mutedB.toString(16).padStart(2, "0")}`;
};

/**
 * A no-operation function that does nothing.
 * @returns undefined
 * @example
 * const result = noop();
 * console.log(result); // Output: undefined
 */
export const noop = (): undefined => undefined;

/**
 * @param value - The string to check.
 * @param regex - The regular expression to test against.
 * @returns True if the string matches the regex, false otherwise.
 * @example
 * const str = "Hello123";
 * const regex = /^[A-Za-z0-9]+$/;
 * console.log(regexCheck(str, regex)); // Output: true
 */
export const regexCheck = (value: string, regex: RegExp): boolean => {
  if (regex.test(value)) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param array - The array to sort.
 * @param order - The order to sort the array. Can be 'asc' for ascending or 'desc' for descending. Default is 'asc'.
 * @returns The sorted array.
 * @example
 * const arr = [3, 1, 4, 2];
 * const sortedArr = sort(arr, 'desc');
 * console.log(sortedArr); // Output: [4, 3, 2, 1]
 */
export const sort = (array: unknown[], order = "asc") => {
  array.sort((a, b) => {
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() - b.getTime();
    }

    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }

    if (typeof a === "string" && typeof b === "string") {
      return new Intl.Collator().compare(a, b);
    }

    return 0;
  });

  return order === "desc" ? array.reverse() : array;
};
