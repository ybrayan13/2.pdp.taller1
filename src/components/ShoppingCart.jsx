import ShoppingItem from './ShoppingItem';
import SummaryCart from './SummaryCart';

const ShoppingCart = ({ listaProductos, setListaProductos }) => {
	return (
		<div className='row'>
			<div className='col-8'>
				<h1>Shopping Cart</h1>
				<hr />
                {console.log(listaProductos.legth)}
				{listaProductos.map(producto => (
					<ShoppingItem
						key={producto.id}
						producto={producto}
						listaProductos={listaProductos}
						setListaProductos={setListaProductos}
					></ShoppingItem>
				))}
			</div>
			<div className='col-4'>
				<SummaryCart listaProductos={listaProductos} />
			</div>
		</div>
	);
};

export default ShoppingCart;

/**
 * ShoppingItem.jsx
 * SummaryCart.jsx
 */
