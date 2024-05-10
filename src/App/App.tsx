import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import RootLayout from "../layouts/RootLayout/RootLayout";
import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Housing from "../pages/Housing/Housing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="logement/:id" element={<Housing />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  ),
  {
    basename: import.meta.env.PROD ? "/kasa-app/" : "/",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
