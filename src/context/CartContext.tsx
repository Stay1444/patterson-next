'use client'

import React, { PropsWithChildren, useContext } from "react";

import { ShopItem } from "../entities/ShopItem";
import { useLocalStorage } from "usehooks-ts";

interface ICartContext {
    items: ShopItem[]
    addItem: (item: ShopItem) => void,
    removeItem: (item: ShopItem) => void,
    isEmpty: () => boolean,
    hasItem: (item: ShopItem) => boolean
}

export const CartContext = React.createContext<ICartContext>({
    items: [],
    addItem: (_) => {},
    removeItem: (_) => {},
    isEmpty: () => true,
    hasItem: (_) => false
})

type CartContextProviderWithProps = PropsWithChildren<unknown>;

export const CartContextProvider = (props: CartContextProviderWithProps) => {
    const addItem = (item: ShopItem) => {
        setItems([...items, item])
    }
    
    const removeItem = (item: ShopItem) => {
        setItems(items => items.filter(x => x.id != item.id));
    }

    const hasItem = (item: ShopItem) => {
        return state.items.find(x => x.id == item.id) != undefined;
    }

    const isEmpty = () => {
        return state.items.length == 0;
    }

    const [items, setItems] = useLocalStorage<ShopItem[]>("cart-items", []);

    const state: ICartContext = {
        items,
        addItem,
        removeItem,
        hasItem,
        isEmpty
    }

    return (
        <CartContext.Provider value={state}>
            {props.children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}