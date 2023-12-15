import Header from "../components/Header";
import Footer from "../components/Footer";
import AllPetsList from "../components/AllPetsList";
import OptionsPets from "../components/OptionsPets";

function PetPage() {
    return (
        <div className="AllPetsPage">
            <Header/>
            <OptionsPets/>
            <AllPetsList/>
            <Footer/>
        </div>
    );
}


export default PetPage;
