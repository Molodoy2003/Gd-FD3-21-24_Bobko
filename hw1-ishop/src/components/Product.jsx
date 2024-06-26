import React from 'react'
import styles from './Product.module.css'

const Product = ({ name, products }) => {
	return (
		<div>
			<h1>{name}</h1>
			<div>
				<div>
					{products.map(product => (
						<div className={styles.item} key={product.id}>
							<img
								className={styles.image}
								src={product.imageUrl}
								alt={product.name}
								width='100'
							/>
							<div className={styles.info}>
								<h2>{product.title}</h2>
								<p>{product.price}</p>
								<b>count {product.count}</b>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Product
