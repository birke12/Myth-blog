import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";
import AcropolisArticle from "./pages/acropolisArticle/AcropolisArticle.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Footer from "./components/footer/Footer.jsx";
import Greece from "./pages/greece/Greece.jsx";
/* import Greece from "./pages/greece/Greece.jsx"; */

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/acropolisArticle", element: <AcropolisArticle /> },
    { path: "/aboutUs", element: <AboutUs /> },
    { path: "/greece", element: <Greece /> }
  ]);

  return (
    <>
      <div className="app">
        <Navigation />
        <div className="content">{routes}</div>

        <Footer />
      </div>
    </>
  );
}

export default App;
