'use client'
import React, { FC, useRef } from 'react'
import css from './serch.module.scss'

interface ISearch {
  searchFilter: (symbol: null | string) => void
}


let Search: FC<ISearch> = (props) => {
  let sym = useRef<HTMLInputElement>(null)
  return (
    <>
      <input className={css.ser} placeholder='Я ищу...' ref={sym} onChange={()=> sym.current && props.searchFilter(sym.current.value)}></input>
    </>
  )
}

export default Search