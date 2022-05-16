import * as s from './style';
import { useState, useEffect, useContext } from 'react';
import PerfilUserData from '../PerfilUserData';
import PerfilAdress from '../PerfilAdress';
import PerfilOrders from '../PerfilOrders';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import axios from 'axios';

export default function PerfilComponentSideBar() {
	const { token } = useContext(UserContext);
	const [name, setName] = useState('');

	return (
		<s.PerfilComponent>
			<div className="sidebar">
				<div className="profile">
					<img src="" alt="" />
					<p>Olá, usuário</p>
				</div>
				<Link to={'/perfil/userData'}>
					<h1>Dados Pessoais</h1>
				</Link>
				<Link to={'/perfil/orders'}>
					<h1>Pedidos</h1>
				</Link>
				<h1>Endereços</h1>
				<h1>Sair</h1>
			</div>
			{/* <PerfilUserData /> */}
			{/* <PerfilAdress /> */}
			{/* <PerfilOrders /> */}
		</s.PerfilComponent>
	);
}
