import style from "./Header.module.sass"
import Image from 'next/image'

import pattersonLogo from "../assets/patterson-agency-logo.png"
import cartLogo from "../assets/carrito.svg"

import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Link from "next/link"

const Header = () => {
    return (
        <div className={style.parent}>
            <Image src={pattersonLogo} height={70} alt="Patterson Logo"/>
            <Link href={'/shop'} className={style.link}>Shop</Link>
            <CartIcon/>
        </div>
    )
}

const CartIcon = () => {
    const cartContext = useContext(CartContext);

    return (
        <div className={style.cartParent} onClick={() => {
            alert("/cart")
        }}>
            <Image src={cartLogo} height={40} alt="Cart Logo"/>
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