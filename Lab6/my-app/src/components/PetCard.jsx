// import React from 'react';
// import {Card, Col} from 'react-bootstrap';
// import styles from '../styles/PetList.module.css';
//
// function PetCard(props) {
//     const {imageSrc, title, description} = props;
//
//     return (
//         <Col md={4} >
//             <Card className={"mx-auto " + styles.cardHome}>
//                 <Card.Img variant="top" src={imageSrc} alt="Pet Image" className={styles.cardImgTop}/>
//                 <Card.Body>
//                     <Card.Title className={styles.cardTitle}>{title}</Card.Title>
//                     <Card.Text className={styles.cardText}>{description}</Card.Text>
//                 </Card.Body>
//             </Card>
//         </Col>
//     );
// }
//
// export default PetCard;

import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styles from '../styles/PetList.module.css';

function PetCard(props) {
    const { imageSrc, title, description } = props;

    return (
        <Col md={4}>
            <Card className={"mx-auto " + styles.cardHome} style={{ height: '100%' }}>
                <Card.Img variant="top" src={imageSrc} alt="Pet Image" className={styles.cardImgTop} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                    <Card.Text className={styles.cardText}>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PetCard;
