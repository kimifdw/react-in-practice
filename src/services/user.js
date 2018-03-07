import request from '../utils/request'

async function login (username, password) {
  const res = await request({
    method: 'post',
    url: '/api/login',
    data: { username, password }
  })
  return res
}

export { login }
