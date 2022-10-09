// import ProductoImg from './ProductoImg';

import ProductoImg from "./ProductoImg";

const ShoppingItem = ({ producto, listaProductos, setListaProductos }) => {
	const handlerCant = e => {
		if (e.target.value < 1 || e.target.value > producto.cantidadDisponible) {
			
			if (e.target.value < 1) {
        alert('falla');
				e.target.value = 1;
			} else {
        alert('Cantidad disponible superada');
				e.target.value = producto.cantPedido;
				e.target.disabled = true;
			}
		} else {
			const newCantidad = listaProductos.map(productoLista => {
				return productoLista.id === producto.id
					? { ...productoLista, cantPedido: e.target.value }
					: productoLista;
			});
			setListaProductos(newCantidad);
		}
		console.log(listaProductos);
	};
	return (
		<div>
			<div className='card'>
				<div className='row'>
					<div className='col-3'>
						<ProductoImg urlImagen={producto.urlImagen} />
					</div>
					<div className='col'>
						<h3>{producto.nombre}</h3>
						<p>{producto.descripcion}</p>
						<h3>${producto.precio}</h3>
					</div>
					<div className='col'>
						<input
							type='number'
							value={producto.cantPedido}
							onChange={handlerCant}
						/>
					</div>
				</div>
			</div>
      <br />
		</div>
	);
};

export default ShoppingItem;
