const mutations = {
  changeList(state, data){
    state.list = data
  },
  changeStoreList(state, data){
    // data.limit = data.limit + 10
    // data.obj[data.tab].limit = data.limit
    // data.obj[data.tab].data = res.data 
    state.storeList = data
    // console.log(state.storeList, 'mutations');
  },
  changeTopic(state, data){
    state.topic = data
  }
}
export default mutations
