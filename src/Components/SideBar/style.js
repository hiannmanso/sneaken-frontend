import styled from 'styled-components';

export const SideBar = styled.div`
	display: flex;
	position: fixed;
	top: 150px;
	left: 0;
	right: 75%;
	background-color: white;
	flex-direction: column;
	.filter {
		/* background-color: #ff4791; */
		ion-icon {
			font-size: 20px;
		}
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		color: #ff4791;
		width: 250px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

		text-align: center;
		padding: 10px;
		margin: 5px;
		height: 30px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
