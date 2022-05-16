import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    margin-top: 130px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .cart{
        width: 600px;
        height: auto;
        border: 1px solid #FF4791;
        border-radius: 5px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .item{
        width: 550px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .item h1{
        font-family: 'Montserrat', 'sans-serif';
        color: #FF4791;
    }

    .type{
        text-align: start;
        font-family: 'Montserrat', 'sans-serif';
    }

    .type h1{
        color: #FF4791;
    }
     
    .type h2{
        color: #000000;
        margin-top: 5px;
    }
    
    .payment{
        width: 400px;
        height: auto;
        border: 1px solid #FF4791;
        border-radius: 5px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-family: 'Montserrat', 'sans-serif';
    }

    .payment h1{
        color: #000000;
        font-size: 30px;
        margin-top: 10px;
    }

    .infos{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .infos h2{
        width: 360px;
        color: #FF4791;
        font-size: 20px;
        text-align: start;
        margin-top: 10px;
    }

    .infos input{
        width: 350px;
        height: 30px;
        border: 1px solid #FF4791;
        border-radius: 5px;
        margin-top: 5px;
    }

    .pagamento{
        width: 360px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .pagamento input{
        width: 20px;
    }

    .radio{
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button{
        width: 350px;
        height: 60px;
        margin-bottom: 10px;
        border: 0px;
        border-radius: 5px;
        background: #FF4791;
        font-size: 30px;
        font-family: 'Montserrat', 'sans-serif';
        color: #ffffff;
    }

    .total{
        width: 360px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .total h1{
        color: #FF4791;
        font-family: 'Montserrat', 'sans-serif';
    }
`;