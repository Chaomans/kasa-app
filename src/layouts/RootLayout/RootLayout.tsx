import { Outlet } from "react-router-dom";
import DataProvider from "../../Providers/DataProvider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./rootLayout.module.scss";
import styles from "./rootLayout.module.scss";

const RootLayout = () => {
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
