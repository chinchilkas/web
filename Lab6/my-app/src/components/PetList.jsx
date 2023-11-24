import React from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import PetCard from "./PetCard";

function PetList() {
    const products = [
        {
            imageSrc: '/images/long-tailed-chinchilla.png',
            title: 'long-tailed chinchilla',
            description: 'The long-tailed chinchilla, known for its luxurious fur and graceful appearance, is a charming companion with a distinctive, elongated tail.',
            link: '',
        },
        {
            imageSrc: '/images/short-tailed_baby_chinchilla.jpg',
            title: 'baby chinchilla',
            description: 'Baby chinchillas, with their irresistible fluffiness and endearing curiosity, bring boundless joy to any home. Known for their playful nature and rapid growth, these young chinchillas enchant with their wide-eyed innocence.',

            link: '',
        },
        {
            imageSrc: '/images/short-tailed_chinchilla_2.jpg',
            title: 'short-tail chinchilla',
            description: 'Short-tailed chinchillas captivate with their compact size and adorable features. These spirited companions are cherished for their playful antics and soft, dense fur.',
            link: '',
        },
    ];

    return (
        <Container style={{marginTop: "100px", marginBottom:"50px"}}>
            <Row>
                {products.map((product) => (
                    <PetCard
                        imageSrc={product.imageSrc}
                        title={product.title}
                        description={product.description}
                        link={product.link}
                    />
                ))}
            </Row>
            <div className="text-center">
                <Button variant="primary" style={{backgroundColor:"#333", borderStyle:"none"}}>
                    Show More
                </Button>
            </div>
        </Container>
    );
}

export default PetList;