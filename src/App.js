import axios from "axios";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import CardsPage from "./component/CardsPage";
import CardPage from "./component/CardPage";

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cards">Card</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cards" element={<CardsPage />} />
                <Route path="/cards/:id" element={<CardPage />} />
            </Routes>
        </div>
    );
}

export default App;
