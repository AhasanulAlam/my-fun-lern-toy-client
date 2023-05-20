import FunLearnLab from "../../FunLearnLab/FunLearnLab";
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
            <FunLearnLab></FunLearnLab>
        </div>
    );
};

export default Home;