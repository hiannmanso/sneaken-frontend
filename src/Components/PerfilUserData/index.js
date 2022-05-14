import { useState } from 'react';
import * as s from './style';

export default function PerfilUserData() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [cpf, setCpf] = useState('');
	const [sex, setSex] = useState('');
	const [birtday, setBirtday] = useState('');
	const [number, setNumber] = useState('');

	function saveUserData(e) {
		e.preventDefault();
	}
	return (
		<s.userData>
			<h1>Dados pessoais</h1>
			<form className="itensData" onSubmit={saveUserData}>
				<div className="data">
					<p>Nome</p>
					<input
						type="text"
						value={name}
						placeholder="nome"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="data">
					<p>Sobrenome</p>
					<input
						type="text"
						value={lastName}
						placeholder="sobrenome"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="data">
					<p>Email</p>
					<input
						type="text"
						value={email}
						placeholder="email@email.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="data">
					<p>CPF</p>
					<input
						type="text"
						value={cpf}
						placeholder="111.111.111-11"
						onChange={(e) => setCpf(e.target.value)}
					/>
				</div>
				<div className="data">
					<p>Gênero</p>
					<input
						type="text"
						value={sex}
						placeholder="feminino"
						onChange={(e) => setSex(e.target.value)}
					/>
				</div>
				<div className="data">
					<p>Data de nascimento</p>
					<input
						type="text"
						placeholder="XX/XX/XXXX"
						value={birtday}
						onChange={(e) => setBirtday(e.target.value)}
					/>
				</div>
				<div className="data">
					<p>Telefone</p>
					<input
						type="text"
						placeholder="(21)XXXXX-XXXX"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</div>
				<input className="submite" type="submit" value="Salvar"></input>
			</form>
		</s.userData>
	);
}
