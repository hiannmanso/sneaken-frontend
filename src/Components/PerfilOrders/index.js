import * as s from './style';
import { useState } from 'react';

export default function PerfilOrders() {
	return (
		<>
			<s.PerfilOrdersComponent>
				<h1>Pedidos</h1>

				<div className="orders">
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
						{/* map dos pedidos */}
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
