import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api'
import {Filter, FilterOption } from './styles'
import { orderStatus } from './orderStatus';




export function Orders() {
    const [orders, setOrders] = useState([]) // BACKUP
    const [filterOredrs, setFilterOrders] = useState([]) // VALORES NA TELA
    const [activeStatus, setActiveStatus] = useState(0) 
    const [rows, setRows] = useState([])

    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get('orders')

            setOrders(data)
            setFilterOrders(data)

          
        }

        loadOrders();
    }, [])

    useEffect(() => {
        const newRows = filterOredrs.map(order => createData(order))

        setRows(newRows)
    }, [filterOredrs])

    useEffect(() => {
        if (activeStatus === 0) {
            setFilterOrders(orders)
        } else {
            const statusIndex = orderStatus.findIndex((item) => item.id === activeStatus)

            const newFilterOrders = orders.filter((order) => order.status === orderStatus[statusIndex].value)

            setFilterOrders[newFilterOrders]
        };
    }, [orders])

 


    function handStatus(status) {

        if(status.id === 0) {
            setFilterOrders(orders)
        } else {
            const newOredrs = orders.filter((order) => order.status === status.value);

            setFilterOrders(newOredrs)
        }

        setActiveStatus(status.id)
    }

    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: order.createdAt,
            status: order.status,
            products: order.products,
        };
    }

    return (
        <>
            <Filter>
                {orderStatus.map((status) => (
                    <FilterOption  
                    key={status.id}
                    onClick={ () => handStatus(status)}
                    $isctiveStatus={activeStatus === status.id}
                    >
                    {status.label}</FilterOption>
                ))}
            </Filter>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell> Pedidos</TableCell>
                            <TableCell> Cliente</TableCell>
                            <TableCell> Data do pedido</TableCell>
                            <TableCell> Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.orderId}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}