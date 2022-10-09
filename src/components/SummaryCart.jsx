import { useEffect, useState } from 'react';

const SummaryCart = ({ listaProductos }) => {
	const [subTotal, setSubTotal] = useState(0);
	const [coupon, setCoupon] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newSubtotal = listaProductos.reduce(
			(pre, acu) => (pre += acu.cantPedido * acu.precio),
			0
		);
		console.log(newSubtotal);
		setSubTotal(newSubtotal);
		setTotal(subTotal - coupon);
	});

	const handlerCoupon = e => {
		if (e.target.value < 0 || e.target.value > 100) {
			alert('el COUPON debe tener un valor entre 0 a 100');
			setCoupon(0);
		} else {
			setCoupon(e.target.value);
		}
	};
	return (
		<div>
			<h1>Summary</h1>
			<hr />
			<div className='row'>
				<div className='col'>
					<p>ENTER CODE COUPON</p>
				</div>
				<div className='col'>
					<input
						type='number'
						name=''
						id=''
						value={coupon}
						onChange={handlerCoupon}
					/>
				</div>
			</div>
			<hr />
			<div className='row'>
				<div className='col'>
					<h4>SUBTOTAL</h4>
				</div>
				<div className='col'>
					<h4>$ {subTotal}</h4>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<h4>SHIPPING</h4>
				</div>
				<div className='col'>
					<h4>FREE</h4>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<h4>COUPON</h4>
				</div>
				<div className='col'>
					<h4>$ {coupon}</h4>
				</div>
			</div>
			<hr />
			<div className='row'>
				<div className='col'>
					<h4>TOTAL</h4>
				</div>
				<div className='col'>
					<h4>$ {total}</h4>
				</div>
			</div>
		</div>
	);
};

export default SummaryCart;
