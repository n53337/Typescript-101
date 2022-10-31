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

type gender = "girl" | "boy";

interface Player {
  username: string;
  score: number;
  bio?: string;
  gender?: gender;
}

const displayPlayer = (player: Player) => {
  const sexe = player.gender === "boy" ? `his` : `her`;
  console.log(
    `${player.username} is a ${player.gender}, ${sexe} score is : ${player.score}`
  );
};

displayPlayer({
  username: "u53f",
  score: 999,
  bio: "am u53f, i love building stuffs",
  gender: "boy",
});

displayPlayer({
  username: "linda",
  score: 999,
  gender: "girl",
});
