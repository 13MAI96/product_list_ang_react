import type { DetailedProduct } from "../models/DetailedProduct";
import type { ListedProduct } from "../models/ListedProduct";
import { useState } from "react";

export const useApiService = () => {
    const apiUrl: string = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState<ListedProduct[]>([])
    const [filtered_products, setFilteredProducts] = useState<ListedProduct[]>([]);
    const [spinnerStatus, setSpinnerStatus] = useState(false)

    /** No hay ganas de hacer otro hook solo para el tooltip */
    const [tooltip, setTooltip] = useState<string | undefined>()

    const notify = (message: string) => {
        setTooltip(message)
        setTimeout(() => {
            setTooltip(undefined)
        }, 2000)
    }


    const getProducts = () => {
        setSpinnerStatus(true)
        try {
            fetch(apiUrl).then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredProducts(data)
                setSpinnerStatus(false)
            }).catch((err) => {
                console.error(err)
                notify('An error ocurred while retrieving the product list.')
            })
        } catch (error) {
            notify('An error ocurred while retrieving the product list.')
        }
    }

    const filterByText = (text: string) => {
        const filtered = products.filter((product) => {
            return product.title.toLowerCase().indexOf(text.toLowerCase()) > -1 || product.category.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
        setFilteredProducts(filtered)
    }

    const getProductById = async (id: number): Promise<DetailedProduct> => {
        return await fetch(`${apiUrl}/${id}`).then(res => res.json())
    }

    return {
        filtered_products, 
        filterByText, 
        getProductById, 
        getProducts, 
        spinnerStatus, 
        setSpinnerStatus,
        notify,
        tooltip
    }
}
