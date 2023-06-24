import React from 'react'

const Product_cards = () => {
  return (
    <div className='grid-cols-3'>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
  <img className="w-full" src="product-image.jpg" alt="Product Image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Product Title</div>
    <p className="text-gray-700 text-base">Product description goes here.</p>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Category 1</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Category 2</span>
  </div>    
</div>


    </div>
  )
}

export default Product_cards