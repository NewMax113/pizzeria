'use client'
import React, { FC, useEffect, useState } from 'react'
import css from './pamas.module.scss'
import Link from 'next/link'
import { IPizza, ISizePizza } from '../types/types'

interface ICardParams {
  prise: IPizza['prise']
  id: IPizza['id']
  arr: ISizePizza[]
  setArr: (str: ISizePizza[]) => void
}

interface IParamsSize {
  sum: number,
  size: { one: boolean; two: boolean; three: boolean; }[],
  crust: boolean,
}


let CardParams: FC<ICardParams> = (props) => {
  let [sizePizza, setSizePizza] = useState<IParamsSize>(
    {
      size: [
        {
          one: false,
          two: true,
          three: false
        }
      ],
      crust: true,
      sum: 0
    }
  )
  return (
    <div className={css.form}>
      Размер:
      <div>
        <span onClick={(e) => setSizePizza({ ...sizePizza, size: [{ one: true, two: false, three: false }] })} className={sizePizza.size[0].one ? css.target : ''}>25</span>
        <span onClick={(e) => setSizePizza({ ...sizePizza, size: [{ one: false, two: true, three: false }] })} className={sizePizza.size[0].two ? css.target : ''}>30</span>
        <span onClick={(e) => setSizePizza({ ...sizePizza, size: [{ one: false, two: false, three: true }] })} className={sizePizza.size[0].three ? css.target : ''}>35</span>
      </div>
      <div>
        <span onClick={(e) => setSizePizza({ ...sizePizza, crust: true })} className={sizePizza.crust ? css.target : ''}>С корочкой</span>
        <span onClick={(e) => setSizePizza({ ...sizePizza, crust: false })} className={!sizePizza.crust ? css.target : ''}>Без корочи</span>
      </div>
      <div>
        {sizePizza.size[0].one ? props.prise.one : ''}
        {sizePizza.size[0].two ? props.prise.two : ''}
        {sizePizza.size[0].three ? props.prise.three : ''}
      </div>
      <button onClick={() => props.setArr([...props.arr, {
        id: props.id,
        prise: sizePizza.size[0].one ? props.prise.one
          : (sizePizza.size[0].two ? props.prise.two
            : (sizePizza.size[0].three ? props.prise.three
              : '')),
        crust: sizePizza.crust ? 'Yes' : 'No'
      }])}>Добавить</button>
      {/* <Link href={`/${id}`}>Тест</Link> */}
    </div >
  )
}

export default CardParams