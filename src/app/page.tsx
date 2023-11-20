'use client'
import React, { useEffect, useState } from "react";
import Filter from "./components/filter/Filter";
import Main from "./components/Main";
import Search from "./components/search/Search";
import css from './main.module.scss'
import pizza from './pack-of-images/arr_piz'
import { IPizza, TFilter, ISizePizza } from "./components/types/types";
import { useUpdate } from "./hooks/useUpdate";


export default function test() {

  let [loading, setLoading] = useState<boolean>(true)
  let [fil_category, setFil_category] = useState<TFilter>([])
  let [arr, setArr] = useState<ISizePizza[]>([])
  let [fil_category_final, setFil_category_finaly] = useState<IPizza[]>([])
  let [osn, setosn] = useState<IPizza[]>([])
  let piz: IPizza[] = [
    { id: 1, name: 'Один', img: pizza[0], prise: { one: 300, two: 300 + (300 / 100 * 40), three: 300 + (300 / 100 * 80) }, category: ['колбаса', 'грибы',] },
    { id: 2, name: 'Два', img: pizza[1], prise: { one: 329, two: 329 + (329 / 100 * 40), three: 329 + (329 / 100 * 80) }, category: ['колбаса', 'перец',] },
    { id: 3, name: 'два', img: pizza[2], prise: { one: 359, two: 359 + (359 / 100 * 40), three: 359 + (359 / 100 * 80) }, category: ['колбаса', 'грибы', 'перец',] },
    { id: 4, name: 'один', img: pizza[3], prise: { one: 409, two: 409 + (409 / 100 * 40), three: 409 + (409 / 100 * 80) }, category: ['колбаса', 'грибы'] },
    { id: 5, name: 'оДин', img: pizza[4], prise: { one: 309, two: 309 + (309 / 100 * 40), three: 309 + (309 / 100 * 80) }, category: ['колбаса', 'грибы'] },
    { id: 6, name: 'три', img: pizza[5], prise: { one: 339, two: 339 + (339 / 100 * 40), three: 339 + (339 / 100 * 80) }, category: ['колбаса', 'грибы'] },
    { id: 7, name: 'три', img: pizza[6], prise: { one: 369, two: 369 + (369 / 100 * 40), three: 369 + (369 / 100 * 80) }, category: ['грибы', 'перец',] },
    { id: 8, name: 'три', img: pizza[7], prise: { one: 399, two: 399 + (399 / 100 * 40), three: 399 + (399 / 100 * 80) }, category: ['колбаса'] },
    { id: 9, name: 'три', img: pizza[8], prise: { one: 319, two: 319 + (319 / 100 * 40), three: 319 + (319 / 100 * 80) }, category: ['колбаса'] },
    { id: 10, name: 'три', img: pizza[9], prise: { one: 309, two: 309 + (309 / 100 * 40), three: 309 + (309 / 100 * 80) }, category: ['колбаса'] },
  ]
  let [copyPizza, setCopyPizza] = useState<IPizza[]>([])
  let searchFilter = (symbol: string | null) => {
    if (symbol) {
      let test = piz.filter((el) => (el.name).toLowerCase().indexOf(symbol.toLowerCase()) !== -1)
      setCopyPizza(test)
    } else {
      setCopyPizza(piz)
    }
  }

  useEffect(() => {
    setCopyPizza(piz)
    setosn(piz)
    setLoading(false)
    let s: IPizza[] = JSON.parse(localStorage.arr)
    if (s.length > 0) {
      setArr(JSON.parse(localStorage.arr))
      console.log('отработал')
    }
  }, [])

  useEffect(() => {
    setFil_category_finaly(useUpdate(fil_category, piz, 1))
  }, [fil_category])

  useEffect(() => {
    setosn(useUpdate(copyPizza, fil_category_final, 2))
  }, [copyPizza, fil_category_final])

  useEffect(() => {
    localStorage.setItem('arr', JSON.stringify(arr));
  }, [arr])


  return (
    <div className={css.fon}>
      <div>
        <Filter category={piz} setFil_category={setFil_category}></Filter>
        <Search searchFilter={searchFilter}></Search>
      </div>
      <div className={css.grid}>
        <Main setArr={setArr} arr={arr} copyPizza={osn} loading={loading}></Main>
      </div>
    </div>
  )
}
