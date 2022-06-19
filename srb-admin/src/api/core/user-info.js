import request from '@/utils/request'
import { get } from 'js-cookie'

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/core/userInfo/list/${page}/${limit}`,
      method: 'get',
      params: searchObj,
    })
  },
  lock(id, status) {
    return request({
      url: `/admin/core/userInfo/lock/${id}/${status}`,
      method: 'put',
    })
  },
  listTop50(id) {
    return request({
      url: `/admin/core/userLoginRecord/listTop50/${id}`,
      method: 'get',
    })
  },
}
