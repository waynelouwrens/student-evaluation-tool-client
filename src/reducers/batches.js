import { CREATE_BATCH } from '../actions/batches/create'

const batches = [
  {
    batchNumber: 1,
    start_date: "2017-11-14",
    end_date: "2017-12-14",
  },
  {
    batchNumber: 2,
    start_date: "2017-12-14",
    end_date: "2018-01-14",
  },
]

export default (state = batches, { type, payload }= {}) => {
  switch(type) {
    case CREATE_BATCH:
      return [Object.assign({}, payload)].concat(state)

    default:
    return state
  }
}
