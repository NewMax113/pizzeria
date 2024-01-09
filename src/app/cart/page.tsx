"use client"
import React, { useEffect, useState } from 'react'
import { IPizza } from '../components/types/types';
import css from './cart.module.scss'

interface IPiz {
  id: number
  prise: number
  crust: string
}

function test2() {
  let [piz, setPiz] = useState<IPiz[]>([])
  let sum = 0
  useEffect(() => {
    window.localStorage.getItem('arr') ? setPiz(JSON.parse(localStorage.arr)) : console.log('false')
  }, [localStorage])
  useEffect(() => {
    console.log(piz)
  }, [piz])

  function newLocal(x: number) {
    let sl = piz.filter((y, i) => i !== x)
    localStorage.setItem('arr', JSON.stringify(sl));
    setPiz(sl)
  }
  let table = piz.length > 0 && piz.map((x, i) => <tr><td>{i + 1}</td><td style={{ textAlign: 'left', wordWrap: 'break-word'}}> {x.name}</td><td>{x.prise} </td><td><button onClick={() => newLocal(i)}>Удалить</button></td></tr>)
  for (let i = 0; i < piz.length; i++) {
    sum += piz[i].prise
  }
  if (piz.length > 0) {
    return (
      <table className={css.table}>
        <tr> <th>№</th><th style={{ textAlign: 'left', width: '80%'  }}>Название</th><th style={{width: '15%'}}>Цена</th><th style={{width: '10%'}}></th></tr>
        {table}
        <tr style={{ width: '100%' }}><td style={{ textAlign: 'right', borderBottom: 'none' }} colspan="2">Сумма: </td><td style={{ borderBottom: 'none' }}>{sum}</td></tr>

      </table>
    )
  } else {
    return (
      <div>Пусто</div>
    )
  }
}

export default test2