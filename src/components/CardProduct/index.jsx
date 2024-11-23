import PropTypes from "prop-types";

import {Container, CardImage} from './styles'
import { useCart } from "../../hooks/CartContext";
import { CardButton } from "../CardButton";

export function CardProduct({product}) {
        
    const { putProductCart } = useCart()

    return (
        
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CardButton onClick={ () => putProductCart(product)}></CardButton>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}