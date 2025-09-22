import React from 'react'

function ProductCard(props) {
  const {product} = props
  return (
    <div className='bg-violet-200 p-4 mb-4 rounded-xl flex flex-col gap-3'>
      <div className="w-50 h-50 border border-gray-400 rounded bg-gray-100 flex justify-center p-1 ">
        <img className='h-full' src={product.image} alt="product item" />
      </div>
      <p className='text-lg text-blue-900 leading-7'>{product.title}</p>
      <p className='text-pink-500 line-clamp-3 tracking-wide'>{product.description}</p>
      <p className='text-xl font-bold text-amber-600'>Price : {product.price} THB</p>
    </div>
  )
}

export default ProductCard