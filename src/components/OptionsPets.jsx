import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Search from "./Search";
import Filter from "./Filter";
import ApplyButton from "./ApplyButton";
import {getAllColors, getAllSizes} from "../reguests/products";

// const filterAge = (age, data) => {
//     if (age === "") {
//         return data;
//     } else {
//         return data.filter(item => item.age.includes(age));
//     }
// }
//
// const filterColor = (color, data) => {
//     if (color === "") {
//         return data;
//     } else {
//         return data.filter(item => item.color.includes(color));
//     }
// }
const OptionsPets = ({data, setData}) => {
    const [age, setAge] = useState(0)
    const [color, setColor] = useState(0)

    const [ages, setAges] = useState([])
    const [colors, setColors] = useState([])

    useEffect(() => {
        getAllColors()
            .then((colors) => {
                setColors(colors);
            })
            .catch((error) => {
                console.log(error)
            });
        getAllAges()
            .then((ages) => {
                setAges(ages);
            })
            .catch((error) => {
                console.log(error)
            });

    }, []);

    return (
        <Container fluid style={{marginTop:"30px"}}>
            <Row>
                <Col md={6} style={{display: "flex", justifyContent: "center", gap:"40px"}}>
                    <Filter name={"Color"} choices={colors} state={color} setState={setColor}/>
                    <Filter name={"Age"} choices={ages} state={age} setState={setAge}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "left"}}>
                    <ApplyButton setData={setData} states={[age, color]}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "center"}}>
                    <Search setData={setData} data={data}/>
                </Col>
            </Row>
        </Container>
    );
};

export default OptionsPets;