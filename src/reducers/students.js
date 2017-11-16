import { ADD_STUDENT } from '../actions/student/add'

const students = [
  {
    name: "Wayne Louwrens",
    photo: "https://image.flaticon.com/icons/svg/145/145859.svg",
  },
  {
    name: "Marco Woud",
    photo: "https://image.flaticon.com/icons/svg/145/145867.svg",
  },
]


export default (state = students, { type, payload }= {}) => {
  switch(type) {
    case ADD_STUDENT:
      return [Object.assign({}, payload)].concat(state)

    default:
    return state
  }
}
