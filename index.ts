import inquirer from "inquirer"

const randomNum: number = Math.floor(Math.random() * 5);
console.log("Welcome to Guess the Number game")
console.log("Number between 1-10")
const answer = await inquirer.prompt([
    {
        name: "guessednum",
        type: "number",
        message : "guess a num"
    }
]);

if(answer.guessednum === randomNum){
    console.log("your guess is right")
}
else{
    console.log("wrong guess")
}

console.log("the right Number was" + randomNum)
