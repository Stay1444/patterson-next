'use client'

import style from "./Header.module.sass"

import pattersonLogo from "../assets/patterson-agency-logo.png"
import cartLogo from "../assets/carrito.svg"

import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import Link from "next/link"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Header = () => {
    return (
        <div className={style.parent}>
            <Image alt="Patterson Logo" src={pattersonLogo} height={70}/>
            <Link href={'/shop'} className={style.link}>
                Shop
            </Link>
            <CartIcon/>
        </div>
    )
}

const CartIcon = () => {
    const cartContext = useContext(CartContext);
    const router = useRouter();

    return (
        <div className={style.cartParent} onClick={() => {
            router.push("/cart")
        }}>
            <Image alt="Cart Logo" src={cartLogo} height={40}/>
            {
                !cartContext.isEmpty() &&
                <div className={style.cartCount}>
                    <label>{cartContext.items.length}</label>
                </div>
            }
        </div>
    )
}

export default Header;