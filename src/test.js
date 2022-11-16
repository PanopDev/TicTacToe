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
  const randomNum = random();console.log(randomNum)
  const userTest = Math.abs(usernum - randomNum);console.log(userTest)
  const aiTest = Math.abs(aiNumber - randomNum);console.log(aiTest)
  const compare =()=> {if (userTest < aiTest){ return true } else if (userTest === aiTest){return usernum < randomNum ? true : false} else return false}
  const results = [];
  

  results.push(compare());
  results.push(usernum);
  results.push(aiNumber);
  results.push(randomNum);
    console.log(results)
  return compare()
};

let [userGoesFirst, userChoice, AiChoice, WinningNumber] = whoGoesFirst(1);

userGoesFirst;
userChoice;
AiChoice;
WinningNumber;

[userGoesFirst, userChoice, AiChoice, WinningNumber] = whoGoesFirst(5)
userGoesFirst;
userChoice;
AiChoice;
WinningNumber;


//if the difference is the same between Player and AI, whoevers number is less than the winning number wins.