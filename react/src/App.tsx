import { useEffect } from 'react'
import './App.css'
import { Card } from './components/card'
import type { ListedProduct } from './models/ListedProduct'
import { useApiService } from './services/api.service'
import { Spinner } from './components/spinner'
import { Tooltip } from './components/tooltip'


function App() {
  const {filtered_products, filterByText, getProducts, spinnerStatus, tooltip} = useApiService()

  useEffect(() => {
        getProducts()
    }, [])

  return (
    <>
      {
        spinnerStatus && (<Spinner></Spinner>)
      }
      {
        tooltip && (<Tooltip message={tooltip}></Tooltip>)
      }
      <div className='search'>
        <input className="search-input"  type="text" onChange={e => filterByText(e.target.value)}/>
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

