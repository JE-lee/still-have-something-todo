import { Context } from 'egg'
import { HTTPError } from '../extend/context'
export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 捕捉所有开发者手动抛出的错误
    try {
      await next()
    } catch (err) {
      let error = err as HTTPError
      ctx.status = error.code
      ctx.body = error.message
    }
  }
}