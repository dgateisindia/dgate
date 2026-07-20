import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Home/Navbar/Navbar";
import TechnologiesCTA from "../../components/TechnologiesPage/TechnologiesCTA/TechnologiesCTA";
import TechnologiesHero from "../../components/TechnologiesPage/TechnologiesHero/TechnologiesHero";
import TechnologyGrid from "../../components/TechnologiesPage/TechnologyGrid/TechnologyGrid";
import TechnologyStats from "../../components/TechnologiesPage/TechnologyStats/TechnologyStats";

function Technologies() {

    return (

        <>

            <Navbar/>
            <TechnologiesHero />
            <TechnologyGrid/>
            <TechnologyStats/>
            <TechnologiesCTA/>
            <Footer/>

        </>

    );

}

export default Technologies;