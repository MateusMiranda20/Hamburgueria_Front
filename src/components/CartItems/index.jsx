import { Table } from '../../components/Table/index.jsx'
import { FormatPrice } from '../../utils/FormatPrice.js'
import { useCart } from "../../hooks/CartContext";

export function CartItems () {
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
                                <img src={product.url} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{FormatPrice(product.price)}</Table.Td>
                            <Table.Td>{product.quantity}</Table.Td>
                        </Table.Tr>
                    ))
                ) : <div>Carrinho vazio</div> }
            </Table.Body>
        </Table.Root>
        
    )
}