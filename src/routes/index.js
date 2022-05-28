import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/profile";
import Profile from "../pages/profile/profile";

const MyRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default MyRouting;
