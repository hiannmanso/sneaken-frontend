import * as s from './style';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../Context/userContext';
import axios from 'axios';

export default function PerfilOrders() {
	const { token } = useContext(UserContext);
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://sneaken-backend.herokuapp.com/sign_in',
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<s.PerfilOrdersComponent>
				<h1>Pedidos</h1>

				<div className="orders">
					{/* map dos pedidos */}
					<div className="order">
						<header>
							<div>
								<p>DATA DO PEDIDO</p>
								<p>14 de janeiro de 2022</p>
							</div>
							<div>
								<p>TOTAL</p>
								<p>R$ 357,00</p>
							</div>
							<div>
								<p>#ID</p>
							</div>
						</header>
						<div className="itensOrder">
							<img
								src="https://aventurasnahistoria.uol.com.br/media/_versions/musica/xxtentacion_3_widelg.jpg"
								alt="xxx"
							/>
							<div className="infosItemOrdem">
								<p>Nome do item</p>
								<p>Entrega em até 5 dias úteis</p>
								<p className="price">1 Un R$ 75,00</p>
							</div>
						</div>
					</div>
				</div>
			</s.PerfilOrdersComponent>
		</>
	);
}
