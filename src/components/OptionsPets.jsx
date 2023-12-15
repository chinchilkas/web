import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Search from "./Search";
import Filter from "./Filter";
import ApplyButton from "./ApplyButton";

const OptionsPets = () => {
    return (
        <Container fluid style={{marginTop:"30px"}}>
            <Row>
                <Col md={6} style={{display: "flex", justifyContent: "center", gap:"40px"}}>
                    <Filter name={"Color"} choices={["Gray", "White", "Black"]}/>
                    <Filter name={"Age"} choices={["1 month", "3 month", "1 year"]}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "left"}}>
                    <ApplyButton/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "center"}}>
                    <Search/>
                </Col>
            </Row>
        </Container>
    );
};

export default OptionsPets;