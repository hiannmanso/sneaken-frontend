import styled from 'styled-components';

export const HomeComponent = styled.div`
	.sneakers {
		position: absolute;
		top: 150px;
		left: 25%;
		justify-content: center;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.sneaker {
		/* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19); */
		border-radius: 5px;
		margin: 10px;
		font-family: 'Montserrat', sans-serif;
		width: 320px;
		position: relative;
		padding: 5px;
		img {
			width: 100%;
			height: auto;
		}
		h1 {
			padding: 6px;
			text-align: center;
			font-size: 20px;
		}
		h2 {
			color: #ff4791;
			font-weight: 600;
		}
		ion-icon {
			position: absolute;
			top: 30px;
			right: 30px;
			font-size: 20px;
		}
		ion-icon:hover {
			cursor: pointer;
		}
	}
	.sneaker:hover {
		width: 360px;
	}
`;
