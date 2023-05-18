import HowToBuy from "../../HowToBuy/HowToBuy";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToBuy></HowToBuy>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;