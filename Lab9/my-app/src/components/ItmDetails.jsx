import React from 'react';
import {Button, Container, Form, Col, Row, Card, Image} from 'react-bootstrap';
import styles from '../styles/ItemDetails.module.css';
import {Link} from "react-router-dom";
import {getPetDetails} from "../reguests/pets";

const ItemDetails = ({id}) => {
    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getPetDetails(id)
            .then((product) => {
                setPet(product);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container className={styles.container}>
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
            <Container className={styles.container}>
                <Row className="justify-content-center">
                    <Alert variant="danger">
                        Error fetching data. Please try again later.
                    </Alert>
                </Row>
            </Container>
        );
    }

    return (
        <Container className={styles.container}>
            <Card>
                <Row>
                    <Col sm={4}>
                        <Image src={pet.image} alt={pet.title} fluid className={styles.picture}/>
                    </Col>
                    <Col sm={8}>
                        <Card.Body>
                            <Card.Title className={styles.title}>{pet.title}</Card.Title>
                            <Card.Text className={styles.description}>{pet.description}</Card.Text>
                            <Form fluid>
                                <Form.Group as={Row}>
                                    <Form.Label column md="2">
                                        Quantity
                                    </Form.Label>
                                    <Col md="2">
                                        <Form.Control type="number"/>
                                    </Col>
                                </Form.Group>
                                <Row className={styles.fieldsRow}>
                                    <Form.Group as={Row}>
                                        <Form.Label column md="2">
                                            Color
                                        </Form.Label>
                                        <Col md="4">
                                            <Form.Control as="select">
                                                <option value="">Select Color</option>
                                                {pet.colors.map((choice) => (
                                                    <option key={choice.id} value={choice.id}>
                                                        {choice.name}
                                                    </option>))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column md="2">
                                            Age
                                        </Form.Label>
                                        <Col md="4">
                                            <Form.Control as="select">
                                                <option value="">Select Size</option>
                                                {pet.age.map((choice) => (
                                                    <option key={choice.id} value={choice.id}>
                                                        {choice.name}
                                                    </option>))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>
                <Row className={styles.bottomRow}>
                    <Col sm={8}>
                        <Card.Text className={styles.price}>Price: ${pet.price}</Card.Text>
                    </Col>
                    <Col sm={4} className={styles.buttonsRow}>
                        <Button variant="primary" className={styles.buttons}><Link to={"/all_pets"} className={styles.goBack}>Go back</Link></Button>
                        <Button variant="primary" className={styles.buttons}>Add to Cart</Button>
                    </Col>
                </Row>
            </Card>
        </Container>
    );

};

export default ItemDetails;