import { Locale } from './'
import { Fetcher, Configuration } from 'swr/dist/types'

export interface RequestOptions {
  page?: number
  per_page?: number
  locale?: Locale
}

export type RequestOption = keyof RequestOptions

export type OptionsType = Partial<
  Configuration<unknown, unknown, Fetcher<unknown>>
>
