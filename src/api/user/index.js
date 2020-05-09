// 接口
import { get } from '../http.js'

export const getUserByName = (data) => get(`/user/${data}`)
