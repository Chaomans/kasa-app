import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
// import RootLayout from "../layouts/RootLayout/RootLayout";
import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Housing from "../pages/Housing/Housing";
import RootLayout from "../layouts/RootLayout/RootLayout";

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

// const App = () => {
//   return (
//     <DataProvider>
//       <BrowserRouter basename={import.meta.env.PROD ? "/kasa-app/" : "/"}>
//         <Routes>
//           {/* <Outlet context={{ data, isPending, error } satisfies UseFetchReturn} /> */}
//           <Route path="/" element={<Home />} />
//           <Route path="/logement/:id" element={<Housing />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </DataProvider>
//   );
// };

export default App;
