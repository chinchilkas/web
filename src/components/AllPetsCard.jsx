import React from 'react';
import {Card, Col, Button} from 'react-bootstrap';
import styles from '../styles/PetList.module.css';
import {Link} from "react-router-dom";

function AllPetsCard(props) {
    const { id, imageSrc, title, description, price} = props;

    return (
        <Col md={3}>
            <Card className={"mx-auto " + styles.cardHome}>
                <Card.Img variant="top" src={imageSrc} alt="Pet Image" className={styles.cardImgTop}/>
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                    <Card.Text className={styles.cardText}>{description}</Card.Text>
                    <Card.Text className={styles.cardText}>Price: ${price}</Card.Text>
                    <Button variant="primary" style={{backgroundColor:"#333", borderStyle:"none"}}><Link to={"/all_pets/" + id} className={styles.showMore}>Show More</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AllPetsCard;