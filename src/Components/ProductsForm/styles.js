import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 150px;
    
    h1{
        color: #ff4791;
        font-size: 30px;
        margin-bottom: 15px;
        font-family: 'Montserrat', sans-serif;
    }

    input{
        width: 400px;
        height: 40px;
        border: 1px solid #ff4791;;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    input:focus {
		outline: none;
	}
    input::placeholder {
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 23px;
		color: #000000;
	}

    button{
        width: 405px;
        height: 45px;
        border: 0px;
        border-radius: 5px;
        background: #ff4791;
        color:#ffffff;
        font-family: 'Montserrat';
        font-weight: bold;
    }
`;