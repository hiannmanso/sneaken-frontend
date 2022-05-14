import styled from 'styled-components';

export const PerfilComponent = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: row;
	font-family: 'Montserrat', sans-serif;
	.sidebar {
		box-sizing: border-box;
		width: 200px;
		.profile {
			padding: 10px;
			a {
				text-decoration: none;
			}
			p {
				font-size: 15px;
				font-weight: 600;
			}
		}
		h1,
		a {
			opacity: 0.5;
			padding: 25px;
			font-size: 10px;
			font-weight: 600;
		}
		h1:hover {
			opacity: 1;
			cursor: pointer;
		}
	}
`;
