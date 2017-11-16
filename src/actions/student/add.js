export const ADD_STUDENT = 'ADD_STUDENT'

export default (newStudent) => {
  return {
    type: ADD_STUDENT,
    payload: newStudent
  }
}
