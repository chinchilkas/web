import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from '../styles/Heading.module.css';

const Heading = () => {
    return (
        <Container fluid className="mt-5">
            <Row className={styles.container}>
                <Col md={4}>
                    <Image src="images/chinchilla_1.png" alt="Logo" fluid />
                </Col>
                <Col md={8} className={styles.textContainer}>
                    <div className={styles.text}>
                        <h1>CHINCHILover</h1>
                        <p>Embark on a journey into the enchanting world of chinchillas with CHINCHILover, your comprehensive guide to these adorable creatures. Explore expert advice on chinchilla care, connect with a vibrant community, and discover a curated selection of products. As your fascination with chinchillas grows, so does our commitment to helping you find the ideal pet companion. CHINCHILover extends beyond chinchilla expertise to guide you in choosing the perfect pet for your lifestyle. Whether you're a seasoned owner or a beginner, join us on this exciting adventure where the world of chinchillas expands into a broader exploration of pet companionship. Welcome to CHINCHILover – where the journey begins with chinchillas but leads you to your perfect furry friend.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Heading;
