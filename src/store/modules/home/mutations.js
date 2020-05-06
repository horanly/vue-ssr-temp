const mutations = {
  changeList(state, data){
    console.log(state, data, 'mutations');
    
    state.list = data
  }
}
export default mutations
