import { Table } from '../../components/Table/index.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import { useCart } from "../../hooks/CartContext";
import ThashIcons from "../../assets/Trash.svg"

import { ProductImg, Button, Emptycart, ThashImage } from './styles.js'

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deletProduct } = useCart()
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preços</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImg src={product.url} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{formatPrice(product.price)}</Table.Td>
                            <Table.Td>
                                <Button>
                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </Button>
                            </Table.Td>
                            <Table.Td>
                                <div style={{ fontWeight: 'bold' }}>
                                    {formatPrice(product.quantity * product.price)}
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <ThashImage src={ThashIcons} alt="Lixeira" onClick={ () => deletProduct(product.id)}/>
                            </Table.Td>
                           
                        </Table.Tr>
                    ))
                ) : <Emptycart>Carrinho vazio</Emptycart>}
                                                 
            </Table.Body>
        </Table.Root>

    )
}