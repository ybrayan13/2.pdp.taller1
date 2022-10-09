import { useState } from 'react';
import Header from './components/Header';
import ProductoList from './components/ProductoList';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
	const products = [
		{
			id: '1u',
			nombre: 'Nike Dunk High Retro',
			precio: 120,
			cantidadDisponible: 5,
			descripcion: 'Really good Nike shoes',
			urlImagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/608d6f2b-f6eb-4a5f-8535-6f24b081e011/dunk-high-retro-zapatillas-tjf3hZ.png',
		},
		{
			id: '2u',
			nombre: 'Nike Zoom Fly 5',
			precio: 150,
			cantidadDisponible: 3,
			descripcion: 'good Nike shoes',
			urlImagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png',
		},
		{
			id: '3u',
			nombre: 'Nike Streetgato',
			precio: 180,
			cantidadDisponible: 2,
			descripcion: 'Really Nike shoes',
			urlImagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c526742e-8259-44bd-a37e-d27cf4e29194/streetgato-botas-de-futbol-zhWVgz.png',
		},
		{
			id: '4u',
			nombre: 'Zoom Freak 4',
			precio: 150,
			cantidadDisponible: 3,
			descripcion: 'Really good Nike shoes',
			urlImagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd30bba7-ae65-4fc3-975c-454f9b8d7ddd/zoom-freak-4-zapatillas-de-baloncesto-8Hdw9M.png',
		},
		{
			id: '5u',
			nombre: 'Nike SB Zoom Blazer Mid',
			precio: 90,
			cantidadDisponible: 10,
			descripcion: 'Skate Shoes',
			urlImagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c8be464d-7fb7-4984-a161-f0359af04dd4/sb-zoom-blazer-mid-skate-shoes-qX3MZV.png',
		},
		{
			id: '6u',
			nombre: 'Nike Air VaporMax 2021 Flyknit',
			precio: 210,
			cantidadDisponible: 5,
			descripcion: 'Men s Shoes',
			urlImagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e1b7e386-a0d6-4a13-b946-f4a2a1b52539/air-vapormax-2021-flyknit-mens-shoes-NpTfFz.png',
		},
	];

	const [listaProductos, setListaProductos] = useState([]);
	return (
		<div>
			<div className='container'>
				{/* parte 1 */}
				<div>
					<Header cant={listaProductos.length}></Header>
					<hr />
					<ProductoList
						products={products}
						listaProductos={listaProductos}
						setListaProductos={setListaProductos}
					/>
				</div>
				<hr />

				{/* parte 2 */}
				<div>
					<ShoppingCart
						listaProductos={listaProductos}
						setListaProductos={setListaProductos}
					/>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default App;

/**
 * Header.jsx
 * ProductoLista.jsx
 * ProductoItem.jsx
 * Imagen.jsx
 * ShoppingCart.jsx
 * AddProducto.jsx
 */

/**
 *
 */
