import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import UserContext from '../../Context/userContext';

export default function ProductsForm() {
	const [brand, setBrand] = useState('');
	const [model, setModel] = useState('');
	const [image, setImage] = useState('');
	const [size, setSize] = useState();
	const [amount, setAmount] = useState();
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [color, setColor] = useState('');

	const navigate = useNavigate();
	const { token } = useContext(UserContext);

	const imageRegex = /(https?:\/\/.*\.(?:png|jpg|svg|jpeg))/i;
	const priceRegex = /^(\d+\,\d{2})/g;
	function sendForm() {
		if (
			brand !== '' &&
			model !== '' &&
			image !== '' &&
			size !== '' &&
			amount !== '' &&
			price !== '' &&
			imageRegex.test(image) &&
			color !== '' &&
			description !== '' &&
			priceRegex.test(price)
		) {
			let items = [];
			for (let i = 0; i < amount; i++) {
				items.push({
					brand: brand,
					model: model,
					size: size,
				});
			}
			let obj = {
				brand: brand,
				model: model,
				price: price,
				description: description,
				color: color,
				image: image,
				amount: items,
			};
			let config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			let promisse = axios.post(
				'https://sneaken-backend.herokuapp.com/products',
				obj,
				config
			);
			promisse.then((response) => {
				console.log(response.data);
				navigate('/');
			});
			promisse.catch((error) => {
				alert(
					`Houve um erro no envio das informações. Tente novamente mais tarde`
				);
				console.log(error);
			});
		} else {
			alert('Preencha corretamente todos os campos');
		}
	}
	return (
		<S.Content>
			<h1>Informe os dados do produto</h1>
			<h2>Adicione a marca:</h2>
			<input
				placeholder="Marca"
				value={brand}
				onChange={(e) => setBrand(e.target.value)}
			/>
			<h2>Adicione o modelo:</h2>
			<input
				placeholder="Modelo"
				value={model}
				onChange={(e) => setModel(e.target.value)}
			/>
			<h2>Adicione a cor:</h2>
			<input
				placeholder="Cor"
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
			<h2>Adicione a descrição:</h2>
			<input
				placeholder="Descrição"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<h2>Adicione a imagem:</h2>
			<input
				placeholder="Imagem"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<h2>Adicione o preço (Ex: 100,00):</h2>
			<input
				placeholder="Preço"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<h2>Adicione o tamanho e quantidade:</h2>
			<div class="sizes">
				<input
					placeholder="Número"
					value={size}
					onChange={(e) => setSize(e.target.value)}
				/>
				<input
					placeholder="Quantidade"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</div>
			<button onClick={sendForm}>Enviar os dados</button>
		</S.Content>
	);
}
