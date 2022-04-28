import {
    Route, Routes
} from "react-router-dom";
import Demo from "../components/forms/Demo";
import Demo2 from "../components/forms/Demo2";
import DashboardLayout from "../layouts/DashboardLayout";
import Dummy from "../pages/Dummy";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/Notfound";

export default function Router() {
    return (
        <>
            <Routes>
               
                <Route path="/" element={<Dummy />} >
                {/* <Route index element={<Dummy />} /> */}
                </Route>
                <Route path="/*" element={<DashboardLayout />} >
                    {/* <Route index element={<Home />} /> */}
                    <Route path="country" element={<Demo2 />} />
                    <Route path="one" element={<Home />} />
                    <Route path="dashboard" element={<Demo />} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
                <Route path="*" element={<NotFound/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </>
    )
}