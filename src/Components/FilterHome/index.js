import axios from 'axios';
import * as s from './style';
import { useState, useContext } from 'react';
import UserContext from '../../Context/userContext';

export default function FilterHome() {
	const { allSneakers, setAllSneakers } = useContext(UserContext);
	const [marca, setMarca] = useState(false);
	const [inputMarca, setInputMarca] = useState('');

	const [cor, setCor] = useState(false);
	const [inputCor, setInputCor] = useState('');

	const [tamanho, setTamanho] = useState(false);
	const [inputTamanho, setInputTamanho] = useState('');

	const [valor, setValor] = useState(false);
	const [inputValor, setInputValor] = useState('');

	function filterSneakers() {
		console.log('teste');
		console.log(allSneakers);
		setAllSneakers();
	}
	return (
		<s.SideBar>
			<div className={`filter ${marca}`}>
				<ion-icon name="file-tray-stacked-outline" />
				<div>
					<label
						onClick={() => {
							setMarca(!marca);
						}}
					>
						Marcas
					</label>
					<input
						type="text"
						value={inputMarca}
						onChange={(e) => {
							setInputMarca(e.target.value);
						}}
					/>
				</div>
				<div className="icon">
					<ion-icon name="chevron-down-outline"></ion-icon>
				</div>
			</div>
			<div className={`filter ${cor}`}>
				<ion-icon name="color-palette-outline" />
				<div>
					<label
						onClick={() => {
							setCor(!cor);
						}}
					>
						Cor
					</label>
					<input
						type="text"
						value={inputCor}
						onChange={(e) => {
							setInputCor(e.target.value);
						}}
					/>
				</div>
				<div className="icon">
					<ion-icon name="chevron-down-outline"></ion-icon>
				</div>
			</div>
			<div className={`filter ${tamanho}`}>
				<ion-icon name="options-outline" />
				<div>
					<label
						onClick={() => {
							setTamanho(!tamanho);
						}}
					>
						Tamanho
					</label>
					<input
						type="text"
						value={inputTamanho}
						onChange={(e) => {
							setInputTamanho(e.target.value);
						}}
					/>
				</div>
				<div className="icon">
					<ion-icon name="chevron-down-outline"></ion-icon>
				</div>
			</div>
			<div className={`filter ${valor}`}>
				<ion-icon name="wallet-outline"></ion-icon>
				<div>
					<label
						onClick={() => {
							setValor(!valor);
						}}
					>
						Valor
					</label>
					<input
						type="text"
						value={inputValor}
						onChange={(e) => {
							setInputValor(e.target.value);
						}}
					/>
				</div>
				<div
					className="icon"
					onClick={() => {
						setValor(!valor);
					}}
				>
					<ion-icon name="chevron-down-outline"></ion-icon>
				</div>
			</div>
			<button className="button" onClick={() => filterSneakers()}>
				<label>Filtrar!</label>
				<ion-icon name="search-outline"></ion-icon>
			</button>
		</s.SideBar>
	);
}
