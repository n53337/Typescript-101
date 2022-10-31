// ! Type Annotations

const msg: string = "Welcome";

const greeting = (name: string, message: string): string => {
  return `${message}, ${name} 👨‍💻`;
};

console.log(greeting("u53f", msg));
