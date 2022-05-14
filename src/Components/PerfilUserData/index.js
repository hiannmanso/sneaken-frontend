import * as s from './style';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../Context/UserContext';
import axios from 'axios';

export default function PerfilUserData() {
	const { token, userInfos, setUserInfos } = useContext(UserContext);

	useEffect(() => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/sign_in',
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response);
				setUserInfos(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	function saveUserData(e) {
		e.preventDefault();
		axios({
			method: 'put',
			url: 'http://localhost:5000/sign_in',
			data: {
				name: userInfos.name,
				lastname: userInfos.lastname,

				email: userInfos.email,
				cpf: userInfos.cpf,
				sex: userInfos.sex,
				birtday: userInfos.birtday,
				cellphone: userInfos.cellphone,
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<s.userData>
			<h1>Dados pessoais</h1>
			<form className="itensData" onSubmit={saveUserData}>
				<div className="data">
					<p>Nome</p>
					<input
						type="text"
						value={userInfos.name}
						placeholder="nome"
						onChange={(e) =>
							setUserInfos({ ...userInfos, name: e.target.value })
						}
					/>
				</div>
				<div className="data">
					<p>Sobrenome</p>
					<input
						type="text"
						value={userInfos.lastname}
						placeholder="sobrenome"
						onChange={(e) =>
							setUserInfos({
								...userInfos,
								lastname: e.target.value,
							})
						}
					/>
				</div>
				<div className="data">
					<p>Email</p>
					<input
						type="text"
						value={userInfos.email}
						placeholder="email@email.com"
						onChange={(e) =>
							setUserInfos({
								...userInfos,
								email: e.target.value,
							})
						}
					/>
				</div>
				<div className="data">
					<p>CPF</p>
					<input
						type="text"
						value={userInfos.cpf}
						placeholder="111.111.111-11"
						onChange={(e) =>
							setUserInfos({ ...userInfos, cpf: e.target.value })
						}
					/>
				</div>
				<div className="data">
					<p>Gênero</p>
					<input
						type="text"
						value={userInfos.sex}
						placeholder="feminino"
						onChange={(e) =>
							setUserInfos({
								...userInfos,
								sex: e.target.value,
							})
						}
					/>
				</div>
				<div className="data">
					<p>Data de nascimento</p>
					<input
						type="text"
						placeholder="XX/XX/XXXX"
						value={userInfos.birtday}
						onChange={(e) =>
							setUserInfos({
								...userInfos,
								birtday: e.target.value,
							})
						}
					/>
				</div>
				<div className="data">
					<p>Telefone</p>
					<input
						type="text"
						placeholder="(21)XXXXX-XXXX"
						value={userInfos.cellphone}
						onChange={(e) =>
							setUserInfos({
								...userInfos,
								cellphone: e.target.value,
							})
						}
					/>
				</div>
				<input className="submite" type="submit" value="Salvar"></input>
			</form>
		</s.userData>
	);
}
