import { getUserByName } from '@/api/user/index.js'

const actions = {
  getUserAjax(ctx, name) {
    return new Promise((resolve, reject) => {
      getUserByName(name).then(res => {
        ctx.commit('changeUser', res.data)
        resolve(res);
      }).catch(error => {
        // eslint-disable-next-line
        console.log(error)
        reject(error)
      })
    })
  }

}
export default actions
