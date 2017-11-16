export const CREATE_BATCH = 'CREATE_RECIPE'

export default (newBatch) => {
  return {
    type: CREATE_BATCH,
    payload: newBatch
  }
}
