import { useState, type ChangeEvent } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'
import type { ListedProduct } from './models/ListedProduct'
import { useApiService } from './services/api.service'


function App() {
  const {filtered_products, filterByText} = useApiService()

  return (
    <>
      <div>
        <input type="text" onChange={e => filterByText(e.target.value)}/>
      </div>
      <section className='table'>
        {
          filtered_products.map((product: ListedProduct) => (
            <Card key={product.id} item={product}/>
          ))
        }
      </section>
    </>
  )
}

export default App

