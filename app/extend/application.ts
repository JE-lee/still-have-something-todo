
export interface HTTPError {
  code: number,
  message: string
}
module.exports = {
  cerror(code: number, message: string) {
    return Promise.reject({
      code,
      message,
    } as HTTPError)
  },
}
