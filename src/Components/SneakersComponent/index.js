import * as s from './style';
import axios from 'axios';
import SignInComponent from '../SignInComponent';
import SignUpComponent from '../SignUpComponent';
import { Link, useNavigate } from 'react-router-dom';

import { useState, useContext, useEffect } from 'react';
import UserContext from '../../Context/userContext';
export default function SneakersComponent() {
	const { allSneakers, setAllSneakers } = useContext(UserContext);
	const navigation = useNavigate();
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://sneaken-backend.herokuapp.com/products',
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
								// <Link to={`/sneaker/${sneaker.id}`}>
								<div
									key={index}
									className="sneaker"
									onClick={() => {
										navigation(`sneaker/${sneaker.id}`);
									}}
								>
									<img
										src={sneaker.image}
										alt={sneaker.image}
									/>
									<h1 className="model">{sneaker.model}</h1>
									<h2>R$ {sneaker.price}</h2>
									<ion-icon name="heart-outline"></ion-icon>
								</div>
								// </Link>
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
