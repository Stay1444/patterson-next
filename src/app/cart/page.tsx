"use client"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

import CartItemComponent from "../../components/CartItemComponent";

import style from "./page.module.sass"

import { FiPlus, FiX } from "react-icons/fi"

import { Discount, ValidDiscounts } from "@/entities/Discount";

export default function CartPage() {
    const cartContext = useContext(CartContext);
    
    const [discountCodes, setDiscountCodes] = useState<Discount[]>([])

    const [codeInputValue, setCodeInputValue] = useState("");

    const calculateItemPrice = () => {
        let price = 0;

        cartContext.items.forEach(i => {
            price += i.price;
        })

        return price;
    }

    const calculateTotalPrice = () => {
        let price = calculateItemPrice();

        discountCodes.forEach(x => {
            price -= x.value * price;
        })

        return price;
    }

    return (
        <div className={style.parent}>
            <div className={style.items}>
                {
                    cartContext.isEmpty() &&
                    <div className={style.empty}>
                        <label>Empty</label>
                    </div>
                }
                {
                    cartContext.items.map((v, i) => 
                        <CartItemComponent item={v} key={i}/>
                    )
                }
            </div>

            <div className={style.sidebar}>
                <h1>Cart</h1>
                <div className={style.group}>
                    <label><b>{cartContext.items.length}</b> Items</label>
                    <label>{calculateItemPrice().toFixed(2)}€</label>
                </div>
                
                {
                    discountCodes.map((x,i) => 
                    <div className={style.group} key={i}>
                        <div className={style.discountListing}>
                            <div className={style.discountRemoveButton} onClick={() => {
                                setDiscountCodes(codes => codes.filter(d => d.code != x.code))
                            }}>
                                <FiX/>
                            </div>
                            <label><b>{x.code}</b></label>
                        </div>
                        <label>-{x.value * 100}%</label>
                    </div>
                    )
                }

                <div className={style.group}>
                    <label>Total</label>
                    <label>{calculateTotalPrice().toFixed(2)}€</label>
                </div>

                <div className={style.group}>
                    <input className={style.discountCodeInput} placeholder="Discount Code" value={codeInputValue} onChange={e => {
                        setCodeInputValue(e.target.value)
                    }}/>

                    <div className={style.discountAddButton} onClick={() => {
                        const discount = ValidDiscounts
                            .find(x => x.code == codeInputValue.trim());

                        if (!discount) {
                            alert("Unknown Discount Code")
                            setCodeInputValue("")
                            return;
                        }

                        if (discountCodes.find(x => x.code == discount.code)) {
                            alert("Code already added")
                            setCodeInputValue("")
                            return;
                        }

                        setDiscountCodes([...discountCodes, discount])
                        setCodeInputValue("")
                    }}>
                        <FiPlus/>
                    </div>
                </div>
            </div>
        </div>
    )
}