# 🛠️ ts-utils (KMSoft - helpers)

A collection of lightweight, typed, and well-documented utility functions for everyday TypeScript/JavaScript development.

Library is under development, stay tuned for updates! Example code in the README is updated for the current version content.

## 📦 Installation

```bash
npm install kmsoft-helpers
```

## 🔧 Usage

```ts
import {
  addParametersToString,
  cloneDeep,
  generatePassword,
  isArrayNullOrEmpty,
  isDefined,
  isNumberNullOrZero,
  isStringNullOrEmpty,
  isStringNullOrEmptyOrUndefined,
  muteColor,
  noop,
  regexCheck,
  sort,
} from "kmsoft-helpers";
```

---

## 🧰 Function Examples

### `addParametersToString`

```ts
addParametersToString("Hello, {0}! You have {1} new messages.", ["Alice", 5]);
// => "Hello, Alice! You have 5 new messages."
```

---

### `cloneDeep`

```ts
const original = { a: 1, b: { c: 2 } };
const clone = cloneDeep(original);
clone.b.c = 99;
console.log(original.b.c); // => 2
```

---

### `generatePassword`

```ts
generatePassword(8, 12);
// => "xF8!k9aV" (random output)
```

---

### `isArrayNullOrEmpty`

```ts
isArrayNullOrEmpty([]); // => true
isArrayNullOrEmpty(null); // => true
isArrayNullOrEmpty([1, 2]); // => false
```

---

### `isDefined`

```ts
isDefined(undefined); // => false
isDefined(null); // => false
isDefined(0); // => true
```

---

### `isNumberNullOrZero`

```ts
isNumberNullOrZero(0); // => true
isNumberNullOrZero(null); // => true
isNumberNullOrZero(10); // => false
```

---

### `isStringNullOrEmpty`

```ts
isStringNullOrEmpty(""); // => true
isStringNullOrEmpty("hello"); // => false
```

---

### `isStringNullOrEmptyOrUndefined`

```ts
isStringNullOrEmptyOrUndefined(undefined); // => true
isStringNullOrEmptyOrUndefined(""); // => true
isStringNullOrEmptyOrUndefined("text"); // => false
```

---

### `muteColor`

```ts
muteColor("#FF5733");
// => "#ff9e80" (result may vary depending on muting factors)
```

---

### `noop`

```ts
noop(); // => undefined
```

---

### `regexCheck`

```ts
regexCheck("Hello123", /^[A-Za-z0-9]+$/); // => true
regexCheck("Hello!", /^[A-Za-z0-9]+$/); // => false
```

---

### `sort`

```ts
sort([3, 1, 4, 2], "asc"); // => [1, 2, 3, 4]
sort(["b", "a", "c"], "desc"); // => ["c", "b", "a"]
sort([new Date(2020, 5), new Date(2019, 1)]); // => sorted by date
```

---

## 📄 License

[ISC](LICENSE)

---
