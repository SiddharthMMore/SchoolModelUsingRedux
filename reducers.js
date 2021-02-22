import { combineReducers } from 'redux';

const TeachersReducer = (state, action)=>{
    /*
    Some code to change the state according to the action
    */
}
const CoursesReducer = (state, action)=>{
    /*
    Some code to change the state according to the action
    */
}
const ClassesReducer = (state, action)=>{
    /*
    Some code to change the state according to the action
    */
}
const SchoolReducer = combineReducers({
  Teachers: TeachersReducer,
  Courses: CoursesReducer,
  Classes: ClassesReducer
});

export default SchoolReducer;


