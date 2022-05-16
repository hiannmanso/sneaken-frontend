import * as S from './style';
import React from 'react';
import axios from 'axios';
import UserContext from '../../Context/userContext';

export default function SendOrder(){
    const [cart, setCart] = React.useState([]);
    const [name, setName] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [birth, setBirth] = React.useState('');
    const [payment, setPayment] = React.useState('');
    const [totalPrice, setTotalPrice] = React.useState('');
    const { token } = React.useContext(UserContext);
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    React.useEffect(() => {
        let promisse = axios.get('http://localhost:5000/my_sneakers', config);
        promisse.then((response) => setCart(response.data));
        promisse.catch((error) => console.log(error));
    }, [token]);

    function Total(){
        return(
            <h1>Total aqui</h1>
        )
    }

    function Items({ model, price, size }){
        return(
            <div className='item'>
                <div className='type'>
                    <h1>{`${model}`}</h1>
                    <h2>{`${size}`}</h2>
                </div>
                <h1>{`${price}`}</h1>
            </div>
        )
    }

    function Cart(){
        return(
            cart.map((element) => {
                return(
                <Items model={element.sneakerInfos.model} price={element.sneakerInfos.price} size={element.sneakerInfos.size}  />
            )})
        )
    }

    return(
        <S.Content>
            <div className='cart'>{(cart.length != 0)?<Cart />: <h1>loading</h1>}</div>
            <div className='payment'>
                <h1>Pagamento</h1>
                <div className='infos'>
                    <h2>Nome completo:</h2>
                    <input placeholder='Nome completo'/>
                    <h2>CPF:</h2>
                    <input placeholder='CPF' />
                    <h2>Data de nascimento:</h2>
                    <input placeholder='Data de nascimento' />
                    <h2>Forma de pagamento</h2>
                    <div className='pagamento'>
                        <div className='radio'>
                            <input type='radio' name='pay' id='cartao' value={'Cartão'}/>
                            <label for='cartao'>Cartão</label>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='pay' id='pix' value={'Pix'}/>
                            <label for='pix'>Pix</label>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='pay' id='boleto' value={'Boleto'}/>
                            <label for='boleto'>Boleto</label>
                        </div>
                    </div>
                    <div className='total'>
                        <h1>Total:</h1>
                        <h1>R$ 200,00</h1>
                    </div>
                    <button>Finalizar pedido</button>
                </div>
            </div>
        </S.Content>
    )
}