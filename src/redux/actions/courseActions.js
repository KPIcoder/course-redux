import * as types from './actionTypes'
import * as courseApi from "../../api/courseApi";
import {beginApiCall} from "./apiStatusActions";

export function createCourse(course) {
    return {type: types.CREATE_COURSE, course};
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginApiCall());
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function saveCourse(course) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch, getState) {
        dispatch(beginApiCall());
        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                throw error;
            });
    };
}
