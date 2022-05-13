import * as S from './styles';

export default function ProductsForm(){
    return(
        <S.Content>
            <h1>Informe os dados do produto</h1>
            <input placeholder='marca' />
            <input placeholder='modelo' />
            <input placeholder='imagem' />
            <button>Enviar os dados</button>
        </S.Content>
    );
}