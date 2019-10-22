import request from "utils/request"

export function getTopPosts(limit = 50) {
  return request({
    url: "top.json",
    method: "get",
    params: {
      limit,
    },
  })
}
