import React from 'react';
import {Container, Row} from 'react-bootstrap';
import AllPetsCard from "./AllPetsCard";

function AllPetsList() {
    const pets = [
        {
            imageSrc: '/images/alabay.jpg',
            title: 'Alabay (Central Asian Shepherd Dog)',
            description: 'The Alabay is a large and robust breed, with males typically standing between 25 to 28 inches (64 to 72 cm) at the shoulder and weighing around 110 to 220 pounds (50 to 100 kg). Females are generally slightly smaller.',
            price: '250',
            link: '',
        },
        {
            imageSrc: '/images/baby_alabay.jpg',
            title: 'Alabay Puppy (Central Asian Shepherd Dog)',
            description: 'Alabay puppies can vary in size and weight, but on average, they may weigh between 5 to 10 pounds (2 to 4.5 kg) and stand around 8 to 12 inches (20 to 30 cm) at the shoulder during the early weeks of life.',
            price: '300',
            link: '',
        },
        {
            imageSrc: '/images/husky.jpg',
            title: 'Husky (Siberian Husky)',
            description: 'Siberian Huskies are a medium-sized working dog breed. Males typically stand about 21 to 23.5 inches (53 to 60 cm) at the shoulder and weigh between 45 to 60 pounds (20 to 27 kg), while females are slightly smaller.',
            price: '200',
            link: '',
        },
        {
            imageSrc: '/images/baby_husky.jpg',
            title: 'Husky Puppy (Siberian Husky)',
            description: 'Husky puppies are generally smaller compared to adults. On average, a Husky puppy might weigh between 1.5 to 3 pounds (0.7 to 1.4 kg) and stand around 6 to 10 inches (15 to 25 cm) at the shoulder in the first few weeks.',
            price: '200',
            link: '',
        },
        {
            imageSrc: '/images/scottish_fold.jpg',
            title: 'Scottish Fold',
            description: 'Scottish Folds are a medium-sized cat breed. Adult males usually weigh between 9 to 13 pounds (4 to 6 kg), while females typically weigh between 6 to 9 pounds (3 to 4 kg). The size can vary somewhat depending on factors such as genetics and individual health',
            price: '150',
            link: '',
        },
        {
            imageSrc: '/images/scottish_fold_kitten.jpg',
            title: 'Scottish Fold Kitten',
            description: 'Scottish Fold kittens are typically small and lightweight. A Scottish Fold kitten may weigh between 0.2 to 0.5 pounds (90 to 225 grams) and measure around 2 to 4 inches (5 to 10 cm) in height during the first weeks of life.',
            price: '150',
            link: '',
        },
    ];


    return (
        <Container style={{marginTop: "50px", marginBottom:"50px"}}>
            <Row>
                {pets.map((pet) => (
                    <AllPetsCard
                        imageSrc={pet.imageSrc}
                        title={pet.title}
                        description={pet.description}
                        price={pet.price}
                        link={pet.link}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default AllPetsList;
