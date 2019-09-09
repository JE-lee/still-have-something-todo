import { Context } from 'egg'

export default () => {
  return async (ctx: Context, next) => {
    let result = await next()
    ctx.body = {
      code: 0,
      message: '请求成功',
      payload: result
    }
  }
}