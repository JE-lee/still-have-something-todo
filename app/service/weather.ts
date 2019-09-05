import { Service } from 'egg'
import path = require('path')
import fs = require('fs')

const cityJson = path.resolve(__dirname, '../../assets/city-code.json')
const weather15Url = 'http://t.weather.sojson.com/api/weather/city'
const CITY_CODE = JSON.parse(fs.readFileSync(cityJson, 'utf8'))

interface City {
  readonly id: number,
  readonly pid: number,
  readonly city_name: string,
  readonly city_code: string
}
class WeatherService extends Service {
  findCityCode(cityName: string) {
    const city = CITY_CODE.find((city: City) => city.city_name === cityName)
    return (city && city.city_code) || ''
  }

  async getWeather15(cityName: string) {
    const cityCode = this.findCityCode(cityName)
    const result = await this.ctx.curl(`${weather15Url}/${cityCode}`, { dataType: 'json' })
    if (result.status === 200 && result.data.status === 200) {
      return result.data.data
    } else {
      return Promise.reject(result)
    }
  }
}

export default WeatherService
