import Header from "../components/Header";
import Footer from "../components/Footer";
import AllPetsList from "../components/AllPetsList";
import OptionsPets from "../components/OptionsPets";
import {useState} from "react";
import {getAllPets} from "../reguests/pets";

function PetPage() {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getAllPets()
            .then((pets) => {
                setPets(pets);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="AllPetsPage">
            <Header/>
            <OptionsPets data={pets} setData={setPets}/>
            <AllPetsList data={pets} loading={loading} error={error}/>
            <Footer/>
        </div>
    );
}


export default PetPage;
