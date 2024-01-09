'use client'
import React, { FC, useState } from 'react'
import pizza from '../../pack-of-images/arr_piz'
import Image from 'next/image'
import css from './main.module.scss'
import CardParams from '../card_params/CardParams'
import { IPizza, ISizePizza } from '../types/types'

interface IMain {
  loading: boolean
  copyPizza: IPizza[]
  setArr: (str: ISizePizza[]) => void
  arr: ISizePizza[]
  notification: string[]
  setNotification: (notification: string[]) => void
}

let Main: FC<IMain> = (props) => {

  if (props.loading) {
    return <div>Загрузка</div>
  }
  let PizMap = props.copyPizza.map(x =>
    <div className={css.card}>
      <Image src={x.img} alt='' height={150} width={150} key={x.id}></Image>
      <div style={{width: '70%'}}>
        <div className={css.text_cart}>{x.name}</div>
        <CardParams prise={x.prise} id={x.id} setArr={props.setArr} arr={props.arr} name={x.name} notification={props.notification} setNotification={props.setNotification} />
      </div>

    </div>)

  return (
    <>
      {PizMap}
    </>
  )
}



export default Main