"use client"
import React, {useEffect, useState} from 'react'
import testtt from '../api/api'
import Link from 'next/link'
import axios from 'axios'
import Page from './[id]/page'

async function testtt2() {
  let test2 = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'force-cache',
  }).then(response => response.json())
  return test2
}

async function Users  ()  {
  
  let users = await testtt2()
  console.log(users)
  let user_map = users.map(x=> <div key={x.id}>{x.id} - {x.title} <Link style={{border: '1px solid black'}} href={`/rest_api/${x.id}`}>открыть</Link></div>)
  
  return (
    <div>{user_map}</div>
  )
}



export default Users










// let [user, setUser] = useState([])
  // useEffect (()=> {
  //   async function name() {
  //   let m = await testtt()
  //   setUser(m.data)
  //   console.log(m.data)
  // }
  // name()
  // }, [])