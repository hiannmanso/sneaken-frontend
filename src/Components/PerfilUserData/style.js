import styled from 'styled-components';

export const userData = styled.div`
	padding: 150px 0 0 10px;
	position: relative;
	font-family: 'Montserrat', sans-serif;

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

	.itensData {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.data {
		width: 40%;
		padding: 10px;
	}
`;
