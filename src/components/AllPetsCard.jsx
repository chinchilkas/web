import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import styles from '../styles/PetList.module.css';

function AllPetsCard(props) {
    const { imageSrc, title, description, price } = props;

    return (
        <Col md={3}>
            <Card className={"mx-auto " + styles.cardHome}>
                <Card.Img variant="top" src={imageSrc} alt="Product Image" className={styles.cardImgTop} />
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                    <Card.Text className={styles.cardText}>{description}</Card.Text>
                    <Card.Text className={styles.cardText}>Price: ${price}</Card.Text>
                    <Button variant="primary" style={{backgroundColor:"#333", borderStyle:"none"}}>Show More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AllPetsCard;