import React from 'react'
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



export const Cart = () => {
    const products = useSelector((state: ProductItem[]) => state)
    const product =  products.filter((e) => e.added === true)
    console.log(product)
    return (
        <div>
            Cart
        </div>
    )
}
