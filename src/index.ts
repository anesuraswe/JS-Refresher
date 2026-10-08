// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level; // if you declare a value and do not initialize it, the tsc will assumme it's of type: any

// function render(document: any){
//     console.log(document)
// }

// let numbers: number[] = []       // empty array

// tupples - fixd length array

// let user: [number, string] = [1, 'Anesu']

// ENUMS - a list of related constants
// const small = 1;
// const mdeium = 2;
// const large = 3;
//  this can be redone using enum type (PascalCasing)

// enum Size {
//   Small = 1,
//   Medium, //the compiler will automatically assign the next values
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// FUNCTIONS
// function calculateTax(income: number, taxYear: number): number{
//     if (taxYear < 2020)
//         return income*1.2
//     return income*1.3
// }

// calculateTax(20_000, 2019)

// OBJECTS
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Anesu",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.name = "Nyamajiwa";

// improving the object using TYPE ALIASES
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Anesu",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.name = "Nyamajiwa";

// UNION TYPES
// function kgToPounds(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === "number")
//     return weight * 2.2;
//   else
//     return parseInt(weight) * 2.2;
// }

// kgToPounds(10)
// kgToPounds('10kg')

// Intersection types
// let weight: number & string; // object is both a number and a string

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// // we can combine these two types
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };



// LITERAL TYPES - exact or specific values
type Quantity = 50 | 100
let quantity: Quantity = 100

// NULLABLE TYPES