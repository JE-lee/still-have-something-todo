// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportWeather from '../../../app/service/weather';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    weather: ExportWeather;
  }
}
