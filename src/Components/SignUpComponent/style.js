import styled from 'styled-components';

export const SignUpContainer = styled.div`
	.exit {
		display: flex;
		position: absolute;
		top: 20px;
		right: 10px;
		ion-icon {
			font-size: 30px;
		}
	}
	display: ${(props) => props.displaySignUp};
	left: 25%;
	font-family: 'Montserrat', sans-serif;
	position: absolute;
	z-index: 10;
	//box-sizing: border-box;
	/* background: #8c11be; */
	width: 400px;
	height: 600px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	a {
		display: flex;
		justify-content: center;
		font-family: 'Montserrat', sans-serif;
		color: #ff4791;
		text-decoration: none;
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 18px;

		margin-bottom: 20px;
	}
	form {
		font-family: 'Montserrat', sans-serif;
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.submit {
			font-family: 'Montserrat', sans-serif;
			background: #ff4791;
			text-decoration: none;
			border: none;
			border-radius: 5px;

			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 23px;
			color: #ffffff;
		}
	}
	input:focus {
		outline: none;
	}
	input {
		font-family: 'Montserrat', sans-serif;
		color: #ff4791;

		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
		width: 150px;
		height: 30px;
		margin-bottom: 13px;
		border: none;
		border-radius: 5px;
		padding: 18px 0 17px 15px;
	}
	input::placeholder {
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 23px;
		color: #000000;
	}
`;
export const Logo = styled.img`
	width: 150px;
	height: auto;
	margin-bottom: 24px;
`;
