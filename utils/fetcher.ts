export const fetcher = (url: string): Promise<Response> =>
  fetch(url).then(res => res.json())
