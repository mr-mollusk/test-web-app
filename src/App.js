import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import MyRouting from "./routes";

function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.pathname]);

    return (
        <div className="App">
            <Header />
            <MyRouting />
        </div>
    );
}

export default App;
