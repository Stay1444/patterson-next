'use client'
import { useFetch } from "usehooks-ts";
import { ShopItem } from "@/entities/ShopItem";
import ShopItemComponent from "@/components/ShopItemComponent";

import style from "./page.module.sass";

export default function ShopPage() {
    const { data, error } = useFetch<ShopItem[]>(`https://fakestoreapi.com/products`);

    if (error) {
        return (
            <>
                <h1>An error ocurred while fetching the items</h1>
                <p>{error?.message}</p>
            </>
        )
    }

    if (!data) {
        return (
            <>
                <label>Loading Please Wait...</label>
            </>
        )
    }

    return (
        <div className={style.parent}>
            <div className={style.shopWrapper}>
                <div className={style.shopItems}>
                    {data.map((v, i) => 
                        <ShopItemComponent item={v} key={i} />
                    )}
                </div>
            </div>
        </div>
    )
}