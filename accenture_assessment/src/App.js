import './App.css';
import Navbar from "./nav_bar/Navbar";
import Services from "./screens/Services";
import Cases from "./screens/Cases";
import Industries from "./screens/Industries";
import Contact from "./screens/Contact";

function App() {
    return (
        <div>
            <header className="App-header">
                <Navbar />
            </header>
            <Services />
            <Cases />
            <Industries />
            <Contact />

        </div>
    );
}

export default App;

