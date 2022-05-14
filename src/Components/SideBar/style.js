import styled from 'styled-components';

export const SideBar = styled.div`
	display: flex;
	position: fixed;
	top: 150px;
	left: 0;
	right: 75%;
	background-color: white;
	flex-direction: column;

	.filter.false {
		/* background-color: #ff4791; */
		ion-icon {
			font-size: 20px;
			color: #ff4791;
		}
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
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
		input {
			display: none;
		}
	}
	.button {
		background-color: #ff4791;
		color: #ffff;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		ion-icon {
			font-size: 20px;
			color: #ffff;
		}
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		width: 250px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

		text-align: center;
		padding: 10px;
		margin: 5px;
		height: 30px;
		width: 100%;
	}
	.filter.true {
		ion-icon {
			font-size: 20px;
			color: #ff4791;
		}
		input {
			margin-top: 20px;
		}
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		width: 250px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		text-align: center;
		padding: 10px;
		margin: 5px;
		height: 80px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
