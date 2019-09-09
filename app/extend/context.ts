
export interface HTTPError {
  code: number,
  message: string
}

export default {
  error(code: number, message: string) {
    return Promise.reject({
      code,
      message,
    } as HTTPError)
  },
}
