'use client'
import { useRouter } from "next/router"
import React, {useEffect, useState} from "react"
import photo from '../../pack-of-images/icon.jpg'


export default function Page({params}) {
  let [data, setData] = useState([])
  let id = params.id
  async function ids() {
    let testId = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    setData(testId)
  }
  useEffect(()=> {
    ids()
  }, [])
  console.log(data)
  if (data.length < 1) {
    return <div>Загрузка</div>
  } else {
     return <p>id: {data.id}; title: {data.title} <a href="/pack-of-images/icon.jpg" target="_blank" download>Скачать</a></p>
  }
   
  }