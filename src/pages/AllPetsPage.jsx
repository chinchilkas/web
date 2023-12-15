import Header from "../components/Header";
import Footer from "../components/Footer";
import AllPetsList from "../components/AllPetsList";
import OptionsPets from "../components/OptionsPets";
import {useState} from "react";
import pets from "../data/data"

function PetPage() {
    const [items, setItems] = useState(pets)

    return (
        <div className="AllPetsPage">
            <Header/>
            <OptionsPets data={items} setData={setItems}/>
            <AllPetsList data={items}/>
            <Footer/>
        </div>
    );
}


export default PetPage;
