import React from 'react';
import {Col, Form, FormControl, InputGroup} from 'react-bootstrap';

function Search() {
    return (
        <Form className="mb-3">
            <Col>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Search pet..."
                    />
                </InputGroup>
            </Col>
        </Form>
    );
}

export default Search;