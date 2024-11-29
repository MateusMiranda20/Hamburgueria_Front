import { Table } from '../../components/Table/index.jsx'
import { FormatPrice } from '../../utils/FormatPrice.js'
import { useCart } from "../../hooks/CartContext";

import { ProductImg, Button, Emptycart } from './styles.js'

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct } = useCart()
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preços</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
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
                            <Table.Td>{FormatPrice(product.price)}</Table.Td>
                            <Table.Td>
                                <Button>
                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </Button>
                            </Table.Td>
                            <Table.Td>
                                <div style={{ fontWeight: 'bold' }}>
                                    {FormatPrice(product.quantity * product.price)}
                                </div>
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <Emptycart>Carrinho vazio</Emptycart>}
                                                 
            </Table.Body>
        </Table.Root>

    )
}