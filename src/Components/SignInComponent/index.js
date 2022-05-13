import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useState, useContext } from 'react';
// import userContext from '../../Context/userContext';
import logosimples from '../../Assets/logosimples.png';
import * as s from './style';

export default function SignInComponent() {
	// const { displaySignIN, setDisplaySignINset } = useContext(useContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [display, setDisplay] = useState('flex');
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
				console.log(response);
				navegation('/');
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<>
			<s.opacity display={display} />
			<s.SignInContainer display={display}>
				<Link to="/">
					<s.Logo classname="logo" src={logosimples} alt="logo" />
				</Link>
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
				<Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
				<div className="exit">
					<ion-icon
						name="close-outline"
						onClick={() => setDisplay('none')}
					></ion-icon>
				</div>
			</s.SignInContainer>
		</>
	);
}
