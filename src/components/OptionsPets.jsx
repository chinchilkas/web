import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Search from "./Search";
import Filter from "./Filter";
import ApplyButton from "./ApplyButton";

const filterAge = (age, data) => {
    if (age === "") {
        return data;
    } else {
        return data.filter(item => item.age.includes(age));
    }
}

const filterColor = (color, data) => {
    if (color === "") {
        return data;
    } else {
        return data.filter(item => item.color.includes(color));
    }
}
const OptionsPets = () => {
    const [age, setAge] = useState("")
    const [color, setColor] = useState("")
    return (
        <Container fluid style={{marginTop:"30px"}}>
            <Row>
                <Col md={6} style={{display: "flex", justifyContent: "center", gap:"40px"}}>
                    <Filter name={"Color"} choices={["Gray", "White", "Ginger"]} state={color} setState={setColor}/>
                    <Filter name={"Age"} choices={["1 month", "3 month", "1 year"]} state={age} setState={setAge}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "left"}}>
                    <ApplyButton setData={setData} states={[age, color]} filters={[filterAge, filterColor]}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "center"}}>
                    <Search setData={setData}/>
                </Col>
            </Row>
        </Container>
    );
};

export default OptionsPets;