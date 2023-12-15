import React from 'react';
import {Col, Form, FormControl, InputGroup} from 'react-bootstrap';
import pets from "../data/data";

const handleSearch = (searchQuery, setData) => {
    const filteredResults = pets.filter((pet) =>
        pet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setData(filteredResults);
};
function Search() {
    return (
        <Form className="mb-3">
            <Col>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Search pet..."
                        onChange={(e) => handleSearch(e.target.value, setData)}
                    />
                </InputGroup>
            </Col>
        </Form>
    );
}

export default Search;