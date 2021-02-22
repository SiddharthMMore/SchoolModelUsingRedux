export const addTeacher = (teacherInfo) =>{
    return {
        type: "ADD_TEACHER",
        payload: teacherInfo
    }
}

export const addCourse = (courseInfo) =>{
    return {
        type: "ADD_COURSE",
        payload: courseInfo
    }
}

export const addClass = (classInfo) =>{
    return {
        type: "ADD_CLASS",
        payload: classInfo
    }
}

