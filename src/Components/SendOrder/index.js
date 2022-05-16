import * as S from './style';
import React from 'react';
import axios from 'axios';
import UserContext from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';

export default function SendOrder(){
    const [cart, setCart] = React.useState([]);
    const [name, setName] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [birth, setBirth] = React.useState('');
    const [payment, setPayment] = React.useState('');
    const [totalPrice, setTotalPrice] = React.useState('');
    const { token } = React.useContext(UserContext);
    const navigate = useNavigate();
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

    let cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
    let birthRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    function SendOrder(){
        if(cart !== [] && name !== '' && cpf !== '' && cpfRegex.test(cpf) && birthRegex.test(birth) && payment !== ''){
            let products = [];
            for(let i=0;i<cart.length;i++){
                products.push(cart[i].sneakerInfos);
            }
            let sendObj = {
                userId : cart[0].userInfos.userID,
                products: products,
                name: name,
                cpf: cpf,
                birth: birth,
                payment: payment,
                totalPrice: totalPrice
            }
            let send = axios.post('http://localhost:5000/orders', sendObj, config);
            send.then(() => navigate('/'));
            send.catch(()=> alert('Tente novamente mais tarde'));
        } else {
            alert('Preencha corretamente os dados');
        }
    }

    function Total(){
        let total = 0;
        for(let i = 0; i<cart.length;i++){
            let string = cart[i].sneakerInfos.price;
            let valueString = string.replace(',', '.');
            let value = parseFloat(valueString);
            total += value;
        }
        let number = total.toFixed(2);
        let view = number.toString().replace('.', ',');
        setTotalPrice(view);
        return(
            <h1>{`R$ ${view}`}</h1>
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
                    <input placeholder='Nome completo' value={name} onChange={e => setName(e.target.value)}/>
                    <h2>CPF:</h2>
                    <input placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)}/>
                    <h2>Data de nascimento:</h2>
                    <input placeholder='Data de nascimento' value={birth} onChange={e => setBirth(e.target.value)}/>
                    <h2>Forma de pagamento</h2>
                    <div className='pagamento'>
                        <div className='radio'>
                            <input type='radio' name='pay' id='cartao' value={'Cartão'} onClick={() => setPayment('Cartao')}/>
                            <label for='cartao'>Cartão</label>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='pay' id='pix' value={'Pix'} onClick={() => setPayment('Pix')}/>
                            <label for='pix'>Pix</label>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='pay' id='boleto' value={'Boleto'} onClick={() => setPayment('Boleto')}/>
                            <label for='boleto'>Boleto</label>
                        </div>
                    </div>
                    <div className='total'>
                        <h1>Total:</h1>
                        <Total />
                    </div>
                    <button onClick={SendOrder}>Finalizar pedido</button>
                </div>
            </div>
        </S.Content>
    )
}