import * as s from './style';
import axios from 'axios';
import SignInComponent from '../SignInComponent';
import SignUpComponent from '../SignUpComponent';

import { useState, useContext, useEffect } from 'react';
import UserContext from '../../Context/UserContext';
export default function SneakersComponent() {
	const { allSneakers, setAllSneakers } = useContext(UserContext);

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
		<>
			<s.HomeComponent>
				<div className="sneakers">
					{allSneakers ? (
						allSneakers.map((sneaker, index) => {
							return (
								<div key={index} className="sneaker">
									<img
										src={sneaker.image}
										alt={sneaker.image}
									/>
									<h1 className="model">{sneaker.model}</h1>
									<h2>R$ {sneaker.price}</h2>
									<ion-icon name="heart-outline"></ion-icon>
								</div>
							);
						})
					) : (
						<h1>Loading...</h1>
					)}
				</div>
			</s.HomeComponent>
		</>
	);
}
