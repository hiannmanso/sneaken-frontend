import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 80px;
    h1{
        color: #000000;
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
        color: #ff4791;
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
		color: #ff4791;
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
        margin-top: 5px;
    }
    
    .sizes{
        width: 405px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sizes input{
        width: 180px;
    }
    
    .sizes input::placeholder{
        text-align: center;
    }

    h2{
        width: 400px;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        margin-bottom: 5px;
        text-align: start;
    }
`;