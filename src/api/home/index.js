// 接口
import { get } from '../http.js'

export const getTopics = (data) => get(`/topics`, data)

export const getTopicById = (data) => get(`/topic/${data}`)
