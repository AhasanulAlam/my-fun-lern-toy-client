import HowToBuy from "../../HowToBuy/HowToBuy";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import ToyGallery from "../../ToyGallery/ToyGallery";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToBuy></HowToBuy>
            <ShopByCategory></ShopByCategory>
            <ToyGallery></ToyGallery>
        </div>
    );
};

export default Home;