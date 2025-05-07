## 🎯 Interview Questions

1. What are some differences between interfaces and types in TypeScript?

- There are some differences between interfaces and types. like:
  1. **declaration style:** Interface declared only for object, on the other hand, apart from object, type can be declared for union, intersection, tuple, primitive, etc.
  2. **Extending:** Interface can easily be extended from multiple interfaces. We can extend with type, but using & (intersection).
  3. **Declaration merging:** After declaring interface many times, they can merge together. But in case of type it will show error.
  - For using object or making structure of class, interface is very useful. But at the time of using complex type union, tuple, conditional, etc. We should use type.

2. What is the use of the keyof keyword in TypeScript? Provide an example.
3. Explain the difference between any, unknown, and never types in TypeScript.
4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
5. What is type inference in TypeScript? Why is it helpful?
6. How does TypeScript help in improving code quality and project maintainability?
7. Provide an example of using union and intersection types in TypeScript.
