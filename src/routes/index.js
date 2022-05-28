import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/main";
import Profile from "../pages/profile/profile";

const MyRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} >
                <Route path=":userId" element={<Profile />}/>
            </Route>
        </Routes>
    );
};

export default MyRouting;
