// ! Type Annotations

const msg: string = "Welcome";

const greeting = (name: string, message: string): string => {
  return `${message}, ${name} 👨‍💻`;
};

console.log(greeting("u53f", msg));

// * NOTE : you don't have to set types manually, Typescript will handle that

// !Inferred Types on Arrays

const arr = [1, 3];
// arr.push("sdf");
arr.push(23);

const arr1: any = [1, true, "x"];
