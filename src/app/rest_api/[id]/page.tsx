'use client'
import React, { useEffect, useState, FC } from "react"
import { IRestApi } from '../../components/types/types'

interface IParams {
  params: { id: number }
}

export default function Page({ params }: IParams) {
  let [data, setData] = useState<IRestApi[]>([])
  let id = params.id
  async function ids() {
    let testId = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
    setData([testId])
  }
  useEffect(() => {
    ids()
  }, [])
  
  if (data.length < 1) {
    return <div>Загрузка</div>
  } else {
    return <p>id: {data[0].id}; title: {data[0].title} <a href="/pack-of-images/icon.jpg" target="_blank" download>Скачать</a></p>
  }
}