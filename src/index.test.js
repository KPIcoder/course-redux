import {render} from "@testing-library/react";
import {CourseForm} from "./components";

function renderCourseForm(args) {
    let defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => {},
        onChange: () => {},
    };

    const props = {...defaultProps, ...args}
    return render(<CourseForm {...props} />)
}

it('should render Add course header', function () {
    const {getByText} = renderCourseForm();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    getByText("Add Course");
});

it('should label save button as "Save" when not saving', function () {
    const {getByText} = renderCourseForm();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    getByText("Save");
});
