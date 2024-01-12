'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import css from './filter.module.scss'
import { TFilter, IPizza } from '../types/types'

interface IFilterComponents {
  category: IPizza[],
  setFil_category: (str: TFilter) => void
}

interface IChecked {
  category: string | null,
  boolean: boolean | null,
}

let Filter: FC<IFilterComponents> = ({ category, setFil_category }) => {

  let test = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked === false
    ? setStatus({ category: e.target.value, boolean: e.target.checked })
    : setStatus({ category: null, boolean: null }); setCheced([...checked, { category: e.target.value, boolean: e.target.checked }])
  }
  let arr: TFilter = []
  let s = category.map(x => x.category.map(y => arr.push(y)))
  let categ: string[] = [...new Set(arr)]
  let [checked, setCheced] = useState<IChecked[]>([])
  let [status, setStatus] = useState<IChecked>({ category: null, boolean: null })
  let [arr_checked, setArr_checked] = useState<IPizza[]>([])

  let option = categ.map((x) => <div>
    <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { e.target.checked === false ? setStatus({ category: e.target.value, boolean: e.target.checked }) : setStatus({ category: null, boolean: null }); setCheced([...checked, { category: e.target.value, boolean: e.target.checked }]) }} defaultChecked={true} value={x} /> <span>{x}</span>
  </div>)

  let [pole, setPole] = useState<boolean>(false)

  useEffect(() => {
    if (status.category !== null) {
      setCheced(checked.filter(x => x.category !== status.category))
    }
    console.log(status)
  }, [status])

  useEffect(() => {
    let test3: TFilter = []
    checked.map((x) => x.category !== null && test3.push(x.category))
    setFil_category(test3)
  }, [checked])

  useEffect(() => {
    let test2: IChecked[] = []
    let test3: string[] = []
    let test = categ.map((x) => { test2.push({ category: x, boolean: true }); test3.push(x) })
    setCheced(test2)
    setFil_category(test3)
  }, [])

  return (
    <div className={css.fil} >
      <div className={css.textFil} onClick={() => setPole(!pole)}>Фильтр</div>
      {pole && <div className={css.option}>{option}</div>}
    </div>
  )
}

export default Filter