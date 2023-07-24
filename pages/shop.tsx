import { useFetch } from "usehooks-ts";
import { ShopItem } from "../entities/ShopItem";
import ShopItemComponent from "../components/ShopItemComponent";

import style from "./shop.module.sass";

const ShopPage = () => {
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
        return (<></>)
    }

    return (
        <div className={style.parent}>
            <div className={style.shopItems}>
                {data.map((v, i) => 
                    <ShopItemComponent item={v} key={i} />
                )}
            </div>
        </div>
    )
}

export default ShopPage;