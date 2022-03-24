import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Author from "./Pages/Dashboard/Author/Author";
import FavAuthor from "./Pages/Dashboard/FavAuthor/FavAuthor";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="author" element={<Author />}></Route>
                    <Route path="favorite" element={<FavAuthor />}></Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
