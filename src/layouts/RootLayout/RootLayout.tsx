import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./rootLayout.module.scss";

type RootLayoutProps = {};

const RootLayout = (props: RootLayoutProps) => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
