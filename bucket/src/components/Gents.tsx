import React from 'react';
import { useSelector } from "react-redux"
interface ProductItem {
    id: number
    name: string
    brand: string
    gender: string
    category: string
    price: number
    is_in_inventory: boolean
    items_left: number
    imageURL: string
    slug: string
    added?: boolean
}

export const Gents = () => {
    const products = useSelector((state: ProductItem[]) => state)
    products.map((product)=>console.log(product))
    return (
        <div>
        </div>
    )
}
