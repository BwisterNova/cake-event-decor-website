import styles from "./pageNotFound.module.css";
import { Helmet } from "react-helmet";

export default function PageNotFound() {
  return (
    <div className={styles.NoPageSection}>
      <Helmet>
        <title>Page Not Found - DE-Favour Cakes & Events</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Return to our homepage."
        />
      </Helmet>
      <div className={styles.NoPageContainer}>
        <div className={styles.noPagetext}>
          <h3>Oops!, Page doesn't exist....😶</h3>
          <p>
            To return back to home page. <a href="/">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
