import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <Container fluid className={styles.footer}>
            <Row className={styles.firstRow}>
                <Col xs={12} sm={6} md={3} className={styles.centerContent}>
                    <div className={styles.left}>
                        <h5>love pets and they will love you</h5>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} className={`${styles.centerContent} ${styles.centerLogo}`}>
                    <img src="/images/logo_4.png" alt="Logo" className={styles.logo} />
                </Col>
                <Col xs={12} sm={6} md={3} className={styles.centerContent}>
                    <div className={styles.right}>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-telegram"></i>
                    </div>
                </Col>
            </Row>
            <Row className={styles.secondRow}>
                <Col xs={12} className={styles.secondRowColumn}>
                    <div className={styles.centerText}>
                        <p style={{ margin: 0, fontSize: 12, fontWeight: 5 }}>2023 FitZone © Copyright all right reserved</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
