import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import InsightsHero from "../../components/Insights/InsightsHero/InsightsHero";
import FeaturedArticle from "../../components/Insights/FeaturedArticle/FeaturedArticle";
import ExploreTopics from "../../components/Insights/ExploreTopics/ExploreTopics";

function Insights() {
  return (
    <>
      <Navbar />

      <InsightsHero />
      <FeaturedArticle/>
      <ExploreTopics/>

      <Footer />
    </>
  );
}

export default Insights;