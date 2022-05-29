import { Route, Routes } from "react-router-dom";
import Comments from "../pages/comments/comments";
import Main from "../pages/main/main";
import Profile from "../pages/profile/profile";

const MyRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />}>
                <Route path=":userId" element={<Profile />} />
            </Route>
            <Route path="/comments" element={<Comments />}>
                <Route path=":postId" element={<Comments />} />
            </Route>
        </Routes>
    );
};

export default MyRouting;
