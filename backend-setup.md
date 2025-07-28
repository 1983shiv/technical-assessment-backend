## ✅ Step-by-Step Setup for TypeScript + Jest

---

### 🧱 1. **Initialize the project**

If you haven’t already:

```bash
npm init -y
```

---

### 📦 2. **Install Required Dependencies**

#### ✅ Install TypeScript + Jest + ts-jest:

```bash
npm install --save-dev typescript jest ts-jest @types/jest
```

> `ts-jest` lets Jest understand TypeScript
> `@types/jest` adds TypeScript definitions for Jest

---

### ⚙️ 3. **Create a tsconfig.json**

Generate it using:

```bash
npx tsc --init
```

Then update a few fields in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```

---

### 🧪 4. **Configure Jest**

Initialize Jest:

```bash
npx ts-jest config:init
```

This creates a `jest.config.js` file like:

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts']
};
```

---

### 📁 5. **Organize your project structure**

Example layout:

```
/project-root
  |- src/
     |- your-code.ts
  |- tests/
     |- your-code.test.ts
  |- package.json
  |- tsconfig.json
  |- jest.config.js
```

---

### 🧪 6. **Write a Test File**

Example: `tests/your-code.test.ts`

```ts
import { sum } from '../src/your-code';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
```

And `src/your-code.ts`:

```ts
export function sum(a: number, b: number): number {
  return a + b;
}
```

---

### ▶️ 7. **Run the Tests**

```bash
npx jest
```

Or add a script in `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Then just run:

```bash
npm test
```

---

## 🧼 Optional (but helpful):

### ✅ Type-safe module resolution

Add `moduleResolution` to `tsconfig.json`:

```json
"moduleResolution": "node"
```

### ✅ IDE Support

If using VSCode, ensure the workspace uses the correct TypeScript version.

---

## ✅ You're Ready!

You now have:

* TypeScript support (`.ts`)
* Unit tests with Jest (`.test.ts`)
* Type safety and test auto-discovery
* Ability to run tests via `npm test`

---

Let me know if:

* You’re testing React components or Node APIs
* You want to use mocking or coverage reports
* You’d like an example with async tests or classes

Happy coding!
