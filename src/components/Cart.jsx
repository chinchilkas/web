import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import CartItem from "./CartItem";
import styles from "../styles/Cart.module.css"
import {useSelector} from "react-redux";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    return (
        <Container>
            <h2 className={styles.title}>Shopping Cart</h2>
            {cartItems.map((item) => (
                <CartItem
                    id={item.id}
                    color={item.color}
                    age={item.age}
                    amount={item.amount}
                />
            ))}
            <Row className={"justify-content-end " + styles.amountText} >
                <Col md={2}>
                    <h4>Total Amount: ${totalAmount}</h4>
                </Col>
            </Row>
            <Row className={"justify-content-between " + styles.downButtons} >
                <Col md={2}>
                    <Button variant="secondary"><Link to={"/all_pets"} className={styles.backButton}>Back to
                        AllPets</Link></Button>
                </Col>
                <Col md={1}>
                    <Button variant="primary" className={styles.continueButton}>Continue</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
