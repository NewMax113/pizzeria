'use client'
import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link'
import Image from 'next/image'
import css from './header.module.scss'
import basket from '../../pack-of-images/basket2.png'
import icon from '../../pack-of-images/head.png'
import MenuPhone from "../Sidebar/MenuPhone";

function Header() {
  let test = useRef(null)
  let [open, setOpen] = useState(false)
  let [scroll, setScroll] = useState(0) //позиция скролла
  useEffect(() => {

    const handleOnScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleOnScroll);
  }, [])
  // let scrollEvent
  if (scroll > 182) {
    return (
      <header className={css.header}>
        <div className={css.navigPhone}>
          <div onClick={() => setOpen(!open)} className={css.threeStrips}>☰</div>
          {open && <MenuPhone></MenuPhone>}
        </div>
        <header className={css.header2}>
          <Link href='/'><Image src={icon} alt='' height={94} width={94} className={css.icon}></Image></Link>
          <nav className={css.navig}>
            <ul className={css.level_one}>
              <li><Link href='/' className={css.level_ones}>Главная</Link></li>
              <li ref={test}><div className={css.level_ones}>Навигация</div>
                <ul className={css.level_two}>
                  <li><div className={css.level_twos}>Fake</div>
                    <ul className={css.level_three}>
                      <li><div className={css.level_threes}>Test</div></li>
                      <li><div className={css.level_threes}>Test</div></li>
                      <li><div className={css.level_threes}>Test</div></li>
                    </ul>
                  </li>
                  <li><div className={css.level_twos}>Rest Api</div>
                    <ul className={css.level_three}>
                      <li><Link href='/rest_api' className={css.level_threes}>Клик сюда</Link></li>
                      <li><div className={css.level_threes}>Test</div></li>
                      <li><div className={css.level_threes}>Test</div></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* <h1 className={css.text}><Link href="/"><span>P</span>izzeria <span>F</span>rancesco</Link></h1> */}
          <Link href='/cart' className={css.cart}><Image src={basket} alt='' height={200} width={200}></Image></Link>
          {/* <Link href='/rest_api' className={css.cart}>REST API</Link> */}

        </header>
      </header>

    )
  }
  //

  //scrollEvent = scroll > 182 && <header className={css.header2}></header>
  return (

    <header className={css.header}>
      <div className={css.navigPhone}>
        {!open ? <div onClick={() => setOpen(!open)} className={css.threeStrips}>☰</div> : <div onClick={() => setOpen(!open)} className={css.threeStrips2}>X</div>}
        {open && <MenuPhone></MenuPhone>}
      </div>
      <Link href='/'><Image src={icon} alt='' height={94} width={94} className={css.icon}></Image></Link> 
      <nav className={css.navig}>
        <ul className={css.level_one}>
          <li><Link href='/' className={css.level_ones}>Главная</Link></li>
          <li ref={test}><div className={css.level_ones}>Навигация</div>
            <ul className={css.level_two}>
              <li><div className={css.level_twos}>Fake</div>
                <ul className={css.level_three}>
                  <li><div className={css.level_threes}>Test</div></li>
                  <li><div className={css.level_threes}>Test</div></li>
                  <li><div className={css.level_threes}>Test</div></li>
                </ul>
              </li>
              <li><div className={css.level_twos}>Rest Api</div>
                <ul className={css.level_three}>
                  <li><Link href='/rest_api' className={css.level_threes}>Клик сюда</Link></li>
                  <li><div className={css.level_threes}>Test</div></li>
                  <li><div className={css.level_threes}>Test</div></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* <h1 className={css.text}><Link href="/"><span>P</span>izzeria <span>F</span>rancesco</Link></h1> */}
      <Link href='/cart' className={css.cart}><Image src={basket} alt='' height={200} width={200}></Image></Link>
      {/* <Link href='/rest_api' className={css.cart}>REST API</Link> */}

    </header>
  )
}
export default Header