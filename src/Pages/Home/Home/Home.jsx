import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Gallery from "../Gallery/Gallery";
import SectionOne from "../Section-one/SectionOne";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <SectionOne></SectionOne>
        </div>
    );
};

export default Home;