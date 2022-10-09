import AddProducto from './AddProducto';
import ProductoImg from './ProductoImg';

const ProductoItem = ({ product, listaProductos, setListaProductos }) => {
	return (
		<div className='card'>
			<div className='row'>
				<div className='col'>
					<ProductoImg urlImagen={product.urlImagen} />
				</div>
				<div className='col'>
					<h5>{product.nombre}</h5>
					<h4>${product.precio}</h4>
					<AddProducto
						product={product}
						listaProductos={listaProductos}
						setListaProductos={setListaProductos}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductoItem;
