import React from 'react';
import {Col, Form, FormControl, InputGroup} from 'react-bootstrap';

const handleSearch = (searchQuery, setData) => {
    const filteredResults = data.filter((pet) =>
        pet.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    setData(filteredResults);
};
function Search({data, setData}) {
    return (
        <Form className="mb-3">
            <Col>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Search pet..."
                        onChange={(e) => handleSearch(e.target.value, setData, data)}
                    />
                </InputGroup>
            </Col>
        </Form>
    );
}

export default Search;