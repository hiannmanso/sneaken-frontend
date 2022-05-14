import * as S from './styles';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductsForm(){
    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [image, setImage] = React.useState('');
    const [size, setSize] = React.useState();
    const [amount, setAmount] = React.useState();
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [color, setColor] = React.useState('');
    const navigate = useNavigate(); 
    let imageRegex = /(https?:\/\/.*\.(?:png|jpg|svg|jpeg))/i;
    let priceRegex = /^(\d+\,\d{2})/g;
    function sendForm(){
        if(brand !== '' && model !== '' && image !== '' && size !== '' && amount !== '' && price !== '' && imageRegex.test(image) && color !== '' && description !== '' && priceRegex.test(price)){
            let items = [];
            for(let i=0;i<amount;i++){
                items.push({
                    brand: brand,
                    model: model,
                    size: size
                });
            }
            let obj = {
                brand: brand,
                model: model,
                price: price,
                description: description,
                color: color,
                image: image,
                amount: items
            };
            let config ={
                headers:{"Authorization":"f5d61834-921a-441d-942b-11684fecf219"}
            }
            let promisse = axios.post('http://localhost:5000/products', obj, config);
            promisse.then(() => navigate('/'));
            promisse.catch(() => alert('Houve um erro no envio das informações. Tente novamente mais tarde'));
        } else {
            alert("Preencha corretamente todos os campos");
        }
    }
    return(
        <S.Content>
            <h1>Informe os dados do produto</h1>
            <h2>Adicione a marca:</h2>
            <input placeholder='Marca' value={brand} onChange={e => setBrand(e.target.value)}/>
            <h2>Adicione o modelo:</h2>
            <input placeholder='Modelo' value={model} onChange={e => setModel(e.target.value)}/>
            <h2>Adicione a cor:</h2>
            <input placeholder='Cor' value={color} onChange={e => setColor(e.target.value)}/>
            <h2>Adicione a descrição:</h2>
            <input placeholder='Descrição' value={description} onChange={e => setDescription(e.target.value)}/>
            <h2>Adicione a imagem:</h2>
            <input placeholder='Imagem' value={image} onChange={e => setImage(e.target.value)}/>
            <h2>Adicione o preço (Ex: 100,00):</h2>
            <input placeholder='Preço' value={price} onChange={e => setPrice(e.target.value)}/>
            <h2>Adicione o tamanho e quantidade:</h2>
            <div class="sizes">
                <input placeholder='Número' value={size} onChange={e => setSize(e.target.value)}/>
                <input placeholder='Quantidade' value={amount} onChange={e => setAmount(e.target.value)}/>
            </div>
            <button onClick={sendForm}>Enviar os dados</button>
        </S.Content>
    );
}