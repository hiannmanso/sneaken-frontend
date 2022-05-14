import * as s from './style';
import { useState } from 'react';
export default function PerfilAdress() {
	const [adresses, setAdresses] = useState('');
	return (
		<s.PerfilAdressComponent>
			<h1>Endereços</h1>

			<div className="adresses">
				<div className="adress">
					<p>Moura brasil , 61 , cobertura 1</p>
					<p>Laranjeiras</p>
					<p>Rio de janeiro</p>
					<p>CEP:22231-200</p>
					<p>Brasil</p>
					<ion-icon name="close-circle-outline"></ion-icon>
				</div>
				<div className="adress">
					<p>Moura brasil , 61 , cobertura 1</p>
					<p>Laranjeiras</p>
					<p>Rio de janeiro</p>
					<p>CEP:22231-200</p>
					<p>Brasil</p>
					<ion-icon
						name="close-circle-outline"
						onClick={() => {}}
					></ion-icon>
				</div>
			</div>
			<button> Adicionar novo endereço</button>
		</s.PerfilAdressComponent>
	);
}
