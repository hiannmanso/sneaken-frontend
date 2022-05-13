import * as s from './style';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { useState, useContext } from 'react';
import userContext from '../../Context/userContext';
import logosimples from './../../Assets/logosimples.png';

export default function SignUpComponent() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [displaySignUp, setDisplaySignUp] = useState('flex');

	function createNewAccount(e) {
		e.preventDefault();
		axios({
			method: 'post',
			url: 'http://localhost:5000/sign_up',
			data: {
				name,
				email,
				password,
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<s.SignUpContainer displaySignUp={displaySignUp}>
			<Link to="/">
				<s.Logo classname="logo" src={logosimples} alt="logo" />
			</Link>
			<form onSubmit={createNewAccount}>
				<input
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Confirme a senha"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<input className="submit" type="submit" value="Criar Conta" />
			</form>
			<Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
		</s.SignUpContainer>
	);
}
