'use client'
import React, { useState, useRef, useEffect, FC } from 'react'
import css from './sidebar.module.scss'
import Link from 'next/link'
import {IArr} from '../types/types'

interface ISidebar {
  item: IArr
}

export const Sidebar: FC<ISidebar>= ({ item }) => {

  let [open, setOpen] = useState(false)
  
  if (item.children) {
    return (
      <div className={!open ? `${css.block} ${css.childFalse}` : css.block}>
        <div className={css.item}>
          <div className={css.name}>{item.name}</div>
          {!open ? <div className={css.btn} onClick={() => setOpen(!open)}>+</div> : <div className={css.btn} onClick={() => setOpen(!open)}>-</div>}
        </div>
        <div className={css.child}>
          {item.children.map((child, index) => <Sidebar key={index} item={child}></Sidebar>)}
        </div>
      </div>
    )
  } else {
    return (
      <div className={css.block}>
        <div className={css.item}>
          <Link href={item.link} className={css.name}>{item.name}</Link>
        </div>
      </div>
    )
  }

}
