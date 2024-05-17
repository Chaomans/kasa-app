import { Outlet } from "react-router-dom";
import DataProvider from "../../Providers/DataProvider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./rootLayout.module.scss";
import styles from "./rootLayout.module.scss";

const RootLayout = () => {
  // const { data, isPending, error } = useFetch(
  //   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
  // );

  return (
    <>
      <main className={styles.main}>
        <Header />
        <DataProvider>
          <Outlet />
        </DataProvider>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
