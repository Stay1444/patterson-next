import { ShopItemRating } from "../entities/ShopItem";

import starLogo from "../assets/estrella.svg"

import style from "./RatingComponent.module.sass"

import Image from "next/image";

type RatingComponentProps = {
    rating: ShopItemRating,
    className?: string | null
}

const RatingComponent = ({rating, className}: RatingComponentProps) => {
    return (
        <div className={`${className} ${style.parent}`}>
            {
                [...Array(Math.round(rating.rate))].map((_, i) => 
                    <Image alt="Star" src={starLogo} key={i} height={20}/>
                )
            }
            <label>{rating.count}</label>
        </div>
    )
}

export default RatingComponent;