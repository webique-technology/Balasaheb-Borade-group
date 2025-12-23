import { Routes, Route } from "react-router-dom";
import HomePageNGO from "./page/homePageNGO";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePageNGO />} />
        </Routes>
    );
}
