import * as s from './style';
import { useState, useContext } from 'react';
import UserContext from '../../Context/userContext';

export default function MarketComponent() {
	const { displayMarket, setDisplayMarket } = useContext(UserContext);
	return (
		<s.MarketContainer display={displayMarket}>
			<s.MarketComp>
				<img
					src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/d/9/d/4/d9d4c9b1984eddc9b15528661a05cf0f.jpg"
					alt=""
				/>
				<div className="itens">
					<p>Nike 1</p>
					<p>Tamanho:</p>
					<p>R$:100,00</p>
					<ion-icon name="trash-outline"></ion-icon>
				</div>
			</s.MarketComp>
			<s.MarketComp>
				<img
					src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/d/9/d/4/d9d4c9b1984eddc9b15528661a05cf0f.jpg"
					alt=""
				/>
				<div className="itens">
					<p>Nike 1</p>
					<p>Tamanho:</p>
					<p>R$:100,00</p>
					<ion-icon name="trash-outline"></ion-icon>
				</div>
			</s.MarketComp>
		</s.MarketContainer>
	);
}
