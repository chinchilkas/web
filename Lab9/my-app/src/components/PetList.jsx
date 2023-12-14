import React, {useEffect, useState} from 'react';
import {Button, Container, Row, Spinner, Alert} from 'react-bootstrap';
import PetCard from "./PetCard";
import {getAllPets} from "../reguests/pets";

function PetList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAllProducts, setShowAllProducts] = useState(false);
    useEffect(() => {
        let limit = 3;
        if (showAllProducts) {
            limit = ""
        }
        getAllPets(limit)
            .then((products) => {
                setProducts(products);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [showAllProducts]);

    if (loading) {
        return (
            <Container style={{marginTop: '100px', marginBottom: '50px'}}>
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
            <Container style={{marginTop: '100px', marginBottom: '50px'}}>
                <Row className="justify-content-center">
                    <Alert variant="danger">
                        Error fetching data. Please try again later.
                    </Alert>
                </Row>
            </Container>
        );
    }

    return (
        <Container style={{marginTop: "100px", marginBottom:"50px"}}>
            <Row>
                {displayedProducts.map((pet) => (
                    <PetCard
                        key={pet.id}
                        imageSrc={pet.imageSrc}
                        title={pet.title}
                        description={pet.description}
                    />
                ))}
            </Row>
            {!showAllProducts ? (
                <div className="text-center">
                    <Button
                        variant="primary"
                        style={{backgroundColor:"#333", borderStyle:"none"}}
                        onClick={() => setShowAllProducts(true)}
                    >
                        Show More
                    </Button>
                </div>
                ) : (
                <div className="text-center">
                    <Button
                        variant="primary"
                        style={{ backgroundColor: "#333", borderStyle: "none" }}
                        onClick={() => setShowAllProducts(false)}
                    >
                        Hide
                    </Button>
                </div>
            )}
        </Container>
    );
}

export default PetList;