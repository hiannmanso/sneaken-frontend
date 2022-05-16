import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../Context/userContext';
import * as s from './style';
export default function SneakerDetailsComponent() {
	const { token } = useContext(UserContext);
	const { product } = useParams();
	const [infoProduct, setInfoProduct] = useState('');
	const [choice, setChoice] = useState('');
	const [color, setColor] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		axios({
			method: 'get',
			url: `https://sneaken-backend.herokuapp.com/products/${product}`,
		})
			.then((response) => {
				console.log(response);
				setInfoProduct(response.data);
			})
			.catch((error) => {
				console.log(error);
				
			});
	}, []);

	function submitProduct() {
		axios({
			method: 'post',
			url: 'https://sneaken-backend.herokuapp.com/my_sneakers',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				brand: choice.brand,
				model: choice.model,
				price: choice.price,
				size: choice.size,
			},
		})
			.then((response) => {
				console.log(response);
				navigate('/order');
			})
			.catch((error) => {
				console.log(error);
				alert('Faça login antes de adicionar itens ao carrinho');
			});
	}

	return (
		<s.SneakerDetailsContainer>
			{infoProduct ? (
				<>
					<div className="imagesContainer">
						<img src={infoProduct[0].image} alt=""></img>
					</div>
					<div className="infoSneaker">
						<div className="infos">
							<h1>{infoProduct[0].brand}</h1>

							<h2>{infoProduct[0].model}</h2>
							<h3>R${infoProduct[0].price}</h3>
							<p>{infoProduct[0].description}</p>
						</div>
						<div className="sizes">
							<h4>TAMANHOS DISPONÍVEIS</h4>
							<div className="sizeoptions">
								{infoProduct.map((product) => {
									return (
										<>
											<button
												className={`${color}`}
												onClick={() => {
													setColor(!color);
													setChoice(product);
													console.log(product);
												}}
											>
												{product.size}
											</button>
										</>
									);
								})}
							</div>
						</div>
						<button className="submit" onClick={submitProduct}>
							Adicionar ao carrinho!
						</button>
					</div>
				</>
			) : (
				<>Loading</>
			)}
		</s.SneakerDetailsContainer>
	);
}
