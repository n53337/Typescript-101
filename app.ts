// ! Type Annotations

// const msg: string = "Welcome";

// const greeting = (name: string, message: string): string => {
//   return `${message}, ${name} 👨‍💻`;
// };

// console.log(greeting("u53f", msg));

// * NOTE : you don't have to set types manually, Typescript will handle that

// !Inferred Types on Arrays

// const arr = [1, 3];
// arr.push("sdf");
// arr.push(23);

// const arr1: any = [1, true, "x"];

// ! Union Types

// let answer: string | number = "yes";
// answer = 10;

// const arr: (boolean | number)[] = [true, 11, 0, false];
// arr.push(1 === 1);

// ! Interfaces & Optional properties

// interface Player {
//   username: string;
//   score: number;
//   bio?: string;
// }

// const displayPlayer = (player: Player) => {
//   player.bio && console.log(player.bio);
//   console.log(`Hey ${player.username}, your score is: ${player.score}`);
// };

// displayPlayer({
//   username: "u53f",
//   score: 999,
//   bio: "am u53f, i love building stuffs",
// });

// ! Type

// type gender = "girl" | "boy";

// interface Player {
//   username: string;
//   score: number;
//   bio?: string;
//   gender?: gender;
// }

// const displayPlayer = (player: Player) => {
//   const sexe = player.gender === "boy" ? `his` : `her`;
//   console.log(player.bio);
//   console.log(
//     `${player.username} is a ${player.gender}, ${sexe} score is : ${player.score}`
//   );
// };

// displayPlayer({
//   username: "u53f",
//   score: 999,
//   bio: "am u53f, i love building stuffs",
//   gender: "boy",
// });

// displayPlayer({
//   username: "linda",
//   score: 999,
//   gender: "girl",
//   bio: "hello",
// });

// ! Void Unknown Types

// * `void` type on a function means that it'll return nothing
// const sayHi = (): void => {
//   console.log("Hello");
//   // return 1;
// };

// let unknown: unknown = "u53f";

// unknown = 21;
// unknown = true;

// // * reassign type
// let x: number = unknown as number;

// ! Typescript with DOM

// const element: HTMLInputElement = document.querySelector(
//   ".wrapper"
// ) as HTMLInputElement;

// console.log(element.value);

// element.addEventListener("submit", (el) => {
//   const target = el.target as HTMLInputElement;
//   console.log(target.value);
// });

// ! Classes / (private/public/protecte/readonly) / static / Interfaces-in-class

interface IPlayer {
  getInfo(): string;
}

class Player implements IPlayer {
  private userName: string;
  private score: number | string;

  constructor(userName: string, score: number | string) {
    this.userName = userName;
    this.score = score;
  }

  getInfo(): string {
    return `player name:${this.userName}\nplayer score: ${this.score}`;
  }

  static readonly intro: string = `Player Class to defined Players's stats`;
}

const p1 = new Player("u53f", 9999);

console.log(p1.getInfo());
console.log(Player.intro);
