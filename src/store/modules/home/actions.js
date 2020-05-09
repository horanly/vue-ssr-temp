import { getTopics } from '@/api/home/index.js'

const actions = {
  getListAjax: (ctx, data) => {
    let params = Object.assign({}, data)
    delete params.obj
    getTopics(params).then(res => {
      ctx.commit('changeList', res.data)

      data.limit = data.limit + 10
      data.obj[data.tab].limit = data.limit
      data.obj[data.tab].data = res.data 
      // console.log(data.obj, 'changeStoreList');
      
      ctx.commit('changeStoreList', data.obj)

    }).catch(error => {
      // eslint-disable-next-line
      console.log(error)
    })
  }

}
export default actions
