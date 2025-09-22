import React,{useState, useEffect} from 'react'
import ProductCard from './ProductCard'

function ProductContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProduct = () => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data)
      console.log(data)
      // throw(new Error('fake error!!'))
    }).catch( err=>{
      setError(err)
      console.log(err)
    }).finally( ()=>{
      setLoading(false)
    })
  }
  
  useEffect( ()=>{
    fetchProduct()
  },[])

  if(loading) {
    return <p className='text-4xl text-red-400'>Loading...</p>
  }

  if(error) {
    return <p className="text-red-800">{error.message}</p>
  }

  return (
    <div>
      {products.map(el=>(
        <ProductCard key={el.id} product={el}/>
      ))}
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}

export default ProductContainer