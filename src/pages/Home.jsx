/* import headerImg from "../assets/Background-greek-myth.png"; */
import ArticleSection from "../components/articleSection/ArticleSection";
import Introduction from "../components/introduction/Introduction";
import Newsletter from "../components/newsletter/Newsletter";
import PageHeader from "../components/PageHeader/PageHeader";



  


const Home = () => {
  return (
    <article>
      <PageHeader headerType="home"
        title="Ancient Journeys"
        subTitle="The Mythical Travel Blog"
        /* headerImg={headerImg} */
      />
      <div>
        <Introduction />
      </div>
      <div className="mostViewedArticle">
        <div className="titleWithLines">
          <span className="line"></span>
          <h2>Mest læste artikler</h2>
          <span className="line"></span>
        </div>
        {/* <ArticleSection jsonPath="/data/athenarticles.json" /> */}
        <ArticleSection
          jsonPath="/data/athenarticles.json"
         /*  text="In the midst of chaos, there is also opportunity."
          author="Sun Tzu" */
        />
      </div>
      <div>
        <Newsletter />
      </div>
    </article>
  );
};

export default Home;
