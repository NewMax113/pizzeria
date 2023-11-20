import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import css from './header.module.scss'
import basket from '../pack-of-images/basket.png'

function Header() {
    return (
        <header className={css.header}>
            <Image src='/pack-of-images/icon.jpg' alt='' height={94} width={94}></Image>
            <h1 className={css.text}><Link href="/"><span>P</span>izzeria <span>F</span>rancesco</Link></h1>
            <Link href='/cart' className={css.cart}><Image src={basket} alt='' height={200} width={200}></Image></Link>
        </header>
    )
}
export default Header