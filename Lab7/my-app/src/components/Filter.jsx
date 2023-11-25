import React from 'react';
import {Form} from 'react-bootstrap';

const Filter = ({name, choices}) => {

    return (
        <Form.Group>
            <Form.Control as="select">
                <option value="">Select {name}</option>
                {choices.map((choice) => (
                    <option key={choice} value={choice}>
                        {choice}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};


export default Filter;