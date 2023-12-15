import React from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import PetCard from "./PetCard";
import {Link} from "react-router-dom";
import pets from "../data/data";

function PetList() {

    const [showAllProducts, setShowAllProducts] = useState(false);
    const displayedProducts = showAllProducts ? pets : pets.slice(0, 3);

    // const products = [
    //     {
    //         imageSrc: '/images/long-tailed-chinchilla.png',
    //         title: 'long-tailed chinchilla',
    //         description: 'The long-tailed chinchilla, known for its luxurious fur and graceful appearance, is a charming companion with a distinctive, elongated tail.',
    //         link: '',
    //     },
    //     {
    //         imageSrc: '/images/short-tailed_baby_chinchilla.jpg',
    //         title: 'baby chinchilla',
    //         description: 'Baby chinchillas, with their irresistible fluffiness and endearing curiosity, bring boundless joy to any home. Known for their playful nature and rapid growth, these young chinchillas enchant with their wide-eyed innocence.',
    //         link: '',
    //     },
    //     {
    //         imageSrc: '/images/short-tailed_chinchilla_2.jpg',
    //         title: 'short-tail chinchilla',
    //         description: 'Short-tailed chinchillas captivate with their compact size and adorable features. These spirited companions are cherished for their playful antics and soft, dense fur.',
    //         link: '',
    //     },
    // ];

    return (
        <Container style={{marginTop: "100px", marginBottom:"50px"}}>
            <Row>
                {displayedProducts.map((pet) => (
                    <PetCard
                        imageSrc={pet.imageSrc}
                        title={pet.title}
                        description={pet.description}
                        link={pet.link}
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