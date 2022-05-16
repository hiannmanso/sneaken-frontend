import styled from 'styled-components';

export const SneakerDetailsContainer = styled.div`
	margin: 25px;
	padding-top: 130px;
	display: flex;
	flex-direction: row;
	font-family: 'Montserrat', sans-serif;
	.imagesContainer {
		width: 60%;
		img {
			border-radius: 10px;
			width: 100%;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
				0 6px 20px 0 rgba(0, 0, 0, 0.19);
		}
	}
	.infoSneaker {
		width: 40%;
		padding-left: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		.infos {
			h1 {
				padding: 25px;
				font-size: 15px;
				font-weight: 300;
			}
			h2 {
				padding: 25px;
				color: #ff4791;
				font-size: 40px;
				font-weight: 700;
			}
			h3 {
				padding: 25px;
				font-size: 20px;
			}
			p {
				padding: 25px;
				font-size: 15px;
				font-weight: 300;
			}
		}
		.sizes {
			padding: 30px;
			h4 {
				font-size: 25px;
				font-weight: 600;
			}
			.sizeoptions {
				padding: 20px;
				button {
					margin: 3px;
					width: 70px;
					height: 40px;
					border-radius: 5px;
					border: none;
					background-color: #ff4791;
					/* opacity: 0.5; */
					color: #fff;
				}
				button:hover {
					cursor: pointer;
					opacity: 1;
				}
				.false {
					opacity: 0.5;
				}
				.true {
					opacity: 1;
				}
			}
		}
		.submit {
			width: 200px;
			height: 80px;
			font-size: 25px;
			font-weight: 700;
			border-radius: 5px;
			border: none;
			background-color: #fff;
			color: #ff4791;
			margin-top: 50px;
		}
		.submit:hover {
			cursor: pointer;
		}
	}
`;
