import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, headerImg, headerType }) => {
  return (
    <header
      /* className={`${styles.header} ${header2 || ""}`} */
      className={
        headerType === "home"
          ? "homePageHeader"
          : headerType === "aboutUs"
          ? "aboutUsPageHeader"
          : "contactPageHeader"
      }
      /* style={{ backgroundImage: `url(${headerImg})` }} */
    >
      <div
        className={`${styles.headerMainContainer} ${
          headerType === "home"
            ? styles.homeHeaderMainContainer
            : headerType === "aboutUs"
            ? styles.aboutHeaderMainContainer
            : styles.defaultHeaderMainContainer
        }`}
      >
        {headerType === "home" && (
          <>
            <div className={styles.headerContainer}>
              <h1 className={styles.title}>{title}</h1>

              <h3 className={styles.subTitle}>{subTitle}</h3>
            </div>
          </>
        )}
        {headerType === "aboutUs" && (
          <>
            <div className={styles.aboutHeaderContainer}>
              <h1 className={styles.title}>{title}</h1>

              <h3 className={styles.subTitle}>{subTitle}</h3>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
