const mutations = {
  changeList(state, data){
    state.list = data
  },
  changeStoreList(state, data){
    state.storeList = data
    console.log(state.storeList, 'mutations');
    
  }
}
export default mutations
