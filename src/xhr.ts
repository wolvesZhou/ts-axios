import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index'
import { parseHeaders } from './helpers/headers'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const { data = null, url, method = 'get', headers, responseType } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function handleLoad() {
      /**
       * 0	UNSENT	代理被创建，但尚未调用 open() 方法。
       * 1	OPENED	open() 方法已经被调用。
       * 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
       * 3	LOADING	下载中； responseText 属性已经包含部分数据。
       * 4	DONE	下载操作已完成。
       */
      if (request.readyState !== 4) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData =
        responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }

      resolve(response)
    }

    Object.keys(headers).forEach(key => {
      if (data === null && key.toLocaleLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(key, headers[key])
      }
    })

    request.send(data)
  })
}
