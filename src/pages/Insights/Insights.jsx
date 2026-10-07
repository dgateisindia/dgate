import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import InsightsHero from "../../components/Insights/InsightsHero/InsightsHero";
import FeaturedArticle from "../../components/Insights/FeaturedArticle/FeaturedArticle";
import ExploreTopics from "../../components/Insights/ExploreTopics/ExploreTopics";
import LatestArticles from "../../components/Insights/LatestArticles/LatestArticles";
import InsightsCTA from "../../components/Insights/InsightsCTA/InsightsCTA";

function Insights() {
  return (
    <>
      <Navbar />

      <InsightsHero />
      <FeaturedArticle/>
      <ExploreTopics/>
      <LatestArticles/>
      

      <Footer />
    </>
  );
}

export default Insights;