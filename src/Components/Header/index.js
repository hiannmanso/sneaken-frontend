import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../../Context/UserContext';
import * as s from './style';
import logosimples from './../../Assets/logosimples.png';
import SignInComponent from '../SignInComponent';
import SignUpComponent from '../SignUpComponent';
import MarketComponent from '../MarketComponent';
export default function Header() {
	const { setDisplaySignIN, token, setDisplayMarket } =
		useContext(UserContext);
	return (
		<>
			<s.Header>
				<Link to={'/'}>
					<s.Logo src={logosimples} alt="Sneaken" />
				</Link>

				<div className="icons">
					<ion-icon name="menu-outline"></ion-icon>
					<ion-icon
						name="heart-outline"
						onClick={() => setDisplayMarket('none')}
					>
						{' '}
					</ion-icon>
					<ion-icon
						name="bag-outline"
						onClick={() => setDisplayMarket('inherit')}
					></ion-icon>
					{token ? (
						<Link to={'/perfil/userData'}>
							<ion-icon name="person-outline"></ion-icon>
						</Link>
					) : (
						<ion-icon
							name="person-outline"
							onClick={() => setDisplaySignIN('inherit')}
						></ion-icon>
					)}
				</div>
			</s.Header>
			<MarketComponent />
			<SignInComponent />
			<SignUpComponent />
		</>
	);
}
