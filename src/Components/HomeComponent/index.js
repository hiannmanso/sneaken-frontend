import * as s from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomeComponent() {
	const [allSneakers, setAllSneakers] = useState('');

	useEffect(() => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/products',
		})
			.then((response) => {
				console.log(response);
				setAllSneakers(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<s.HomeComponent>
			<div className="sneakers">
				{allSneakers ? (
					allSneakers.map((sneaker, index) => {
						return (
							<div key={index} className="sneaker">
								<img src={sneaker.image} alt={sneaker.image} />
								<h1 className="model">{sneaker.model}</h1>
								<h2>R$ {sneaker.price}</h2>
							</div>
						);
					})
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</s.HomeComponent>
	);
}
