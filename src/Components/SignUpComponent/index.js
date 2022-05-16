import * as s from './style';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { useState, useContext } from 'react';
import UserContext from '../../Context/userContext';
import logosimples from './../../Assets/logosimples.png';

export default function SignUpComponent() {
	const { displaySignUp, setDisplaySignUp, setDisplaySignIN } =
		useContext(UserContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

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
		<s.SignUpContainer display={displaySignUp}>
			<s.Opacity onClick={() => setDisplaySignUp('none')} />
			<s.SignUpModal>
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
					<input
						className="submit"
						type="submit"
						value="Criar conta"
					/>
				</form>
				<h1
					onClick={() => {
						setDisplaySignUp('none');
						setDisplaySignIN('inherit');
					}}
				>
					Já tem uma conta? Entre agora!
				</h1>
				<div className="exit">
					<ion-icon
						name="close-outline"
						onClick={() => setDisplaySignUp('none')}
					></ion-icon>
				</div>
			</s.SignUpModal>
		</s.SignUpContainer>
	);
}
