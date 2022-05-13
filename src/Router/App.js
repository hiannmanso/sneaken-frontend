import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import userContext from '../Context/userContext';

export default function App() {
	const [displaySignIN, setDisplaySignIN] = useState('flex');
	return (
		<BrowserRouter>
			<userContext.Provider value={(displaySignIN, setDisplaySignIN)}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</userContext.Provider>
		</BrowserRouter>
	);
}
