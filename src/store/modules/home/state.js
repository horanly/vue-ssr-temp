const state = {
  list:[],
  storeList: {} // 存储所有Tab对应的数据，因为切换Tab后就没必要重新以limit:20加载数据。
}
export default state
