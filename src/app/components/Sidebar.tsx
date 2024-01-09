'use client'
import React, { useState, useRef, useEffect } from 'react'
import css from './sidebar.module.scss'
import Link from 'next/link'

export const Sidebar = ({ item }) => {
  
  console.log(item)
  let [open, setOpen] = useState(false)
  if (item.children) {
    return (
      <div className={!open ? `${css.block} ${css.childFalse}` : css.block}>
        <div className={css.item}>
          <div className={css.name}>{item.name}</div>
          {/* <div className={css.btn} onClick={() => setOpen(!open)}>+</div> */}
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
