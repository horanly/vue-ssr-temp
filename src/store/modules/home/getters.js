const getters = {
  // 你要计算的属性
  getLists(state) {
    return state.list
  },
  getStoreList(state) {
    return state.storeList
  },
  getTopic(state) {
    return state.topic
  }
}
export default getters
