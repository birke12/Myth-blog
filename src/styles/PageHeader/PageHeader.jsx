import styles from "./pageHeader.module.css"


const PageHeader = ({title, subTitle, headerImg}) => {


    return (
      <header
        className={styles.homePageHeader}
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subTitle}>{subTitle}</h3>
        </div>
      </header>
    );

};

export default PageHeader