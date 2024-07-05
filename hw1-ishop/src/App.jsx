import React, { useState } from 'react'
import Product from './components/Product'
import { data } from './data'

const App = () => {
	const [products, setProducts] = useState(data)

	return (
		<div className='App'>
			<Product name='Cars catalog' products={products} />
		</div>
	)
}

export default App
