import { Main } from "./Main";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
