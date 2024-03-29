import request from "@/utils/request";

const url = "/user";
// 用户列表
export function user_list(data) {
  return request({
    url,
    method: "get",
    params: data,
  });
}
// 添加用户
export function user_create(data) {
  return request({
    url,
    method: "post",
    data,
  });
}
//  删除用户
export function user_delete(id) {
  return request({
    url: `${url}/${id}`,
    method: "delete",
  });
}
// 详情
export function user_show(id) {
  return request({
    url: `${url}/${id}`,
    method: "get",
  });
}
// 修改
export function user_put(id, data) {
  return request({
    url: `${url}/${id}`,
    method: "put",
    data,
  });
}
