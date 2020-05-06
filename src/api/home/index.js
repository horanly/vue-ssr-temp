// 接口
import { get } from '../http.js'

// 会议要闻：506b5dec60574e58981df54d30ec0ea6
// 媒体关注：6c4bcf43ae264192a982135c1a359811
// 代表风采：e98d8663517e431aa7ecb95fa13b4eb6  
// 会议简报：aa1746d993d34329b9f9a7d861329dd1
// 会议材料：51141b1fd60d48b3a9e40581b7840c8d
// 会议日程：78f9e8bd0b324cd7ba845cbb754f85e5
// 意见征集：9aab335b16ec423f9dd25dc181cdd3dd

export const getList = (data) => get(`/cloud-dblzpt/xxzl/list?ZLZT=${data}`)
