import { getList } from '@/api/home/index.js'

const actions = {
  getListAjax: (ctx, item) => {
    getList(item).then(data => {
      console.log(ctx, 'actions');
      
      ctx.commit('changeList', data.varList)
    }).catch(error => {
      console.log(error)
    })
  }

}
export default actions
