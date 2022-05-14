import styled from 'styled-components';

// export const SignInContainer = styled.div`
// 	background-color: #000000;
// 	display: ${(props) => props.display};
// 	left: 25%;
// 	font-family: 'Montserrat', sans-serif;
// 	position: absolute;
// 	z-index: 10;
// 	//box-sizing: border-box;
// 	/* background: #8c11be; */
// 	width: 400px;
// 	height: 500px;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: #ffffff;
// 	border-radius: 10px;
// 	a {
// 	}
// `;
export const SignInModal = styled.div`
	width: 50%;
	height: 500px;
	border-radius: 10px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	position: fixed;
	top: 10%;
	left: 25%;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
	h1 {
		font-family: 'Montserrat', sans-serif;
		color: #ff4791;
		text-decoration: none;
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 18px;

		margin-bottom: 20px;
	}
	h1:hover {
		font-size: 110%;
		cursor: pointer;
	}
	.exit {
		position: absolute;
		top: 20px;
		right: 10px;
		ion-icon {
			font-size: 30px;
		}
	}
	.exit:hover {
		cursor: pointer;
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
			cursor: pointer;
		}
		.submit:hover {
			font-size: 120%;
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
		width: 200px;
		height: 58px;
		margin-bottom: 13px;
		border: none;
		border-radius: 5px;
		padding: 18px 0 17px 15px;
	}
	input::placeholder {
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 23px;
		color: #000000;
	}
`;
export const SignInContainer = styled.div`
	display: ${(props) => props.display};
`;
export const Logo = styled.img`
	width: 200px;
	height: auto;
	margin-bottom: 24px;
`;
export const Opacity = styled.div`
	position: fixed;
	z-index: 9;
	width: 100%;
	height: 100%;

	background-color: rgba(255, 255, 255, 0.5);
`;
