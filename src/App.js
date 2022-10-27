import React from 'react';
import {Route, Routes} from 'react-router-dom';


import {AboutPage,  HomePage, NotFoundPage} from "./pages";
import {NavBar} from "./components";
import CoursesPage from "./pages/CoursesPage";
import ManageCoursesPage from "./pages/ManageCoursesPage";

const App = () => {
    return (
        <div className="container-fluid">
            <NavBar/>
            <Routes>
                <Route path="/" index element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/courses" element={<CoursesPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
                <Route path={"/course"} element={<ManageCoursesPage/>}/>
                <Route path={"/course/:slug"} element={<ManageCoursesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
