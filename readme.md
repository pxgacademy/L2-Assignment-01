## 🎯 Interview Questions

### 1. What are some differences between interfaces and types in TypeScript?

- There are some differences between interfaces and types. like:

  1. **declaration style:** Interface declared only for object, on the other hand, apart from object, type can be declared for union, intersection, tuple, primitive, etc.
  2. **Extending:** Interface can easily be extended from multiple interfaces. We can extend with type, but using & (intersection).

  ```typescript
  // Extension (Inheritance)

  // interface supports extends keyword to extend other interfaces:
  interface Person {
    name: string;
  }

  interface Employee extends Person {
    employeeId: number;
  }

  // type uses intersection (&) for combining types:
  type Person = {
    name: string;
  };

  type Employee = Person & {
    employeeId: number;
  };
  ```

3. **Declaration merging:** After declaring interface many times, they can merge together. But in case of type it will show error.

  ```typescript
  //interface supports declaration merging:
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }

  // type does not support declaration merging:
  type User = {
    name: string;
  };

  // Error if you try to define "type User" again
  ```
  For using object or making structure of class, interface is very useful. But at the time of using complex type union, tuple, conditional, etc. We should use type.

### 2. What is the use of the keyof keyword in TypeScript? Provide an example.
  - The keyof keyword in TypeScript is used to get a union of the property names (keys) of a given type or interface as a type itself. It's especially useful for building type-safe utilities and generic functions.
  ```typescript
  // Example

  function getValue<X, Z extends keyof X>(obj: X, key: Z) {
    return obj[key];
  }

  const user: {
    name: string;
    email: string;
  } = {
    name: "Abdul",
    email: "abul@babul.com",
  };

  const value = getValue(user, "name");
  ```
### 3. Explain the difference between any, unknown, and never types in TypeScript.
  - In TypeScript, any, unknown, and never are three special types that serve different purposes and offer different levels of type safety and control.
  - **any**
  - Disables type checking.
  - You can assign any to or from any other type.
  - Use with caution — errors can easily go undetected.
  ```typescript
  let value: any = "hello";
  value = 123;
  value.toUpperCase();
  ```
  - **unknown**
  - Like any, we can assign any value to it.
  - But we cannot use the value directly without type-checking or type assertion.
  - Promotes type safety when dealing with dynamic or untrusted data.
  ```typescript
  let value: unknown = "hello";

  value.toUpperCase(); // Error: Object is of type 'unknown'

  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe after type check
  }
  ```

  - **never**
  - Represents values that never occur.
  - Commonly used to annotate:
    - Functions that never return (e.g., infinite loop, throwing errors)
    - Exhaustive checks in union types
  ```typescript
  function throwError(): never {
    throw new Error("Something went wrong");
  }

  function handleValue(val: string | number) {
    if (typeof val === "string") {
      console.log("string");
    } else if (typeof val === "number") {
      console.log("number");
    } else {
      // val is of type 'never' here (should never happen)
      const check: never = val;
    }
  }
  ```



### 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
### 5. What is type inference in TypeScript? Why is it helpful?
### 6. How does TypeScript help in improving code quality and project maintainability?
### 7. Provide an example of using union and intersection types in TypeScript.

