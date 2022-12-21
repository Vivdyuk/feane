import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { selectOrdersReducer } from "../../../reducers/rootReducer";
import { Col, Row, Table } from "react-bootstrap";
import './OrderModal.scss';
import { IOrder } from "../../sections/MenuSection/MenuCard/MenuCard";
import { OrderCard } from "../OrderCard/OrderCard";
import { Report } from 'notiflix';
import { clearOrders } from "../../../reducers/ordersReducer/ordersActions";

interface IModalWindowProps {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderModal = ({ show, setShow }: IModalWindowProps) => {
    const orders: IOrder[] = useSelector(selectOrdersReducer);
    const dispatch = useDispatch();

    const handleClose = () => {
        setShow(false);
    }
    const handleOrder = () => {
        setShow(false);
        Report.success(
            'Order is accepted!',
            'In the future, you\'ll be transfered to the payment section from here',
            'Okay'
        );
        dispatch(clearOrders());
    }


    return (
        <>
            <Modal
                show={ show }
                onHide={handleClose}
                size={ 'lg' }
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>You want to offer...</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { orders.length
                        ? <>
                            <Table striped bordered hover responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th colSpan={ 2 }>Amount</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                { orders.map((order, i) => (
                                    <OrderCard key={ order.id } order={ order } index={ i }/>
                                )) }
                                </tbody>
                            </Table>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                    <h4>TOTAL PRICE: </h4>
                                </Col>
                                <Col>
                                    <h2>
                                        ${ orders.reduce((acc, { amount, price }) => acc + price * amount, 0) }
                                    </h2>
                                </Col>
                            </Row>
                        </>
                        : <h2>Just add something</h2>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button
                        variant="warning"
                        className={ 'order-online' }
                        onClick={ handleOrder }
                        disabled={!orders.length}
                    >
                        Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
