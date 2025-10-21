export interface Rating{
    rate: number
    count: number
}

export interface DetailedProduct{
    id: number
    image: string
    title: string
    price: number
    category: string
    description: string
    rating: Rating
}