const AddProducto = ({product,listaProductos, setListaProductos}) => {
	const handlerProduct =e=>{
		// console.log(e.target);
		e.target.disabled=true;
		const newProduct={...product, cantPedido:1};
		setListaProductos([...listaProductos, newProduct]);
	};
	return (
		<div>
			<button className="btn btn-primary" onClick={handlerProduct}>Add to Cart</button>
		</div>
	);
};

export default AddProducto;
