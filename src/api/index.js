import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = ''

//  登陆
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST');