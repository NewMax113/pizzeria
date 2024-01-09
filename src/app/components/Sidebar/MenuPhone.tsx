import React from 'react'
import { Sidebar} from "./Sidebar";
import css from './sidebar.module.scss'
import {IArr} from '../types/types'

export default function MenuPhone() {



    let arr: IArr[] = [
        {
          name: 'Главная',
          link: '/'
        },
        {
          name: 'Навигация',
          children: [
            {
              name: 'RestApi',
              children: [
                {
                  name: 'Клик сюда',
                  link: 'rest_api'
                },
                {
                  name: 'Test2',
                  link: ''
                }
              ]
            },
            {
              name: 'Проверка',
              children: [
                {
                  name: 'Test11',
                  link: ''
                },
                {
                  name: 'Test22',
                  link: ''
                }
              ]
            }
          ]
        },
        {
          name: 'Проверка2',
          link: ''
        }
      ]
    
  return (
    <div className={css.blockSidebar}>
         {arr.map((item, index) => <Sidebar key={index} item={item}></Sidebar>)}
    </div>
   
  )
}
