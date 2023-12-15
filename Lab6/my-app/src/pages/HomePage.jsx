import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import PetList from "../components/PetList";

function HomePage() {
    return (
        <div className="HomePage">
            <Header/>
            <Heading/>
            <PetList/>
            <Footer/>
        </div>
    );
}

export default HomePage;