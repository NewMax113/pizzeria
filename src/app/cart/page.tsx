"use client"
import React, {useEffect, useState} from 'react'
import { IPizza } from '../components/types/types';

interface IPiz {
  id: number
  prise: number
  crust: string
}

function test2() {
  let arr: IPiz[] | string[] = JSON.parse(localStorage.arr);
  let [piz, setPiz] = useState<IPiz[]>([])

  useEffect(()=> {
    setPiz(JSON.parse(localStorage.arr))
   }, [localStorage])
   useEffect(()=> {
    console.log(piz)
   }, [piz])

   function newLocal (x: number) {
    let sl = piz.filter((y,i) => i!==x)
    localStorage.setItem('arr', JSON.stringify(sl));
    setPiz(sl)
   }
   let table = piz.length > 0 ? piz.map((x, i)=> <div>{x.id} {x.prise}<button onClick={()=> newLocal(i)}>Удалить</button></div>) : <div>Пусто</div>
  return (
    <>
      {table}
    </>
  )
}

export default test2