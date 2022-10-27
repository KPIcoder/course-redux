import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

import {loadAuthors, loadCourses} from "../redux";
import {CourseList, Spinner} from "../components"

const CoursesPage = ({dispatch, courses, authors, loading}) => {

    const [redirectToManage, setRedirectToManage] = useState(false);

    const navigate = useNavigate()

    // console.log(loading);

    useEffect(()=> {
        if (courses.length === 0) dispatch(loadCourses());
        if (authors.length === 0) dispatch(loadAuthors());
    }, [])

    return (
        <>
            {redirectToManage && navigate("/course")}
            <h2>Courses</h2>
            {loading ?
                <Spinner/>
                :
                <>
                    <button
                        style={{marginBottom: 20}}
                        className={'btn btn-primary add-course'}
                        onClick={() => setRedirectToManage(true)}
                    >
                        Add course
                    </button>
                    <CourseList courses={courses}/>
                </>
            }
        </>
    );
};

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
    console.log(state);
    return {
        courses: state.courses.length === 0 ? [] :
            state.courses.map(course => {
            return {
                ...course,
                authorName: state.authors.find(author => author.id === course.authorId).name
            };
        }),
        authors: state.authors,
        loading: state.apiCallsInProgress > 0,
    }
}

export default connect (mapStateToProps) (CoursesPage)
