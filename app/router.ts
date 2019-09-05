import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.home.index)
  // 最近15天天气
  router.get('/weather15', controller.weather.weather15)
}
