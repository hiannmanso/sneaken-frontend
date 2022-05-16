import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Home from '../Pages/Home';
import UserContext from '../Context/userContext';
import PerfilUser from '../Pages/Perfil/PerfilUser';
import PerfilOrderPage from '../Pages/Perfil/PerfilOrderPage';
import Market from '../Pages/Market';
import AddProducts from '../Pages/AddProducts';
import Order from '../Pages/Order';
export default function App() {
	const [displaySignIN, setDisplaySignIN] = useState('none');
	const [displaySignUp, setDisplaySignUp] = useState('none');
	const [token, setToken] = useState('');
	const [allSneakers, setAllSneakers] = useState('');
	const [displayMarket, setDisplayMarket] = useState('none');
	const [userInfos, setUserInfos] = useState('');
	return (
		<BrowserRouter>
			<UserContext.Provider
				value={{
					displaySignIN,
					setDisplaySignIN,
					displaySignUp,
					setDisplaySignUp,
					token,
					setToken,
					allSneakers,
					setAllSneakers,
					displayMarket,
					setDisplayMarket,
					userInfos,
					setUserInfos,
				}}
			>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/add-products" element={<AddProducts />} />
					<Route path="/filter?" element={<Home />} />
					<Route path="/perfil/userData" element={<PerfilUser />} />
					<Route path="/market" element={<Market />} />
					<Route
						path="/perfil/orders"
						element={<PerfilOrderPage />}
					/>
					<Route path="/:nameproduct" element={''} />
					<Route path="/order" element={<Order />} />
				</Routes>
			</UserContext.Provider>
		</BrowserRouter>
	);
}
