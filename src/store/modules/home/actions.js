import { getTopics } from '@/api/home/index.js'

const actions = {
  getListAjax: (ctx, data) => {
    getTopics(data).then(res => {
      ctx.commit('changeList', res.data)
      let obj = {}
      data.limit = data.limit + 10
      obj[data.tab] = {
        limit: data.limit,
        data: res.data
      }
      console.log(obj, 'changeStoreList');
      
      ctx.commit('changeStoreList', obj)

    }).catch(error => {
      console.log(error)
    })
  }

}
export default actions
