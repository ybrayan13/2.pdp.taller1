import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cant }) => {
	return (
		<div className='row'>
			<div className='col-10'>
				<h1>TALLER 1</h1>
			</div>
			<div className='col-auto'>
				<button className='btn btn-secondary' type='button' disabled>
					<FaShoppingCart />
					{cant} products
				</button>
			</div>
		</div>
	);
};

export default Header;
