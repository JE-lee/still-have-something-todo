import { Controller } from 'egg'

class WeatherController extends Controller {
  async weather15() {
    const { ctx, service } = this
    const cityName: string = ctx.query.city
    console.log('ctx.cerror', ctx.cerror)
    const result = await service.weather.getWeather15(cityName)
    ctx.body = result
  }
}

export default WeatherController
