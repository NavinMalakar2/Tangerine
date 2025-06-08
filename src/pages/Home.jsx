import OpeningHours from "../components/homecomponents/OpeningHours";
import Catering from "../components/homecomponents/Catering";
import Feedback from "../components/homecomponents/Feedback";
import Flavors from "../components/homecomponents/Flavors";
import FoodSlider from "../components/homecomponents/FoodSlider";
import Footer from "../components/homecomponents/Footer";
import Logo from "../components/homecomponents/logo";
import LunchMenu from "../components/homecomponents/LunchMenu";
import Menu from "../components/homecomponents/Menu";
import OurDishes from "../components/homecomponents/OurDishes";
import ReservationForm from "../components/homecomponents/ReservationForm";
import ServiceFeatures from "../components/homecomponents/ServiceFeatures";
import SplitContainer from "../components/homecomponents/SplitContainer";
import WelcomeSection from "../components/homecomponents/WelcomeSection";


const Home = ()=>{
    return(
        <>
            <Logo/>
            <FoodSlider/>
            <ServiceFeatures/>
            <WelcomeSection/>
            <Flavors/>
            <Menu/>
            <ReservationForm/>
            <OurDishes/>
            <Feedback/>
            <SplitContainer/>
            <LunchMenu/>
            <Catering/>
            <OpeningHours/>
            <Footer/>
        </>
    )
}
export default Home;