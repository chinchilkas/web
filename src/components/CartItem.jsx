import React, {useEffect, useState} from 'react';
import {Card, Button, Container, Row, Spinner, Alert, Col} from 'react-bootstrap';
import {getProductDetails} from "../reguests/pets";
import {useDispatch} from "react-redux";
import {addProduct, changeAmount, deleteProduct} from "../store/action";
import styles from "../styles/Cart.module.css"

const CartItem = ({id, color, size: age, amount}) => {
    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProductDetails(id)
            .then((product) => {
                setPet(product);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(id, color, age));
    };
    const handleIncrease = () => {
        dispatch(changeAmount(id, color, age, 1));
    };
    const handleDecrease = () => {
        dispatch(changeAmount(id, color, age, -1));
    };


    if (loading) {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Alert variant="danger">
                        Error fetching data. Please try again later.
                    </Alert>
                </Row>
            </Container>
        );
    }

    return (
        <Row className="justify-content-md-center align-items-center" style={{border:"2px" ,borderStyle:"solid ", marginTop:"5px", borderRadius:"30px", alignItems:"center"}}>
            <Col md={2}>
                <Card.Img src={pet.image} alt={pet.title} style={{width: "100px", height:"100px", borderTopLeftRadius:"30px", borderBottomLeftRadius:"30px"}}/>
            </Col>
            <Col md={2}>
                <p>Color: {color}</p>
            </Col>
            <Col md={2}>
                <p>Age: {age}</p>
            </Col>
            <Col style={{display:"flex"}} >
                <Button variant="primary" age="sm" className={styles.amountButtons} onClick={handleDecrease}>-</Button>
                <p>Amount: {amount}</p>
                <Button variant="primary" age="sm" className={styles.amountButtons} onClick={handleIncrease}>+</Button>
            </Col>
            <Col md={2}>
                <p>Price: ${pet.price}</p>
            </Col>
            <Col md={1}>
                <Button variant="dark" onClick={handleDelete}>Delete</Button>
            </Col>
        </Row>
    );
};

export default CartItem;