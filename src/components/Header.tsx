'use client'

import style from "./Header.module.sass"

import pattersonLogo from "../assets/patterson-agency-logo.png"
import cartLogo from "../assets/carrito.svg"

import {  useCart } from "../context/CartContext"

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
    const cart = useCart();
    const router = useRouter();

    function calculateAmount() {
        let result = 0;

        cart.items.forEach(x => {
            result += x.price;
        })

        return result;
    }

    return (
        <div className={style.cartParent} onClick={() => {
            router.push("/cart")
        }}>
            <Image alt="Cart Logo" src={cartLogo} height={40}/>
            {
                !cart.isEmpty() &&
                <div className={style.cartCount}>
                    <label>{Math.min(cart.items.length, 99)}</label>
                </div>
            }

            <div className={style.cartLabelGroup}>
                <label>My Cart</label>
                <label className={style.amount}>{calculateAmount().toFixed(2)}€</label>
            </div>
        </div>
    )
}

export default Header;