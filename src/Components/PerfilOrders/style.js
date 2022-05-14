import styled from 'styled-components';

export const PerfilOrdersComponent = styled.div`
	padding: 150px 0 0 10px;
	position: relative;

	min-height: 200px;
	min-width: calc(100vw - 200px);
	margin-right: 0px;
	font-family: 'Montserrat', sans-serif;
	h1 {
		font-size: 20px;
		font-weight: 600;
		padding-bottom: 20px;
	}
	.order {
		border: 1px solid #f2f4f5;
		padding: 15px;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
		margin-right: 50px;
		header {
			p {
				padding-top: 3px;
			}
			padding: 10px;
			height: 40px;
			font-weight: 400;
			font-size: 12px;
			background-color: #f2f4f5;
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
		}
	}
	.itensOrder {
		display: flex;
		flex-direction: row;
		padding-top: 20px;
		img {
			width: 70px;
		}
		.infosItemOrdem {
			margin: 10px 0 5px 10px;
			display: flex;
			flex-direction: column;
			font-size: 12px;
		}
		.price {
			padding-top: 15px;
		}
	}
`;
