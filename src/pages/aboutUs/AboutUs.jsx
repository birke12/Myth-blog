import Newsletter from "../../components/newsletter/Newsletter";
import PageHeader from "../../components/PageHeader/PageHeader";

const AboutUs = ({}) => {
return (
  <article>
    <PageHeader
      headerType="aboutUs"
      title="Ancient Journeys"
      subTitle="placeholder"
      /* headerImg={headerImg} */
    />

    <div>
      <Newsletter />
    </div>
  </article>
);
}


export default AboutUs