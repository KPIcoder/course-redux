import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

import {loadAuthors, loadCourses, saveCourse} from "../redux";
import {newCourse} from '../tools/mockData';
import {CourseForm} from "../components";

const ManageCoursesPage = ({dispatch, courses, authors, ...props}) => {

    const [course, setCourse] = useState({...props.course});
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        if (courses.length === 0) dispatch(loadCourses());
        if (authors.length === 0) dispatch(loadAuthors());
    }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setCourse(prevState => ({
            ...prevState,
            [name]: name === 'authorId' ? parseInt(value, 10) : value
        }));
    }

    function handleSave(e) {
        e.preventDefault();

        try {
            dispatch(saveCourse(course))
            navigate('/courses');
        } catch (e) {
            setErrors({onSave: e.message});
        }
    }

    return (
        <>
            <h2>Manage Course Page</h2>
            <CourseForm course={course} authors={authors} errors={errors} onChange={handleChange} onSave={handleSave}/>
        </>
    );
};

ManageCoursesPage.propTypes = {
    course: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        course: newCourse,
        courses: state.courses,
        authors: state.authors
    }
}

export default connect(mapStateToProps)(ManageCoursesPage)
