function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) return input.toLowerCase();
  else return input.toUpperCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((i) => i.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  //   return [].concat(...arrays);
  //   return [...arrays].reduce((a, c) => a.concat(c), []);
  return arrays.flat();
}

class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;
  else return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  else
    return products.reduce((max, product) =>
      product.price > max.price ? product : max
    );
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  // switch (day) {
  //   case Day.Saturday:
  //   case Day.Sunday:
  //     return "Weekend";
  //   default:
  //     return "Weekday";
  // }

  if (day === Day.Saturday || day === Day.Sunday) return "Weekend";
  else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (n >= 0)
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    else reject("Negative number not allowed");
  });
}
