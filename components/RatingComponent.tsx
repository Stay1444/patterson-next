import { ShopItemRating } from "../entities/ShopItem";

import Image from "next/image";

import starLogo from "../assets/estrella.svg"

import style from "./RatingComponent.module.sass"

type RatingComponentProps = {
    rating: ShopItemRating,
    className?: string | null
}

const RatingComponent = ({rating, className}: RatingComponentProps) => {
    return (
        <div className={`${className} ${style.parent}`}>
            {
                [...Array(Math.round(rating.rate))].map((_, i) => 
                    <Image src={starLogo} key={i} height={20} alt="Star Icon"/>
                )
            }
            <label>{rating.count}</label>
        </div>
    )
}

export default RatingComponent;