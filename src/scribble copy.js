
import React, { useEffect, useState,useMemo } from 'react'

 const Scribble2 = () => {
// const obj2 = {
//   name:'Brian',
//   age:35,
//   hobbies:['basketball '],
//   list: function(){return (<div><div>{this.hobbies}</div><div>{this.age}</div></div>)},
//   set myAge(newage){setObj((cur)=>{return {...cur, age:30}})},
//   set myHobby(hobby){setObj((cur)=>cur.hobbies.includes(hobby) ? {...cur} : {...cur, hobbies:[...cur.hobbies, hobby]})}

// }



//   const [obj, setObj] = useState(obj2)
//   const obj3 = useMemo(()=>{return {name:'Big dick Joe',age:29 }},[])

  const obj4 = [1]
  // console.log(obj4.age)
  // const [age,setage]=useState(obj3.age)
// console.log(obj)
// useEffect(()=>{{obj.myAge = 99}},[])
// useEffect(()=>{{obj.myHobby = 'weight lifting '}},[])
// useEffect(()=>{{obj.myHobby = 'coding '}},[])
// useEffect(()=>{{obj.myHobby = 'piano '}},[])

// console.log(obj)

// let addHobby=(hobby)=> {obj.myHobby = hobby; console.log('hobby change')}
// let changeAge =(age)=> obj.myAge = age

return (
  <>
    <button onClick={()=>{obj4.push(311) ;console.log(obj4) }}>Obj4Test</button>
    </>
  )
}














// let arr = [['1','2','maybe'],['1','2','maybe']]

// // let indexx = arr.indexOf('maybe')
// // let potato = arr.splice(arr.indexOf('maybe'),1)
// // indexx
// // potato
// // arr
// let arr2 = arr.map((x)=>x.filter((x)=>x!=2))
// arr2
// arr.forEach((arr)=>{arr.splice(arr.indexOf('maybe'),1)})

// console.log(arr)

// arr.forEach((arr)=>{arr.splice(arr.indexOf('maybe'),1)})
//    .forEach((arr)=>{arr.splice(arr.indexOf(num),1)})

   ///{this.canWin.forEach((arr)=>arr.splice(arr.indexOf(num),1))} << needed for other  file

   export default Scribble2