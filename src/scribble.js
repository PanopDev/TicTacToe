

// // import React, { useEffect, useState,useMemo } from 'react'
// // import Scribble2 from './scribble copy'

// //  const Scribble = () => {
// // const obj2 = {
// //   name:'Brian',
// //   age:35,
// //   hobbies:['basketball '],
// //   list: function(){return (<div><div>{this.hobbies}</div><div>{this.age}</div></div>)},
// //   set myAge(newage){setObj((cur)=>{return {...cur, age:30}})},
// //   set myHobby(hobby){setObj((cur)=>cur.hobbies.includes(hobby) ? {...cur} : {...cur, hobbies:[...cur.hobbies, hobby]})}

// // }



// //   const [obj, setObj] = useState(obj2)
// //   const obj3 = useMemo(()=>{return {name:'Big dick Joe',age:29 }},[])


// //   console.log(<Scribble2 />)
// //   const [age,setage]=useState(obj3.age)
// // // console.log(obj)
// // // useEffect(()=>{{obj.myAge = 99}},[])
// // // useEffect(()=>{{obj.myHobby = 'weight lifting '}},[])
// // // useEffect(()=>{{obj.myHobby = 'coding '}},[])
// // // useEffect(()=>{{obj.myHobby = 'piano '}},[])

// // console.log(obj)

// // let addHobby=(hobby)=> {obj.myHobby = hobby; console.log('hobby change')}
// // let changeAge =(age)=> obj.myAge = age

// // return (
// //   <>
// //     <div>{obj.list()}</div>
// //     <button onClick={()=>{addHobby('coding');console.log(obj3.age)}}>addHobby</button>
// //     <button onClick={()=>{obj3.age = obj3.age+1 ; console.log(obj3.age); setage(obj3.age)}}>{age}</button>
   
// //     </>
// //   )
// // }



// //// const game = useMemo(()=>{return{
//     //     userWon:0,
//     //     aiWon:0,
//     //     squaresFilled:gameSquaresFilled,
//     //     remainingSquares:[1,2,3,4,5,6,7,8,9],
//     //     canWin:[ [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7] ],
//     //     userSelected:[],
//     //     aiSelected:[],
//     //     set selected(num){this.remainingSquares = this.remainingSquares.filter((x)=>x !=num)},
//     //     set canWinUpdate(num){this.canWin = this.canWin.map((arr)=>arr.filter((index)=> index !=num ))},
//     //     set won(num){this.userWon = this.userWon + num}
//     //     // eslint-disable-next-line
//     // }},[]) // just in case i need it for any reason ^^


//     let arr = [[1, 2, 3], [4, 5, 6], [9,11,12], [1, 4, 7], [8,9], [3, 6, 9], [1,9], [3, 5, 7]]

// let result = 'poop'

// arr.forEach((x)=> {if ( x.length < 2 ) {result = x}  else if (x.length <3) {result = x}})

// result

// let obj={  
// win:[[1, 2, 3], [5], [7, 8, 9], [1, 4, 7], [2, 5, 8, 'ai'], [9,10,'ai'], [1, 5, 9], [3, 5, 7]],
// }

// //pass Uname into arrays with current number
// obj.win.forEach((x)=>{if (x.includes(5)){ x.push('u')}})

// //pass AI name into arrays with current number
// obj.win.forEach((x)=>{if (x.includes(3)){ x.push('ai')}})

// //PUSH NO WIN IF THIS ARRAY CAN NO LONGER WIN
// obj.win.forEach((x)=>{if (x.includes('ai') && x.includes('u')){x.push('no win')}})

// //AI CHECK FOR NO WIN OPTION
// console.log(obj.win)
// // obj.win = obj.win.map((x)=>{
// //   if (!x.includes('no win')){return x }})

// // x.length < 2 ? selected = x[0] 
// // x.length < 3 ?

// function logicCheck(array){
//   let aiArray=[]
//   for (let i =0; i < array.length; i++){
//   {
//     if (array[i].includes('no win')){array[i]=[]}
//     if (array[i].includes('ai') && array[i].length < 3 ){aiArray=array[i].filter((x)=>x!='ai') }
//     else if (array[i].includes('u') && array[i].length < 3 ){aiArray=array[i].filter((x)=>x!='u')}
     
//   }
  
//   }
//   return aiArray[0]
// }


// console.log(logicCheck(obj.win))





// let userSelected= [1,7]
// let aiSelected= [4,2]

// let arra = []

//   let length = arra.length

// length === 0 ? console.log(true): false

// // win.forEach((x)=> if (x.includes) )








//   let test2 = test[0][0]
// test


// // let arr = [['1','2','maybe'],['1','2','maybe']]

// // // let indexx = arr.indexOf('maybe')
// // // let potato = arr.splice(arr.indexOf('maybe'),1)
// // // indexx
// // // potato
// // // arr
// // let arr2 = arr.map((x)=>x.filter((x)=>x!=2))
// // arr2
// // arr.forEach((arr)=>{arr.splice(arr.indexOf('maybe'),1)})

// // console.log(arr)

// // arr.forEach((arr)=>{arr.splice(arr.indexOf('maybe'),1)})
// //    .forEach((arr)=>{arr.splice(arr.indexOf(num),1)})

//    ///{this.canWin.forEach((arr)=>arr.splice(arr.indexOf(num),1))} << needed for other  file

