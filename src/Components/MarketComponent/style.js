import styled from 'styled-components';

export const MarketContainer = styled.div`
	display: ${(props) => props.display};
`;
export const MarketComp = styled.div`
	position: fixed;
	top: 100px;
	right: 50px;
	z-index: 10;
	width: 170px;
	margin: 6px;
	display: flex;
	border-radius: 5px;
	flex-direction: row;
	border: 1px solid rgba(0, 0, 0, 0.19);
	background-color: #fff;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	img {
		padding: 5px;
		width: 80px;
		border-radius: 3px;
	}
	p {
		font-family: 'Montserrat', sans-serif;
		padding: 6px;
		font-size: 8px;
		overflow-x: visible;
	}
	.itens {
		padding: 5px;
		ion-icon {
			color: #ff4791;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
