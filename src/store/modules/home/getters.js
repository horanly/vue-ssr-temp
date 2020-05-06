const getters = {
  // 你要计算的属性
  getLists(state) {
    console.log(state, 'getters');
    
    return state.list
  }
}
export default getters
