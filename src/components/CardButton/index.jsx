import Cart from '../../assets/lixeira.svg'

import { ContainerButton} from '../CardButton/styles'


export function CardButton({...props}) {
    return(
        <ContainerButton {...props}>
            <img src={Cart} alt="carrinho-de-dompras" />
        </ContainerButton>
    )
}