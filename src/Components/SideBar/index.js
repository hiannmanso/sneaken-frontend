import * as s from './style';

export default function sideBar() {
	return (
		<s.SideBar>
			<div className="filter">
				<ion-icon name="file-tray-stacked-outline" />
				<label>Marcas</label>
				<ion-icon name="chevron-down-outline"></ion-icon>
			</div>
			<div className="filter">
				<ion-icon name="color-palette-outline" />
				<label>Cor</label>
				<ion-icon name="chevron-down-outline"></ion-icon>
			</div>
			<div className="filter">
				<ion-icon name="options-outline" />
				<label>Tamanho</label>
				<ion-icon name="chevron-down-outline"></ion-icon>
			</div>
			<div className="filter">
				<ion-icon name="wallet-outline"></ion-icon>
				<label>Valor</label>
				<ion-icon name="chevron-down-outline"></ion-icon>
			</div>
		</s.SideBar>
	);
}
