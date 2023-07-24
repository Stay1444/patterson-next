export type ShopItem = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ShopItemRating;
}

export type ShopItemRating = {
    rate: number;
    count: number;
}