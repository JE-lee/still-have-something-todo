// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBody from '../../../app/middleware/body';
import ExportError from '../../../app/middleware/error';

declare module 'egg' {
  interface IMiddleware {
    body: typeof ExportBody;
    error: typeof ExportError;
  }
}
