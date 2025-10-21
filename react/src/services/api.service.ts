import type { ListedProduct } from "../models/ListedProduct";
import { useEffect, useState } from "react";

export const useApiService = () => {
    const apiUrl: string = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState<ListedProduct[]>([])
    const [filtered_products, setFilteredProducts] = useState<ListedProduct[]>([]);

    useEffect(() => {
        fetch(apiUrl).then(res => res.json())
        .then(data => {
            setProducts(data)
            setFilteredProducts(data)
        })
    }, [])

    const filterByText = (text: string) => {
        const filtered = products.filter((product) => {
            return product.title.toLowerCase().indexOf(text.toLowerCase()) > -1 || product.category.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
        setFilteredProducts(filtered)
    }

    const getProductById = async (id: number) => {
        return await fetch(`${apiUrl}/${id}`).then(res => res.json)
    }

    return {filtered_products, filterByText, getProductById}
}
