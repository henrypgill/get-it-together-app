// import { useState } from "react";
import { Main } from "./Main";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import "./styles/App.css";
// import "./styles/Calendar.css";
// import { DbUserData } from "../../get-it-together-server/src/types";

function App() {
    // const [user, setUser] = useState<DbUserData>();

    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
