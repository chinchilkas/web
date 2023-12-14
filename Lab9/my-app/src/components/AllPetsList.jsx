import React from 'react';
import {Container, Row} from 'react-bootstrap';
import AllPetsCard from "./AllPetsCard";

function AllPetsList({data, loading, error}) {
    if (loading) {
        return (
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
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
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row className="justify-content-center">
                    <Alert variant="danger">
                        Error fetching data. Please try again later.
                    </Alert>
                </Row>
            </Container>
        );
    }

    if (data.length === 0) {
        return (
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row className="justify-content-center">
                    <p>Nothing was found for your search :(</p>
                </Row>
            </Container>
        );
    }


    return (
        <Container style={{marginTop: "50px", marginBottom:"50px"}}>
            <Row>
                {data.map((pet) => (
                    <AllPetsCard
                        key={pet.id}
                        id={pet.id}
                        imageSrc={pet.imageSrc}
                        title={pet.title}
                        description={pet.description}
                        price={pet.price}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default AllPetsList;
