import styled from 'styled-components';

export const PerfilAdressComponent = styled.div`
	padding: 150px 0 0 10px;
	position: relative;
	input {
		padding: 5px;
		width: 60%;
		border: none;
	}
	h1 {
		font-size: 20px;
		font-weight: 600;
		padding-bottom: 20px;
	}
	p,
	input,
	::placeholder {
		font-size: 10px;
		font-weight: 300;
	}
	.adresses {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.adress {
		margin: 10px;
		position: relative;
		padding: 20px;
		border: 1px solid gray;
		border-radius: 2px;
		ion-icon {
			top: 5px;
			right: 5px;
			position: absolute;
		}
	}
	button {
	}
`;
