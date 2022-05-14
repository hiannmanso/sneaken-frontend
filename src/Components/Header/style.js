import styled from 'styled-components';

export const Logo = styled.img`
	width: 80px;
`;
export const Icon = styled.img`
	width: 20px;
`;
export const Header = styled.header`
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 20px;
	z-index: 5;
	width: calc(100%-40px);
	height: 60px;
	display: flex;
	justify-content: space-between;
	.icons {
		display: flex;
		flex-direction: row;
		align-items: center;
		ion-icon {
			cursor: pointer;
			font-size: 22px;
			margin-left: 20px;
			color: #ff4791;
		}
	}
	ion-icon:hover {
		font-size: 200%;
	}
`;
