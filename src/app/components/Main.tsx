'use client'
import React, { FC, useState } from 'react'
import pizza from '../pack-of-images/arr_piz'
import Image from 'next/image'
import css from './main.module.scss'
import CardParams from './card_params/CardParams'
import { IPizza, ISizePizza } from './types/types'

interface IMain {
  loading: boolean
  copyPizza: IPizza[]
  setArr: (str: ISizePizza[])=> void
  arr: ISizePizza[]
}

let Main:FC <IMain> = (props) => {
  if (props.loading) {
    return <div>Загрузка</div>
  }
  let PizMap = props.copyPizza.map(x =>
      <div className={css.card}>
        <Image src={x.img} alt='' height={150} width={150} key={x.id}></Image>
        <div>{x.name}</div>
        <CardParams prise={x.prise} id={x.id} setArr={props.setArr} arr={props.arr} />
      </div>)

  return (
    <>
      {PizMap}
    </>
  )
}



export default Main