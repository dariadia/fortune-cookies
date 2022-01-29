import { RequestOption, RequestOptions } from 'types'

export const fetcher = (url: string): Promise<Response> =>
  fetch(url).then(res => res.json())

export const getProtocol = (host: string): string =>
  host.includes('localhost') ? 'http://' : 'https://'

export const buildRequestUrl = (
  url: string,
  RequestParams?: RequestOptions,
): string => {
  if (!RequestParams) {
    return url
  }
  const queryString = Object.keys(RequestParams)
    .map(key => `${key}=${RequestParams[key as RequestOption]}`)
    .join('&')
  return `${url}?${queryString}`
}
