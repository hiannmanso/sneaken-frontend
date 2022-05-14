import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useState, useContext } from 'react';
import UserContext from '../../Context/UserContext';
import logosimples from '../../Assets/logosimples.png';
import * as s from './style';

export default function SignInComponent() {
	const { displaySignIN, setDisplaySignIN, setDisplaySignUp, setToken } =
		useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	//const [display, setDisplay] = useState('flex');
	const navegation = useNavigate();

	function SignInClient(e) {
		e.preventDefault();
		axios({
			method: 'post',
			url: 'http://localhost:5000/sign_in',
			data: {
				email,
				password,
			},
		})
			.then((response) => {
				console.log(response.data);
				setToken(response.data);
				setDisplaySignIN('none');
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<s.SignInContainer display={displaySignIN}>
			<s.Opacity onClick={() => setDisplaySignIN('none')} />

			<s.SignInModal>
				<s.Logo classname="logo" src={logosimples} alt="logo" />

				<form onSubmit={SignInClient}>
					<input
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<input className="submit" type="submit" value="Entrar" />
				</form>
				<h1
					onClick={() => {
						setDisplaySignIN('none');
						setDisplaySignUp('inherit');
					}}
				>
					Não possui uma conta? cadastre-se agora!
				</h1>
				<div className="exit">
					<ion-icon
						name="close-outline"
						onClick={() => setDisplaySignIN('none')}
					></ion-icon>
				</div>
			</s.SignInModal>
		</s.SignInContainer>
	);
}
