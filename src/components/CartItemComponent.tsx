import { useCart } from "../context/CartContext";
import { ShopItem } from "../entities/ShopItem";
import RatingComponent from "./RatingComponent";

import style from "./CartItemComponent.module.sass"

import { FiX } from "react-icons/fi"

type CartItemComponentProps = {
  item: ShopItem
}

const CartItemComponent = ({item}: CartItemComponentProps) => {
    const cart = useCart();

    return (
        <div className={style.parent}>
            <div className={style.leftColumn}>
                <img src={item.image}/>
                <RatingComponent rating={item.rating}/>
                <label>{item.price}€</label>
            </div>
            <div className={style.rightColumn}>
                <label className={style.title}>{item.title}</label>
                <p>{item.description}</p>
            </div>
            <div className={style.removeButton} onClick={() => {
                cart.removeItem(item)
            }}>
                <FiX/>
            </div>
        </div>
    )
}

export default CartItemComponent;