const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [1];

console.log(arr2.length !== 0);
let test = arr.length;
test;

const random5to10 = Math.floor(Math.random() * 100);
random5to10;

const ternary = 2 + 2 == 5 ? true : false;

ternary;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const userNumber = 5;
const isPlayerCloser = false;

function checkForWinner(userNumber) {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + 1);
  const randomAI = random(1, 11);
  randomAI;
  const randomAnswer = random(1, 11);
  randomAnswer;
  let aiTest = Math.abs(randomAI - randomAnswer);
  let userTest = Math.abs(userNumber - randomAnswer);
  return userTest < aiTest;
}

console.log(checkForWinner(5));

// const randomAI = random(1,11)

// pick a number between one and 10
// const user = 5
// //ai pick a number between one and 10 not including user number

// //pick random number
// console.log(random(1,11))

//compare random number to other selections

const whoGoesFirst = (usernum) => {

  const aiNum = (usernum) => {
    const selection = random();
    return selection === usernum ? aiNum(usernum) : selection;
  };

  const random = () => Math.floor(Math.random() * (11 - 1) + 1);

  const aiNumber = aiNum(usernum);
  const randomNum = random();
  const userTest = Math.abs(usernum - random);
  const aiTest = Math.abs(aiNumber - random);
  const results = [];

  results.push(userTest < aiTest);
  results.push(usernum);
  results.push(aiNumber);
  results.push(randomNum);

  return results;
};

const [userGoesFirst, userChoice, AiChoice, WinningNumber] = whoGoesFirst(5);

userGoesFirst;
userChoice;
AiChoice;
WinningNumber;

