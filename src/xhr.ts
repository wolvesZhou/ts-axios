import { AxiosRequestConfig } from './types/index'

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get', headers } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(key => {
    if (data === null && key.toLocaleLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(key, headers[key])
    }
  })

  request.send(data)
}
