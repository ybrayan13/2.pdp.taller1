import ProductoItem from './ProductoItem';

const ProductoList = ({ products,listaProductos, setListaProductos }) => {
	return (
		<div className='card-columns'>
			{products.map(product => (
				<ProductoItem
					key={product.id}
					product={product}
					listaProductos={listaProductos}
					setListaProductos={setListaProductos}
				/>
			))}
		</div>
	);
};

export default ProductoList;
