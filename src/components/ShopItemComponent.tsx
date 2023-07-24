import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { ShopItem } from "../entities/ShopItem";
import RatingComponent from "./RatingComponent";

import style from "./ShopItemComponent.module.sass"

import { FiTrash, FiShoppingCart } from "react-icons/fi"

type ShopItemComponentProps = {
  item: ShopItem
}

const ShopItemComponent = ({item}: ShopItemComponentProps) => {
  const cartContext = useContext(CartContext);

  const isAdded = cartContext.hasItem(item);

  return (
    <div className={style.parent}>
      <div className={style.box}>
        {
          isAdded && <label className={style.addedLabel}>Added</label>
        }
        <img className={style.image} src={item.image}/>
        <div className={style.rating}>
          <RatingComponent rating={item.rating}/>
          <label>{item.price}€</label>
        </div>
      </div>
      <div className={`${style.action} ${isAdded ? style.actionRemove : style.actionAdd}`}>
        <div className={style.actionIcon} onClick={() => {
            if (isAdded) {
              cartContext.removeItem(item)
            } else {
              cartContext.addItem(item)
            }
          }}>
          {
            isAdded && <FiTrash/>
          }
          {
            !isAdded && <FiShoppingCart/>
          }
        </div>
      </div>
      <label className={style.title}>{item.title}</label>
    </div>
  )
}

export default ShopItemComponent;